export type ApiRequestOptions = RequestInit & {
  token?: string;
};

export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const baseUrl = import.meta.env.VITE_API_URL as string | undefined;

  if (!baseUrl) {
    throw new Error('VITE_API_URL is not configured. Set it before connecting the CMS to a backend.');
  }

  const headers = new Headers(options.headers);
  headers.set('Accept', 'application/json');

  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (options.token) {
    headers.set('Authorization', `Bearer ${options.token}`);
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  if (response.status === 204) return undefined as T;

  return response.json() as Promise<T>;
}
