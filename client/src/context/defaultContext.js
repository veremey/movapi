import { LOCALES, STORAGE_KEY } from '../const';

import { getFromStorage } from '../utils/localStorage';
import { useSearchParams } from 'react-router-dom';

export const useDefaultContext = () => {
  const [searchParams] = useSearchParams();

  return {
    locale:
      getFromStorage(STORAGE_KEY) ||
      searchParams.get('locale') ||
      LOCALES.ENGLISH,
  };
};
