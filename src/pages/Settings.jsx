import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiLock, FiCreditCard, FiUser } from 'react-icons/fi';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: FiUser },
    { id: 'notifications', name: 'Notifications', icon: FiBell },
    { id: 'security', name: 'Security', icon: FiLock },
    { id: 'billing', name: 'Billing', icon: FiCreditCard },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                    ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  defaultValue="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  defaultValue="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  defaultValue="Tech entrepreneur and investor..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account Type
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option>VC</option>
                  <option>Buyer</option>
                  <option>Seller</option>
                  <option>Prospective Employee</option>
                </select>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {[
                  'Email notifications',
                  'Push notifications',
                  'SMS alerts',
                  'Product updates',
                  'Security alerts',
                  'Billing notifications'
                ].map((setting) => (
                  <div key={setting} className="flex items-center justify-between">
                    <span className="flex-1 text-sm font-medium text-gray-900">
                      {setting}
                    </span>
                    <button
                      type="button"
                      className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 bg-gray-200"
                      role="switch"
                    >
                      <span className="sr-only">Enable {setting}</span>
                      <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  Update Password
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'billing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Current Plan</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You are currently on the Pro plan at $75/month per company listed.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Payment Method</h3>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FiCreditCard className="h-6 w-6 text-gray-400" />
                      <span className="ml-3">•••• •••• •••• 4242</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700">
                      Edit
                    </button>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700">
                    + Add new payment method
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Billing History</h3>
                <div className="mt-2">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Mar 1, 2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          $75.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                          Paid
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          Feb 1, 2024
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          $75.00
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                          Paid
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}