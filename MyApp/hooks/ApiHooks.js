import {useEffect, useState} from 'react';
import {Constants} from '../utilities';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(
        Constants.BASE_URL + Constants.MEDIA_ENDPOINT
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const json = await response.json();

      const media = await Promise.all(
        json.map(async (mediaItem) => {
          const mediaItemResponse = await fetch(
            Constants.BASE_URL + Constants.MEDIA_ENDPOINT + mediaItem.file_id
          );
          return await mediaItemResponse.json();
        })
      );
      setMediaArray(media);
    } catch (error) {
      console.error('fetching media error', error);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);
  return {mediaArray};
};

export const ApiHooks = {useMedia};
