import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Bot className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Telegram Bot API</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/methods" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                API Methods
              </Link>
              <Link to="/settings" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                Settings
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/methods"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                API Methods
              </Link>
              <Link
                to="/settings"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}