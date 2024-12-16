import React from 'react';
import { Link } from 'react-router-dom';
import { TelegramMethod } from '../../types/telegram';

interface MethodCardProps {
  method: TelegramMethod;
}

export default function MethodCard({ method }: MethodCardProps) {
  return (
    <Link
      to={`/methods/${method.name}`}
      className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{method.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{method.category}</p>
        </div>
      </div>
      <p className="mt-2 text-gray-600">{method.description}</p>
      <div className="mt-4 flex items-center text-sm text-blue-600">
        View Details →
      </div>
    </Link>
  );
}