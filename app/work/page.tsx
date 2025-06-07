import { Layout } from '@/components/layout'
import { CaseStudyGrid } from '@/components/case-studies'
import { getCaseStudies } from '@/lib/case-studies'

export const metadata = {
  title: 'Work - Tridip Thrizu',
  description: 'A collection of design projects and case studies showcasing user experience design, product design, and digital strategy.',
}

export default async function WorkPage() {
  // Fetch case studies from database
  const caseStudies = await getCaseStudies()

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-width">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A collection of projects where I've had the opportunity to solve complex problems, 
              craft meaningful experiences, and push the boundaries of design thinking. Each project 
              represents a unique challenge and journey toward better digital experiences.
            </p>
          </div>

          {/* Case Studies Grid */}
          <CaseStudyGrid 
            caseStudies={caseStudies} 
            showFilters={true}
          />

          {/* Empty State for No Projects */}
          {caseStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 dark:text-gray-600 mb-6">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Projects Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                I'm currently working on documenting and showcasing my latest projects. 
                Check back soon to see detailed case studies and design work.
              </p>
            </div>
          )}

          {/* Call to Action */}
          {caseStudies.length > 0 && (
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Interested in working together?
                </h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  I'm always excited to take on new challenges and collaborate on meaningful projects. 
                  Let's discuss how we can create something amazing together.
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
} 