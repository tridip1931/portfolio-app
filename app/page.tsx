export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding py-20 lg:py-32">
        <div className="container-width">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance">
              Hi, I'm Tridip 👋
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-balance leading-relaxed">
              Product designer passionate about creating meaningful digital experiences through 
              user-centered design and strategic thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section-padding py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured projects */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Project {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brief description of the project and key outcomes achieved.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                      UI Design
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
                      UX Research
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="section-padding py-16">
        <div className="container-width">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Recent Writing
            </h2>
            <a
              href="/writing"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              View all →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for recent articles */}
            {[1, 2].map((item) => (
              <article
                key={item}
                className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <a href="#">Article Title {item}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief excerpt from the article that gives readers a preview of the content and insights shared.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime="2024-01-15">January 15, 2024</time>
                  <span>5 min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
