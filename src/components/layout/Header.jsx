import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiMessageSquare } from 'react-icons/fi';
import { useAuth } from '@/hooks/useAuth';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-600">LaunchList</span>
            </Link>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/startups" 
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-500"
              >
                Browse
              </Link>
              <Link 
                to="/list" 
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-500"
              >
                List Startup
              </Link>
              <Link 
                to="/launches" 
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-500"
              >
                Launches
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
              <FiSearch className="h-5 w-5" />
            </button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
                  <FiBell className="h-5 w-5" />
                </button>
                <Link to="/messages" className="p-2 rounded-full text-gray-500 hover:text-gray-600">
                  <FiMessageSquare className="h-5 w-5" />
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                    alt={user.name}
                  />
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-900 hover:text-primary-600">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}