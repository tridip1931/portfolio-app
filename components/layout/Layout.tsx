import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      
      {/* Main content area with proper spacing for fixed header */}
      <main 
        id="main-content" 
        className={`flex-1 pt-16 ${className}`}
      >
        {children}
      </main>
      
      <Footer />
    </div>
  )
} 