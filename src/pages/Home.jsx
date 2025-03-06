import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">The Marketplace for</span>
            <span className="block text-primary-600">Successful Startups</span>
          </motion.h1>
          <motion.p 
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Buy, sell, and grow startups. Connect with VCs, talent, and buyers all in one place.
          </motion.p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                to="/startups"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Browse Startups
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-3 sm:mt-0 sm:ml-3"
            >
              <Link
                to="/list"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
              >
                List Your Startup
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Why Choose LaunchList?
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: 'Verified Buyers',
                description: 'Connect with serious buyers and VCs looking to invest in quality startups.'
              },
              {
                title: 'Secure Transactions',
                description: 'Safe and secure payment processing with escrow protection.'
              },
              {
                title: 'AI-Powered Insights',
                description: 'Get intelligent suggestions for business growth and valuation.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}