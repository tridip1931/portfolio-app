'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CaseStudy {
  id: string
  title: string
  slug: string
  description: string
  excerpt: string
  client?: string
  year?: string
  role?: string
  featuredImage?: string
  category?: {
    name: string
    slug: string
    color?: string
  }
  tags?: {
    name: string
    slug: string
  }[]
  status: string
  featured: boolean
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
  showFilters?: boolean
}

export default function CaseStudyGrid({ caseStudies, showFilters = true }: CaseStudyGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = caseStudies
      .filter(cs => cs.category)
      .map(cs => cs.category!)
      .filter((cat, index, self) => self.findIndex(c => c.slug === cat.slug) === index)
    return [{ name: 'All Projects', slug: 'all', color: '#6B7280' }, ...cats]
  }, [caseStudies])

  const tags = useMemo(() => {
    const allTags = caseStudies
      .flatMap(cs => cs.tags || [])
      .filter((tag, index, self) => self.findIndex(t => t.slug === tag.slug) === index)
    return [{ name: 'All Tags', slug: 'all' }, ...allTags]
  }, [caseStudies])

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(cs => {
      const categoryMatch = selectedCategory === 'all' || cs.category?.slug === selectedCategory
      const tagMatch = selectedTag === 'all' || cs.tags?.some(tag => tag.slug === selectedTag)
      return categoryMatch && tagMatch && cs.status === 'published'
    })
  }, [caseStudies, selectedCategory, selectedTag])

  return (
    <div className="space-y-8">
      {/* Filters */}
      {showFilters && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.slug
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.slug ? category.color : undefined
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Filter by Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.slug}
                  onClick={() => setSelectedTag(tag.slug)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    selectedTag === tag.slug
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'project' : 'projects'}
        </p>
        
        {/* Reset filters button */}
        {(selectedCategory !== 'all' || selectedTag !== 'all') && (
          <button
            onClick={() => {
              setSelectedCategory('all')
              setSelectedTag('all')
            }}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCaseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>

      {/* Empty state */}
      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  )
}

// Case Study Card Component
function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        {caseStudy.featuredImage ? (
          <Image
            src={caseStudy.featuredImage}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {caseStudy.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Featured badge */}
        {caseStudy.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-yellow-500 text-yellow-900 text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {caseStudy.category && (
            <span 
              className="text-xs font-medium px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${caseStudy.category.color}20`,
                color: caseStudy.category.color
              }}
            >
              {caseStudy.category.name}
            </span>
          )}
          {caseStudy.year && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {caseStudy.year}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {caseStudy.title}
        </h3>

        {caseStudy.client && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Client: {caseStudy.client}
          </p>
        )}

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {caseStudy.excerpt || caseStudy.description}
        </p>

        {/* Tags */}
        {caseStudy.tags && caseStudy.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.slug}
                className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
              >
                {tag.name}
              </span>
            ))}
            {caseStudy.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-500">
                +{caseStudy.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {caseStudy.role && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Role: {caseStudy.role}
          </p>
        )}
      </div>
    </Link>
  )
} 