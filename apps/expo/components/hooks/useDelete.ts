import { useState } from 'react';

interface DeleteResponse {
  success: boolean; // Modify this based on your server response.
  // Add any other properties your server response has.
}

const fetcher = (url: string) =>
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers if needed, e.g., authorization token.
    },
  }).then((res) => res.json() as Promise<DeleteResponse>);

interface DeleteHookData {
  // Modify this based on the response data structure from your server.
  // For example, if the server returns the deleted resource, you can define a type for it here.
  // If the server returns no content (204), you can set it to `null`.
}

interface DeleteHookResponse {
  data: DeleteHookData | null | undefined;
  error: Error | undefined;
  isDeleting: boolean;
  deleteResource: () => Promise<void>;
}

export const useDelete = (url: string): DeleteHookResponse => {
  const [data, setData] = useState<DeleteHookData | null>();
  const [error, setError] = useState<Error>();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteResource = async () => {
    try {
      setIsDeleting(true);

      // Perform the delete request and wait for the response.
      const response = await fetcher(url);

      // Assuming the server responds with a success message or status code.
      // If the server returns no content (204), you can handle it accordingly.
      // You can customize this part based on your server response.
      if (response.success) {
        // On successful delete, set data to null to indicate that the resource is deleted.
        setData(null);
      }
    } catch (error:any) {
      // If an error occurred during the delete request, handle it here.
      setError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    data,
    error,
    isDeleting,
    deleteResource,
  };
};