import { motion } from 'framer-motion';
import { FiEdit2 } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="relative h-32 bg-primary-600">
          <img
            className="absolute bottom-0 left-8 -mb-8 w-24 h-24 rounded-full border-4 border-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </div>
        <div className="pt-12 pb-6 px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
              <p className="text-gray-600">Startup Investor & Tech Entrepreneur</p>
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FiEdit2 className="mr-2" />
              Edit Profile
            </button>
          </div>
          <div className="mt-6 flex space-x-6">
            <div>
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900">San Francisco, CA</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Website</dt>
              <dd className="mt-1 text-sm text-primary-600">
                <a href="#">www.example.com</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Member Since</dt>
              <dd className="mt-1 text-sm text-gray-900">March 2024</dd>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
        <p className="text-gray-600">
          Experienced tech entrepreneur and angel investor with a focus on B2B SaaS companies.
          Previously founded and sold two successful startups in the marketing technology space.
          Looking for innovative startups with strong growth potential.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Badges</h2>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            VC
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Verified Buyer
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            Top Investor
          </span>
        </div>
      </div>
    </div>
  );
}