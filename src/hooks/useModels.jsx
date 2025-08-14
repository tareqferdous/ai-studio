import { useEffect, useState } from "react";

const useModels = () => {
  const [modelTypes, setModelTypes] = useState([]);
  const [error, setError] = useState(null);

  const getImageModels = async () => {
    try {
      const response = await fetch(`https://image.pollinations.ai/models`);
      if (!response.ok) {
        const errorMessage = `Fetching models data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setModelTypes(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getImageModels();
  }, []);

  return {
    modelTypes,
    error,
  };
};

export default useModels;
