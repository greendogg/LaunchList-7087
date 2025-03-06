import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-primary-600">LaunchList</span>
            <p className="text-gray-500 text-base">
              The marketplace for successful startups.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Platform
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/startups" className="text-base text-gray-500 hover:text-gray-900">
                      Browse Startups
                    </Link>
                  </li>
                  <li>
                    <Link to="/list" className="text-base text-gray-500 hover:text-gray-900">
                      List Your Startup
                    </Link>
                  </li>
                  <li>
                    <Link to="/launches" className="text-base text-gray-500 hover:text-gray-900">
                      Product Launches
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} LaunchList. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}