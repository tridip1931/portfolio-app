import { prisma } from './prisma'
import { notFound } from 'next/navigation'

export interface CaseStudyData {
  id: string
  title: string
  slug: string
  description: string
  excerpt: string
  content?: string
  client?: string
  year?: string
  role?: string
  duration?: string
  platforms?: string[]
  featuredImage?: string
  images?: string[]
  liveUrl?: string
  githubUrl?: string
  prototypeUrl?: string
  featured: boolean
  status: string
  publishedAt?: Date
  updatedAt: Date
  category?: {
    id: string
    name: string
    slug: string
    color?: string
  }
  tags?: {
    id: string
    name: string
    slug: string
  }[]
}

// Get all published case studies with optional filtering
export async function getCaseStudies(options: {
  featured?: boolean
  categorySlug?: string
  tagSlug?: string
  limit?: number
} = {}): Promise<CaseStudyData[]> {
  const { featured, categorySlug, tagSlug, limit } = options

  try {
    const projects = await prisma.project.findMany({
      where: {
        status: 'published',
        type: 'case_study',
        ...(featured !== undefined && { featured }),
        ...(categorySlug && {
          category: {
            slug: categorySlug
          }
        }),
        ...(tagSlug && {
          tags: {
            some: {
              tag: {
                slug: tagSlug
              }
            }
          }
        })
      },
      include: {
        category: true,
        tags: {
          include: {
            tag: true
          }
        }
      },
      orderBy: [
        { featured: 'desc' },
        { publishedAt: 'desc' },
        { createdAt: 'desc' }
      ],
      ...(limit && { take: limit })
    })

    return projects.map((project: any) => ({
      id: project.id,
      title: project.title,
      slug: project.slug,
      description: project.description,
      excerpt: project.excerpt || project.description.substring(0, 160) + '...',
      content: project.content || undefined,
      client: project.client || undefined,
      year: project.year?.toString() || undefined,
      role: project.role || undefined,
      duration: project.duration || undefined,
      platforms: project.platforms as string[] || undefined,
      featuredImage: project.featuredImage || undefined,
      images: project.images as string[] || undefined,
      liveUrl: project.liveUrl || undefined,
      githubUrl: project.githubUrl || undefined,
      prototypeUrl: project.prototypeUrl || undefined,
      featured: project.featured,
      status: project.status,
      publishedAt: project.publishedAt || undefined,
      updatedAt: project.updatedAt,
      category: project.category ? {
        id: project.category.id,
        name: project.category.name,
        slug: project.category.slug,
        color: project.category.color || undefined
      } : undefined,
      tags: project.tags.map(({ tag }: any) => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug
      }))
    }))
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

// Get a single case study by slug
export async function getCaseStudy(slug: string): Promise<CaseStudyData | null> {
  try {
    const project = await prisma.project.findFirst({
      where: {
        slug,
        status: 'published',
        type: 'case_study'
      },
      include: {
        category: true,
        tags: {
          include: {
            tag: true
          }
        }
      }
    })

    if (!project) {
      return null
    }

    return {
      id: project.id,
      title: project.title,
      slug: project.slug,
      description: project.description,
      excerpt: project.excerpt || project.description.substring(0, 160) + '...',
      content: project.content || undefined,
      client: project.client || undefined,
      year: project.year?.toString() || undefined,
      role: project.role || undefined,
      duration: project.duration || undefined,
      platforms: project.platforms as string[] || undefined,
      featuredImage: project.featuredImage || undefined,
      images: project.images as string[] || undefined,
      liveUrl: project.liveUrl || undefined,
      githubUrl: project.githubUrl || undefined,
      prototypeUrl: project.prototypeUrl || undefined,
      featured: project.featured,
      status: project.status,
      publishedAt: project.publishedAt || undefined,
      updatedAt: project.updatedAt,
      category: project.category ? {
        id: project.category.id,
        name: project.category.name,
        slug: project.category.slug,
        color: project.category.color || undefined
      } : undefined,
      tags: project.tags.map(({ tag }: any) => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug
      }))
    }
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

// Get navigation for a case study (previous/next projects)
export async function getCaseStudyNavigation(currentSlug: string): Promise<{
  previous?: { title: string; slug: string; category?: { name: string; color?: string } }
  next?: { title: string; slug: string; category?: { name: string; color?: string } }
}> {
  try {
    // Get all published case studies ordered by publication date
    const projects = await prisma.project.findMany({
      where: {
        status: 'published',
        type: 'case_study'
      },
      select: {
        slug: true,
        title: true,
        publishedAt: true,
        createdAt: true,
        category: {
          select: {
            name: true,
            color: true
          }
        }
      },
      orderBy: [
        { publishedAt: 'desc' },
        { createdAt: 'desc' }
      ]
    })

    const currentIndex = projects.findIndex((project: any) => project.slug === currentSlug)
    
    if (currentIndex === -1) {
      return {}
    }

    const previous = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined
    const next = currentIndex > 0 ? projects[currentIndex - 1] : undefined

    return {
      previous: previous ? {
        title: previous.title,
        slug: previous.slug,
        category: previous.category ? {
          name: previous.category.name,
          color: previous.category.color || undefined
        } : undefined
      } : undefined,
      next: next ? {
        title: next.title,
        slug: next.slug,
        category: next.category ? {
          name: next.category.name,
          color: next.category.color || undefined
        } : undefined
      } : undefined
    }
  } catch (error) {
    console.error('Error fetching case study navigation:', error)
    return {}
  }
}

// Get featured case studies for homepage
export async function getFeaturedCaseStudies(limit: number = 3): Promise<CaseStudyData[]> {
  return getCaseStudies({ featured: true, limit })
}

// Get all categories used by case studies
export async function getCaseStudyCategories() {
  try {
    const categories = await prisma.category.findMany({
      where: {
        projects: {
          some: {
            type: 'case_study',
            status: 'published'
          }
        }
      },
      select: {
        id: true,
        name: true,
        slug: true,
        color: true,
        _count: {
          select: {
            projects: {
              where: {
                type: 'case_study',
                status: 'published'
              }
            }
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    return categories.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      color: category.color || undefined,
      projectCount: category._count.projects
    }))
  } catch (error) {
    console.error('Error fetching case study categories:', error)
    return []
  }
}

// Get all tags used by case studies
export async function getCaseStudyTags() {
  try {
    const tags = await prisma.tag.findMany({
      where: {
        projects: {
          some: {
            project: {
              type: 'case_study',
              status: 'published'
            }
          }
        }
      },
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: {
            projects: {
              where: {
                project: {
                  type: 'case_study',
                  status: 'published'
                }
              }
            }
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    return tags.map((tag: any) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      projectCount: tag._count.projects
    }))
  } catch (error) {
    console.error('Error fetching case study tags:', error)
    return []
  }
} 