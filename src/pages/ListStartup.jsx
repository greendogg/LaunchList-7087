import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload } from 'react-icons/fi';

export default function ListStartup() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm p-8"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-6">List Your Startup</h1>
        
        <div className="mb-8">
          <div className="flex items-center">
            {[1, 2, 3].map((number) => (
              <div key={number} className="flex-1">
                <div
                  className={`h-2 ${
                    number <= step ? 'bg-primary-600' : 'bg-gray-200'
                  } ${number === 1 ? 'rounded-l-full' : ''} ${
                    number === 3 ? 'rounded-r-full' : ''
                  }`}
                />
                <div className="mt-2 text-center text-sm text-gray-600">
                  {number === 1 && 'Basic Info'}
                  {number === 2 && 'Financials'}
                  {number === 3 && 'Review'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Startup Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option>SaaS</option>
                <option>E-commerce</option>
                <option>Healthcare</option>
                <option>Fintech</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Logo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
          )}
          <button
            onClick={() => step < 3 && setStep(step + 1)}
            className="ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            {step === 3 ? 'Submit Listing' : 'Next'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}