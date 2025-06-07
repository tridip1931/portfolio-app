export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container-width section-padding py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Tridip's Portfolio
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-balance">
            Product Designer crafting beautiful, functional experiences. 
            Exploring design systems, user research, and thoughtful interfaces.
          </p>
        </div>

        {/* Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              In-depth explorations of design processes and problem-solving approaches.
            </p>
          </div>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Design Writing</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Essays and articles about design thinking, methodology, and industry insights.
            </p>
          </div>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Design Notes</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Work-in-progress thoughts, quick insights, and learning discoveries.
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Tailwind CSS is working! ✨
          </div>
        </div>
      </main>
    </div>
  );
}
