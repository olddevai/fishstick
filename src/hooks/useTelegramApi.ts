import { useState } from 'react';
import { TelegramApi } from '../lib/api';
import { useLocalStorage } from './useLocalStorage';
import toast from 'react-hot-toast';

export function useTelegramApi() {
  const [token] = useLocalStorage<string>('telegram_bot_token', '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeMethod = async (method: string, params: Record<string, any>) => {
    if (!token) {
      toast.error('Please set your bot token in settings first');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const api = new TelegramApi(token);
      const result = await api.executeMethod(method, params);
      toast.success('Method executed successfully');
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast.error(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { executeMethod, loading, error };
}