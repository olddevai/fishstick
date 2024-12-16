export interface TelegramMethod {
  name: string;
  description: string;
  parameters: MethodParameter[];
  returns: string;
}

export interface MethodParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface ApiResponse {
  ok: boolean;
  result?: any;
  error_code?: number;
  description?: string;
}