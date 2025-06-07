import Link from 'next/link'

interface NavigationProject {
  title: string
  slug: string
  category?: {
    name: string
    color?: string
  }
}

interface CaseStudyNavigationProps {
  previousProject?: NavigationProject
  nextProject?: NavigationProject
}

export default function CaseStudyNavigation({ 
  previousProject, 
  nextProject 
}: CaseStudyNavigationProps) {
  if (!previousProject && !nextProject) {
    return null
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 pt-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Previous Project */}
        <div className="flex justify-start">
          {previousProject ? (
            <Link
              href={`/work/${previousProject.slug}`}
              className="group flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 w-full"
            >
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Previous Project
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
                  {previousProject.title}
                </h3>
                {previousProject.category && (
                  <span 
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2"
                    style={{
                      backgroundColor: `${previousProject.category.color}20`,
                      color: previousProject.category.color
                    }}
                  >
                    {previousProject.category.name}
                  </span>
                )}
              </div>
            </Link>
          ) : (
            <div className="w-full" />
          )}
        </div>

        {/* Next Project */}
        <div className="flex justify-end">
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 w-full"
            >
              <div className="min-w-0 flex-1 text-right">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Next Project
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
                  {nextProject.title}
                </h3>
                {nextProject.category && (
                  <div className="flex justify-end mt-2">
                    <span 
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${nextProject.category.color}20`,
                        color: nextProject.category.color
                      }}
                    >
                      {nextProject.category.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-shrink-0">
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ) : (
            <div className="w-full" />
          )}
        </div>
      </div>

      {/* Back to Work link */}
      <div className="text-center mt-12">
        <Link
          href="/work"
          className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          View All Projects
        </Link>
      </div>
    </div>
  )
} 