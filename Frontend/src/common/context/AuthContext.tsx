import { createContext, useContext, useLayoutEffect, useState } from "react";
import { apiClient, setSignOutHandler } from "../../service/axios";
import { useAlert } from "./AlertContext";
import { login } from "../../service/login";

interface IAuthContextProps {
  signIn: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  user: string | undefined;
  signOut: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  handleAuthentication: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({} as IAuthContextProps);

interface IAuthProviderProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: IAuthProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string | undefined>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const TOKEN_STORAGE_KEY = import.meta.env.VITE_TOKEN_STORAGE_KEY;

  const { handleError } = useAlert();

  const setLocalStorage = (token: string) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  };

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await login(email, password);
      const { token } = response;

      if (token) {
        setLocalStorage(token);

        setData(token);
        setIsAuthenticated(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  function signOut() {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setData(undefined);
    setIsAuthenticated(false);
    window.location.href = "/";
  }

  const handleAuthentication = () => {
    const access_token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (access_token) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      setData(access_token);
      setIsAuthenticated(true);
    }
  };

  useLayoutEffect(() => {
    handleAuthentication();
    setSignOutHandler(signOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data,
        signOut,
        isAuthenticated,
        isLoading,
        handleAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextProps {
  return useContext(AuthContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
