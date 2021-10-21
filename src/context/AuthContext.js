import React, {createContext, useCallback, useEffect, useState} from 'react';
import SInfo from 'react-native-sensitive-info';
import Config from 'react-native-config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkTokenExist = useCallback(async () => {
    try {
      const token = await SInfo.getItem('@Token', {
        sharedPreferencesName: Config.SHARED_PREFERENCES_NAME,
        keychainService: Config.KEYCHAIN_SERVICE,
      });
      if (token) {
        setIsAuthenticated(true);
      }
    } catch (error) {}
  }, []);

  const setToken = useCallback(async accessToken => {
    try {
      await SInfo.setItem('@Token', accessToken, {
        sharedPreferencesName: Config.SHARED_PREFERENCES_NAME,
        keychainService: Config.KEYCHAIN_SERVICE,
      });
      setIsAuthenticated(true);
    } catch (error) {}
  }, []);

  const clearToken = useCallback(async () => {
    try {
      await SInfo.deleteItem('@Token', {
        sharedPreferencesName: Config.SHARED_PREFERENCES_NAME,
        keychainService: Config.KEYCHAIN_SERVICE,
      });
      setIsAuthenticated(false);
    } catch (error) {}
  }, []);

  useEffect(() => {
    checkTokenExist();
    return () => {};
  }, [checkTokenExist]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        checkTokenExist,
        setToken,
        clearToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
