import Link from 'next/link'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/tridip1931',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/tridip1931',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tridip1931',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/tridip1931',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10c5.51 0 10-4.48 10-10S15.51 0 10 0zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM10 1.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0110 1.475zm-2.508.93c.226.311 1.756 2.41 3.172 4.926-4.027 1.073-7.583 1.038-7.938 1.017A8.548 8.548 0 017.492 2.405zm-4.27 5.405c-.365 0-.67.018-.764.027C2.72 9.308 3.14 10.908 3.998 12.168c.736-1.395 2.019-2.688 3.895-3.441.065-.026.13-.052.195-.077-.12-.273-.246-.547-.37-.82-.114-.26-.227-.52-.338-.779-.93.114-3.006.155-4.388-.163-.19-.044-.38-.088-.57-.133zM10 18.525a8.51 8.51 0 01-5.662-2.148c.152-.216 1.443-1.941 4.48-3.08 1.399 2.57 2.95 4.675 3.189 5a8.687 8.687 0 01-2.007-.772zm2.508-.93c-.226-.311-1.756-2.41-3.172-4.926 4.027-1.073 7.583-1.038 7.938-1.017a8.548 8.548 0 01-4.766 5.943zm4.27-5.405c.365 0 .67-.018.764-.027a8.56 8.56 0 01-.262-1.462c-.736 1.395-2.019 2.688-3.895 3.441-.065.026-.13.052-.195.077.12.273.246.547.37.82.114.26.227.52.338.779.93-.114 3.006-.155 4.388.163.19.044.38.088.57.133z" clipRule="evenodd" />
      </svg>
    ),
  },
]

const footerNavigation = {
  main: [
    { name: 'Work', href: '/work' },
    { name: 'Writing', href: '/writing' },
    { name: 'Notes', href: '/notes' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  secondary: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'RSS', href: '/rss.xml' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-width section-padding">
        <div className="py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand and description */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span>Tridip</span>
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
                Product designer passionate about creating meaningful digital experiences through user-centered design and strategic thinking.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      aria-label={`Follow on ${item.name}`}
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal and extras */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.secondary.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter signup hint */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Stay Updated
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Follow my work and thoughts on design, technology, and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} Tridip. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>Made with ❤️ using Next.js</span>
                <span>•</span>
                <Link
                  href="https://github.com/tridip1931/portfolio-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  View Source
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 