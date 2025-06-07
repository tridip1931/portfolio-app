export default function WorkPage() {
  return (
    <div className="section-padding py-16">
      <div className="container-width">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Work & Case Studies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Here you'll find my featured design projects, case studies, and creative work. 
            Each project tells a story of problem-solving, user research, and thoughtful design decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder projects */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Case Study {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Detailed exploration of design process, challenges, and solutions for this project.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                      UI Design
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
                      UX Research
                    </span>
                  </div>
                  <a
                    href={`/work/case-study-${item}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    View Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 