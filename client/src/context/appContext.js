import { createContext, useReducer } from 'react';

import { STORAGE_KEY } from '../const';
import { saveToStorage } from '../utils/localStorage';
import { useDefaultContext } from './defaultContext';

const AppContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case 'setLocale':
      saveToStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
    default:
      return console.error('error in file appContext.js');
  }
};

const AppContextProvider = ({ children }) => {
  const defaultContext = useDefaultContext();
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
