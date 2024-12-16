import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_METHODS = [
  {
    name: 'getMe',
    description: 'Get basic information about the bot',
    category: 'Getting updates',
  },
  {
    name: 'sendMessage',
    description: 'Send text messages',
    category: 'Available methods',
  },
  // Add more methods as needed
];

export default function Methods() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredMethods = API_METHODS.filter((method) => {
    const matchesSearch = method.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(API_METHODS.map(method => method.category))];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">API Methods</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search methods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredMethods.map((method) => (
          <Link
            key={method.name}
            to={`/methods/${method.name}`}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
            <p className="text-gray-600">{method.description}</p>
            <span className="inline-block mt-4 text-sm text-blue-600">
              View Details →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}