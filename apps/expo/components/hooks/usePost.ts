import { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

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
    body: any;
  }
): Promise<FetcherResult<Data>> {
  try {
    const response: AxiosResponse<Data> = await axios.post(url, options.body, {
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    });

    return { data: response.data };
  } catch (error:any) {
    return { error };
  }
}

export function usePost<Data = any>(
  api: string
) {
  const [response, setResponse] = useState<FetcherResult<Data>>({
    data: undefined,
    error: undefined,
  });

  const postRequest = async (body: object) => {
    try {
      const headers: HeadersObject = {
        Authorization: 'Bearer your-access-token', // Replace with your actual token
      };

      const result = await fetcher<Data>(api, { headers, body });
      setResponse(result);
    } catch (err:any) {
      setResponse({ error: err });
    }
  };

  return { response, postRequest };
}
