import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      name: "John Smith",
      lastMessage: "Hi, I'm interested in your startup",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      lastMessage: "When can we schedule a call?",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="h-[calc(100vh-200px)] bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="grid grid-cols-3 h-full">
        <div className="border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          </div>
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            {chats.map((chat) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedChat === chat.id ? 'bg-gray-50' : ''
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{chat.name}</div>
                    <div className="text-sm text-gray-500">{chat.lastMessage}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {chats.find((c) => c.id === selectedChat)?.name}
                </h3>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                {/* Messages will go here */}
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 rounded-lg border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                    <FiSend />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}