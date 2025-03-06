import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDollarSign, FiUsers, FiTrendingUp, FiMessageCircle } from 'react-icons/fi';

export default function StartupDetail() {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const startup = {
    name: "TechFlow",
    description: "AI-powered workflow automation platform that helps businesses streamline their operations and increase productivity.",
    price: 750000,
    revenue: "125k/month",
    industry: "SaaS",
    metrics: {
      mrr: "125,000",
      customers: "450",
      growth: "25%",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="relative h-64 rounded-xl overflow-hidden">
        <img
          src={startup.image}
          alt={startup.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">{startup.name}</h1>
            <p className="mt-4 text-gray-600">{startup.description}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-primary-50 rounded-lg">
                <FiDollarSign className="text-primary-600 mb-2" />
                <div className="text-sm text-gray-600">Monthly Revenue</div>
                <div className="text-lg font-semibold">${startup.metrics.mrr}</div>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg">
                <FiUsers className="text-primary-600 mb-2" />
                <div className="text-sm text-gray-600">Total Customers</div>
                <div className="text-lg font-semibold">{startup.metrics.customers}</div>
              </div>
              <div className="p-4 bg-primary-50 rounded-lg">
                <FiTrendingUp className="text-primary-600 mb-2" />
                <div className="text-sm text-gray-600">YoY Growth</div>
                <div className="text-lg font-semibold">{startup.metrics.growth}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">
                ${startup.price.toLocaleString()}
              </div>
              <div className="mt-2 text-gray-600">Asking Price</div>
            </div>
            <button className="mt-6 w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Make Offer
            </button>
            <button className="mt-3 w-full px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
              <FiMessageCircle className="inline mr-2" />
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}