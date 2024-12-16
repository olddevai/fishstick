import React from 'react';
import { Save } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Settings() {
  const [botToken, setBotToken] = React.useState('');

  const handleSave = () => {
    if (!botToken) {
      toast.error('Please enter a bot token');
      return;
    }
    localStorage.setItem('telegram_bot_token', botToken);
    toast.success('Bot token saved successfully');
  };

  React.useEffect(() => {
    const savedToken = localStorage.getItem('telegram_bot_token');
    if (savedToken) {
      setBotToken(savedToken);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="botToken" className="block text-sm font-medium text-gray-700">
              Bot Token
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="botToken"
                value={botToken}
                onChange={(e) => setBotToken(e.target.value)}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your bot token"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              You can get a bot token by talking to @BotFather on Telegram
            </p>
          </div>

          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}