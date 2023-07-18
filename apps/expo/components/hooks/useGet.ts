import useSWR, { SWRConfiguration } from 'swr';

export type HeadersObject = {
  [key: string]: string;
};

export function useGet<Data = any>(
  url: string,
  headers: HeadersObject = {},
  config?: SWRConfiguration<Data, any> // Change `any` to your desired error type if needed
) {
  const fetcher = async (url: string) => {
    const customHeaders = {
      ...headers,
    };

    const response = await fetch(url, {
      headers: customHeaders,
    });

    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }

    return response.json();
  };

  const { data, error, isValidating } = useSWR<Data>(
    url,
    fetcher,
    config
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isValidating,
  };
}

