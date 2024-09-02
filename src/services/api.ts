import { QueryParams } from './types';

class Api {
  private readonly baseUrl: string = process.env.BASE_URL ?? 'https://api.openweathermap.org';

  private readonly apiKey: string = process.env.API_KEY ?? '96c3ca9e67a7585cfc7e16b4fb120469';

  private async request<T>(url: string, options: RequestInit, queryParams?: QueryParams): Promise<T> {
    const queryParamsWithApiKey = {
      ...queryParams,
      appid: this.apiKey,
      units: 'metric',
    };

    const queryString: string = new URLSearchParams(queryParamsWithApiKey).toString();

    const fullUrl: string = `${url}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    return data;
  }

  public async get<T>(path: string, queryParams?: QueryParams): Promise<T> {
    return this.request<T>(`${this.baseUrl}/${path}`, { method: 'GET' }, queryParams);
  }
}

export default new Api();
