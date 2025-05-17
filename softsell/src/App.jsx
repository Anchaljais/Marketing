import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'
function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />

        
        <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 py-4 text-center">
          <p>© 2023 <span className="font-medium text-gray-900 dark:text-white">SoftSell</span>. All rights reserved.</p>
        </footer>


      </div>
    </div>
  )
}

export default App