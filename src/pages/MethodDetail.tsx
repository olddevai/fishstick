import React from 'react';
import { useParams } from 'react-router-dom';
import { API_METHODS } from '../data/methods';
import MethodForm from '../components/method/MethodForm';
import ResponseViewer from '../components/method/ResponseViewer';
import { TelegramApi } from '../lib/api';
import toast from 'react-hot-toast';

export default function MethodDetail() {
  const { methodName } = useParams<{ methodName: string }>();
  const method = API_METHODS.find(m => m.name === methodName);
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);

  if (!method) {
    return <div>Method not found</div>;
  }

  const handleExecute = async (params: Record<string, any>) => {
    const token = localStorage.getItem('telegram_bot_token');
    if (!token) {
      toast.error('Please set your bot token in settings first');
      return;
    }

    try {
      setError(null);
      const api = new TelegramApi(token);
      const result = await api.executeMethod(method.name, params);
      setResponse(result);
      toast.success('Method executed successfully');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      toast.error('Failed to execute method');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{method.name}</h1>
        <p className="mt-2 text-gray-600">{method.description}</p>
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {method.category}
          </span>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Parameters</h2>
        <MethodForm method={method} onSubmit={handleExecute} />
        <ResponseViewer response={response} error={error} />
      </div>
    </div>
  );
}