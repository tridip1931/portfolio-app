import { notFound } from 'next/navigation'
import { Layout } from '@/components/layout'
import { CaseStudyHeader, CaseStudyNavigation } from '@/components/case-studies'
import { getCaseStudy, getCaseStudyNavigation } from '@/lib/case-studies'
import { MDXRemote } from 'next-mdx-remote/rsc'
// We'll define the components inline since they're part of the MDX components function

interface PageProps {
  params: {
    slug: string
  }
}

// Custom MDX components for case studies
const mdxComponents = {
  ProcessSection: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="my-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="prose-portfolio">{children}</div>
    </section>
  ),
  ImageGallery: ({ images }: { images: Array<{ src: string; alt: string; caption?: string }> }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {images.map((image, index) => (
        <div key={index} className="space-y-2">
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg w-full h-auto"
            loading="lazy"
          />
          {image.caption && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  ),
  h1: ({ children, ...props }: any) => (
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-6 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mt-10 mb-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-white mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 bg-blue-50 dark:bg-blue-900/20 italic text-blue-900 dark:text-blue-200" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6" {...props}>
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      className="rounded-lg shadow-lg w-full h-auto my-8"
      loading="lazy"
      {...props}
    />
  ),
}

export async function generateMetadata({ params }: PageProps) {
  const caseStudy = await getCaseStudy(params.slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} - Tridip Thrizu`,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      images: caseStudy.featuredImage ? [caseStudy.featuredImage] : [],
    },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const [caseStudy, navigation] = await Promise.all([
    getCaseStudy(params.slug),
    getCaseStudyNavigation(params.slug)
  ])

  if (!caseStudy) {
    notFound()
  }

  return (
    <Layout>
      <div className="section-padding">
        <div className="container-width">
          {/* Case Study Header */}
          <CaseStudyHeader
            title={caseStudy.title}
            description={caseStudy.description}
            client={caseStudy.client}
            year={caseStudy.year}
            role={caseStudy.role}
            duration={caseStudy.duration}
            platforms={caseStudy.platforms}
            featuredImage={caseStudy.featuredImage}
            category={caseStudy.category}
            tags={caseStudy.tags}
            liveUrl={caseStudy.liveUrl}
            githubUrl={caseStudy.githubUrl}
            prototypeUrl={caseStudy.prototypeUrl}
          />

          {/* Case Study Content */}
          {caseStudy.content && (
            <div className="mt-16">
              <div className="prose-portfolio">
                <MDXRemote
                  source={caseStudy.content}
                  components={mdxComponents}
                />
              </div>
            </div>
          )}

          {/* Placeholder content if no MDX content is available */}
          {!caseStudy.content && (
            <div className="mt-16 prose-portfolio">
              <h2>Project Overview</h2>
              <p>
                This case study is currently being documented. The project involved {caseStudy.description.toLowerCase()}.
              </p>
              
              {caseStudy.client && (
                <>
                  <h3>The Challenge</h3>
                  <p>
                    Working with {caseStudy.client}, we faced unique challenges that required innovative design solutions 
                    and careful consideration of user needs.
                  </p>
                </>
              )}

              <h3>My Role</h3>
              <p>
                {caseStudy.role ? `As ${caseStudy.role.toLowerCase()}, I was responsible for` : 'I was responsible for'} 
                {' '}leading the design process, conducting user research, and creating comprehensive design solutions.
              </p>

              {caseStudy.tags && caseStudy.tags.length > 0 && (
                <>
                  <h3>Skills & Technologies</h3>
                  <p>
                    This project utilized: {caseStudy.tags.map(tag => tag.name).join(', ')}.
                  </p>
                </>
              )}

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-8">
                <h4 className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                  📝 Documentation in Progress
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-0">
                  This case study is currently being written. Check back soon for the complete story 
                  including design process, challenges, solutions, and results.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <CaseStudyNavigation
            previousProject={navigation.previous}
            nextProject={navigation.next}
          />
        </div>
      </div>
    </Layout>
  )
} 