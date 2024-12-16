import axios from 'axios';

const BASE_URL = 'https://api.telegram.org/bot';

export class TelegramApi {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async executeMethod(method: string, params: Record<string, any>) {
    try {
      const response = await axios.post(`${BASE_URL}${this.token}/${method}`, params);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.description || error.message);
      }
      throw error;
    }
  }
}