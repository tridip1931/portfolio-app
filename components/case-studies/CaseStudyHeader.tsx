import Image from 'next/image'
import Link from 'next/link'

interface CaseStudyHeaderProps {
  title: string
  description: string
  client?: string
  year?: string
  role?: string
  duration?: string
  platforms?: string[]
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
  liveUrl?: string
  githubUrl?: string
  prototypeUrl?: string
}

export default function CaseStudyHeader({
  title,
  description,
  client,
  year,
  role,
  duration,
  platforms,
  featuredImage,
  category,
  tags,
  liveUrl,
  githubUrl,
  prototypeUrl
}: CaseStudyHeaderProps) {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <Link 
          href="/work" 
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          Work
        </Link>
        <span>•</span>
        <span className="text-gray-900 dark:text-white">{title}</span>
      </nav>

      {/* Header Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Project Info */}
        <div className="space-y-6">
          {/* Category Badge */}
          {category && (
            <div>
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${category.color}20`,
                  color: category.color
                }}
              >
                {category.name}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            {client && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Client
                </h3>
                <p className="text-base text-gray-900 dark:text-white font-medium">
                  {client}
                </p>
              </div>
            )}

            {year && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Year
                </h3>
                <p className="text-base text-gray-900 dark:text-white font-medium">
                  {year}
                </p>
              </div>
            )}

            {role && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  My Role
                </h3>
                <p className="text-base text-gray-900 dark:text-white font-medium">
                  {role}
                </p>
              </div>
            )}

            {duration && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Duration
                </h3>
                <p className="text-base text-gray-900 dark:text-white font-medium">
                  {duration}
                </p>
              </div>
            )}

            {platforms && platforms.length > 0 && (
              <div className="col-span-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.slug}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          {(liveUrl || githubUrl || prototypeUrl) && (
            <div className="flex flex-wrap gap-4 pt-6">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Site
                </a>
              )}

              {prototypeUrl && (
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Prototype
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right Column - Featured Image */}
        <div className="relative">
          {featuredImage ? (
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl flex items-center justify-center">
              <span className="text-white font-bold text-6xl">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 