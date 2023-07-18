import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

export type HeadersObject = {
  [key: string]: string;
};

type FetcherResult<Data> = {
  data?: Data;
  error?: Error;
};

async function fetcher<Data>(
  url: string,
  options: {
    headers: HeadersObject;
    body: object;
  }
): Promise<FetcherResult<Data>> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options.body),
  });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }

  return response.json();
}

export function usePost<Data = any, ErrorType = any>(
  url: string,
  headers: HeadersObject = {},
  config?: SWRConfiguration<FetcherResult<Data>, ErrorType>
) {
  const postRequest = async (body: object): Promise<FetcherResult<Data>> =>
    fetcher<Data>(url, { headers, body });

  const { data, error, isValidating }: SWRResponse<FetcherResult<Data>, ErrorType> = useSWR(
    [url, JSON.stringify(headers)],
    postRequest,
    config
  );

  return {
    data: data?.data,
    error,
    isLoading: !data && !error,
    isValidating,
  };
}
