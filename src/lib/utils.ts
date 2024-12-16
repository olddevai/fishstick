export function formatMethodName(name: string): string {
  return name.replace(/([A-Z])/g, ' $1').trim();
}

export function validateBotToken(token: string): boolean {
  return /^\d+:[A-Za-z0-9_-]{35}$/.test(token);
}

export function parseApiResponse(response: any) {
  if (!response.ok) {
    throw new Error(response.description || 'Unknown error occurred');
  }
  return response.result;
}