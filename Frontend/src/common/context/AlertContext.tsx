import {
  clearCurrentTimeOut,
  nullifyTimeOut,
  setCurrentTimeout,
} from "../../utils/helpers/handleTimeout";

import { createContext, useContext, useState } from "react";
import { IContextProviderProps } from "../../utils/types/context";

interface IAlertContextProps {
  showAlertModal: boolean;
  message: string;
  type: string;
  handleAlert: (message: string, type: "error" | "success") => void;
  handleError: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any,
    showCrossPages?: boolean,
    useCustomMessage?: boolean
  ) => void;
  handleSuccess: (successMessage: string, showCrossPages?: boolean) => void;
  setShowAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  showCrossPages: boolean;
}

const AlertContext = createContext({} as IAlertContextProps);

const AlertProvider = ({ children }: IContextProviderProps): JSX.Element => {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showCrossPages, setShowCrossPages] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleAlert = (
    message: string,
    type: "error" | "success",
    showCrossPages = false
  ): void => {
    setShowAlertModal(true);
    setMessage(message);

    clearCurrentTimeOut();

    const timeoutId = setTimeout(() => {
      setShowAlertModal(false);
      nullifyTimeOut();
    }, 5000);

    setCurrentTimeout(timeoutId);
    setType(type);
    setShowCrossPages(showCrossPages);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleError = (error: any, showCrossPages = false) => {
    handleAlert(error.response.data.error, "error", showCrossPages);
  };

  const handleSuccess = (successMessage: string, showCrossPages = false) => {
    handleAlert(successMessage, "success", showCrossPages);
  };

  return (
    <AlertContext.Provider
      value={{
        showAlertModal,
        message,
        type,
        handleAlert,
        handleError,
        handleSuccess,
        setShowAlertModal,
        showCrossPages,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

function useAlert(): IAlertContextProps {
  return useContext(AlertContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { AlertProvider, useAlert };
