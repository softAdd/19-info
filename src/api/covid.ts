import { AxiosRequestConfig } from 'axios';

export const fetchOptionsByCountry = (country: string) => {
  const fetchOptions: AxiosRequestConfig = { url: `https://api.covid19api.com/country/${country}/status/confirmed/live`, method: 'get' }

  return fetchOptions;
}