import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';

export default function StartupList() {
  const [startups] = useState([
    {
      id: 1,
      name: "TechFlow",
      description: "AI-powered workflow automation platform",
      price: 750000,
      revenue: "125k/month",
      industry: "SaaS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300"
    },
    {
      id: 2,
      name: "EcoStore",
      description: "Sustainable e-commerce marketplace",
      price: 500000,
      revenue: "85k/month",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300"
    },
    {
      id: 3,
      name: "HealthHub",
      description: "Digital health monitoring platform",
      price: 1200000,
      revenue: "200k/month",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300"
    }
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Featured Startups</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search startups..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FiFilter className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup, index) => (
          <motion.div
            key={startup.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={startup.image}
              alt={startup.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{startup.name}</h3>
              <p className="mt-2 text-gray-600">{startup.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-primary-600 font-semibold">
                  ${startup.price.toLocaleString()}
                </span>
                <span className="text-gray-500 text-sm">
                  Revenue: {startup.revenue}
                </span>
              </div>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
                  {startup.industry}
                </span>
              </div>
              <Link
                to={`/startups/${startup.id}`}
                className="mt-4 block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}