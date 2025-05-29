import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router basename="/alum-connect">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link 
                  to="/" 
                  className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  🌟 Co-op Constellations
                </Link>
                <div className="hidden md:flex space-x-4">
                  <Link 
                    to="/" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <div className="flex space-x-2">
                  <Link 
                    to="/" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
                  >
                    🏠
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
                  >
                    ℹ️
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>
                Made with ❤️ by the Cornell Co-op community • 
                <a 
                  href="https://github.com/kushal-satya/alum-connect" 
                  className="ml-1 hover:text-blue-600 dark:hover:text-blue-400"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
