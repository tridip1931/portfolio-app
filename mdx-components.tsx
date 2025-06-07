import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// Custom components for MDX content
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading with better styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-balance">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 text-balance">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
    ),
    
    // Custom paragraph with better typography
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">{children}</p>
    ),
    
    // Custom image component with Next.js optimization
    img: (props) => (
      <Image
        className="rounded-lg my-6"
        width={800}
        height={400}
        {...(props as ImageProps)}
        alt={props.alt || ''}
      />
    ),
    
    // Custom code blocks
    pre: ({ children }) => (
      <pre className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg overflow-x-auto my-6">
        {children}
      </pre>
    ),
    
    // Custom inline code
    code: ({ children }) => (
      <code className="bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    
    // Custom blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-6 my-6 italic text-neutral-600 dark:text-neutral-400">
        {children}
      </blockquote>
    ),
    
    // Custom list items
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    
    // Custom components for portfolio content
    CaseStudyHeader: ({ title, client, year, role }: {
      title: string;
      client: string;
      year: string;
      role: string;
    }) => (
      <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold text-neutral-600 dark:text-neutral-400">Client:</span>
            <div>{client}</div>
          </div>
          <div>
            <span className="font-semibold text-neutral-600 dark:text-neutral-400">Year:</span>
            <div>{year}</div>
          </div>
          <div>
            <span className="font-semibold text-neutral-600 dark:text-neutral-400">Role:</span>
            <div>{role}</div>
          </div>
        </div>
      </div>
    ),
    
    // Design process section
    ProcessSection: ({ title, children }: { title: string; children: React.ReactNode }) => (
      <section className="my-8">
        <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <div className="prose-portfolio">{children}</div>
      </section>
    ),
    
    // Image gallery component
    ImageGallery: ({ images }: { images: Array<{ src: string; alt: string; caption?: string }> }) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {images.map((image, index) => (
          <div key={index} className="space-y-2">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={400}
              className="rounded-lg"
            />
            {image.caption && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    ),
    
    ...components,
  }
} 