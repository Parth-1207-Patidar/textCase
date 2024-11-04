'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-gray-800 dark:text-white text-lg font-semibold">
              textCase
            </a>
          </div>
          <div className="flex">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
          <div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}