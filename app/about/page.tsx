export default function AboutPage() {
  return (
    <div className="section-padding py-16">
      <div className="container-width">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm a product designer passionate about creating meaningful digital experiences 
              through user-centered design and strategic thinking.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Approach
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I believe great design starts with understanding people. My process combines user research, 
                  strategic thinking, and creative problem-solving to create solutions that are both beautiful 
                  and functional.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Background
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With a background in both design and technology, I bring a unique perspective to product design. 
                  I've worked with startups and established companies, helping them create user experiences that 
                  drive business goals while serving user needs.
                </p>
              </div>
              
              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Skills & Expertise
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• User Experience Design</li>
                    <li>• User Interface Design</li>
                    <li>• Design Systems</li>
                    <li>• User Research</li>
                    <li>• Prototyping</li>
                    <li>• Usability Testing</li>
                    <li>• Strategic Design</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always interested in new opportunities and collaborations. Whether you're looking 
                for design consultation, product strategy, or a full-time designer, I'd love to hear about your project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 