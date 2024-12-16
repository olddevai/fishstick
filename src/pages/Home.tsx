import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Code, Settings } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Telegram Bot API Explorer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern interface to interact with the Telegram Bot API. Explore, test, and implement bot functionality with ease.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
            <Bot className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-center text-gray-900">Getting Started</h2>
          <p className="mt-2 text-gray-600 text-center">
            Configure your bot token and start exploring the available API methods.
          </p>
          <Link
            to="/settings"
            className="mt-4 block text-center text-blue-600 hover:text-blue-800"
          >
            Configure Bot →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
            <Code className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-center text-gray-900">API Methods</h2>
          <p className="mt-2 text-gray-600 text-center">
            Browse and test all available Telegram Bot API methods interactively.
          </p>
          <Link
            to="/methods"
            className="mt-4 block text-center text-blue-600 hover:text-blue-800"
          >
            Explore Methods →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
            <Settings className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-center text-gray-900">Documentation</h2>
          <p className="mt-2 text-gray-600 text-center">
            Learn more about the Telegram Bot API and how to use this interface.
          </p>
          <a
            href="https://core.telegram.org/bots/api"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-blue-600 hover:text-blue-800"
          >
            View Docs →
          </a>
        </div>
      </div>
    </div>
  );
}