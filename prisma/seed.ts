import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seeding...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'case-studies' },
      update: {},
      create: {
        name: 'Case Studies',
        slug: 'case-studies',
        description: 'In-depth portfolio projects and design case studies',
        color: '#3B82F6'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'articles' },
      update: {},
      create: {
        name: 'Articles',
        slug: 'articles',
        description: 'Long-form writing about design, technology, and insights',
        color: '#10B981'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'notes' },
      update: {},
      create: {
        name: 'Design Notes',
        slug: 'notes',
        description: 'Quick thoughts, observations, and growing ideas',
        color: '#F59E0B'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'experiments' },
      update: {},
      create: {
        name: 'Experiments',
        slug: 'experiments',
        description: 'Creative explorations and side projects',
        color: '#8B5CF6'
      }
    })
  ])

  console.log('Created categories:', categories.length)

  // Create tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'ui-design' },
      update: {},
      create: { name: 'UI Design', slug: 'ui-design' }
    }),
    prisma.tag.upsert({
      where: { slug: 'ux-research' },
      update: {},
      create: { name: 'UX Research', slug: 'ux-research' }
    }),
    prisma.tag.upsert({
      where: { slug: 'design-systems' },
      update: {},
      create: { name: 'Design Systems', slug: 'design-systems' }
    }),
    prisma.tag.upsert({
      where: { slug: 'prototyping' },
      update: {},
      create: { name: 'Prototyping', slug: 'prototyping' }
    }),
    prisma.tag.upsert({
      where: { slug: 'frontend' },
      update: {},
      create: { name: 'Frontend', slug: 'frontend' }
    }),
    prisma.tag.upsert({
      where: { slug: 'accessibility' },
      update: {},
      create: { name: 'Accessibility', slug: 'accessibility' }
    }),
    prisma.tag.upsert({
      where: { slug: 'user-testing' },
      update: {},
      create: { name: 'User Testing', slug: 'user-testing' }
    }),
    prisma.tag.upsert({
      where: { slug: 'mobile' },
      update: {},
      create: { name: 'Mobile', slug: 'mobile' }
    }),
    prisma.tag.upsert({
      where: { slug: 'web' },
      update: {},
      create: { name: 'Web', slug: 'web' }
    }),
    prisma.tag.upsert({
      where: { slug: 'strategy' },
      update: {},
      create: { name: 'Strategy', slug: 'strategy' }
    })
  ])

  console.log('Created tags:', tags.length)

  // Create a sample project (Case Study)
  const sampleProject = await prisma.project.upsert({
    where: { slug: 'sample-case-study' },
    update: {},
    create: {
      title: 'Redesigning the User Experience',
      slug: 'sample-case-study',
      description: 'A comprehensive redesign of a complex web application focusing on user experience improvements.',
      excerpt: 'How we improved user satisfaction by 40% through strategic UX research and iterative design.',
      client: 'TechCorp Inc.',
      year: '2024',
      role: 'Lead Product Designer',
      duration: '6 months',
      team: ['Product Designer', 'UX Researcher', 'Frontend Developer', 'Product Manager'],
      challenge: 'Users were struggling with the complex navigation structure and information overload.',
      solution: 'Implemented a card-based design system with progressive disclosure and improved information architecture.',
      results: '40% increase in user satisfaction, 60% reduction in support tickets, 25% increase in task completion rate.',
      status: 'COMPLETED',
      featured: true,
      published: true,
      publishedAt: new Date(),
      metaTitle: 'TechCorp UX Redesign Case Study',
      metaDescription: 'Learn how strategic UX research and design improvements led to a 40% increase in user satisfaction.',
      category: {
        connect: { slug: 'case-studies' }
      },
      tags: {
        connect: [
          { slug: 'ui-design' },
          { slug: 'ux-research' },
          { slug: 'user-testing' }
        ]
      }
    }
  })

  // Create a sample article
  const sampleArticle = await prisma.article.upsert({
    where: { slug: 'building-design-systems-at-scale' },
    update: {},
    create: {
      title: 'Building Design Systems at Scale',
      slug: 'building-design-systems-at-scale',
      description: 'Lessons learned from implementing design systems across multiple product teams.',
      excerpt: 'Key insights and practical strategies for creating maintainable design systems that actually get adopted.',
      readingTime: '8 min read',
      featured: true,
      published: true,
      publishedAt: new Date(),
      metaTitle: 'Building Design Systems at Scale - Design Strategy',
      metaDescription: 'Learn practical strategies for implementing design systems that scale across multiple product teams.',
      category: {
        connect: { slug: 'articles' }
      },
      tags: {
        connect: [
          { slug: 'design-systems' },
          { slug: 'strategy' },
          { slug: 'frontend' }
        ]
      }
    }
  })

  // Create a sample note
  const sampleNote = await prisma.note.upsert({
    where: { slug: 'design-tools-evolution' },
    update: {},
    create: {
      title: 'The Evolution of Design Tools',
      slug: 'design-tools-evolution',
      excerpt: 'Quick thoughts on how design tools have evolved and what it means for our workflows.',
      status: 'GROWING',
      featured: false,
      published: true,
      category: {
        connect: { slug: 'notes' }
      },
      tags: {
        connect: [
          { slug: 'ui-design' },
          { slug: 'prototyping' }
        ]
      }
    }
  })

  console.log('Created sample content:')
  console.log('- Project:', sampleProject.title)
  console.log('- Article:', sampleArticle.title)
  console.log('- Note:', sampleNote.title)

  console.log('Database seeding completed!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Seeding failed:', e)
    await prisma.$disconnect()
    process.exit(1)
  }) 