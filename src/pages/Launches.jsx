import { motion } from 'framer-motion';
import { FiArrowUp, FiMessageSquare, FiShare2 } from 'react-icons/fi';

export default function Launches() {
  const launches = [
    {
      id: 1,
      name: "CloudSync 2.0",
      description: "Revolutionary cloud storage solution with AI-powered organization",
      upvotes: 234,
      comments: 45,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300"
    },
    {
      id: 2,
      name: "MarketPro Analytics",
      description: "Real-time market analysis tool for e-commerce businesses",
      upvotes: 189,
      comments: 32,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Latest Launches</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          Submit Launch
        </button>
      </div>

      <div className="space-y-6">
        {launches.map((launch, index) => (
          <motion.div
            key={launch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={launch.image}
                  alt={launch.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">{launch.name}</h2>
                  <p className="mt-1 text-gray-600">{launch.description}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600">
                      <FiArrowUp />
                      <span>{launch.upvotes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600">
                      <FiMessageSquare />
                      <span>{launch.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600">
                      <FiShare2 />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}