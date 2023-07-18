import { useState } from 'react';

export interface PutRequestData {
  // Modify this based on the request payload you need to send in the PUT request.
  // For example, if your PUT request requires data like `{ title: string, content: string }`,
  // you can define a type for it here.
}

interface PutResponse {
  // Modify this based on your server response.
  // For example, if your server returns data after the PUT request,
  // you can define a type for it here.
  success: boolean;
  // Add any other properties your server response has.
}

const fetcher = (url: string, data: PutRequestData) =>
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers if needed, e.g., authorization token.
    },
    body: JSON.stringify(data),
  }).then((res) => res.json() as Promise<PutResponse>);

interface PutHookResponse {
  data: PutResponse | null | undefined;
  error: Error | undefined;
  isUpdating: boolean;
  updateResource: (data: PutRequestData) => Promise<void>;
}

export const usePut = (url: string): PutHookResponse => {
  const [data, setData] = useState<PutResponse | null>();
  const [error, setError] = useState<Error>();
  const [isUpdating, setIsUpdating] = useState(false);

  const updateResource = async (requestData: PutRequestData) => {
    try {
      setIsUpdating(true);

      // Perform the PUT request and wait for the response.
      const response = await fetcher(url, requestData);

      // Assuming the server responds with a success message or status code.
      // You can customize this part based on your server response.
      if (response.success) {
        // On successful PUT, set the response data to update the cache.
        setData(response);
      }
    } catch (error:any) {
      // If an error occurred during the PUT request, handle it here.
      setError(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return {
    data,
    error,
    isUpdating,
    updateResource,
  };
};
