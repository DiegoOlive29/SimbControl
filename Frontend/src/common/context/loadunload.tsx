import { createContext, useContext, useState } from "react";
import { IContextProviderProps } from "../../utils/types/context";
import { Iloadunload } from "../../utils/types/access";
import { useAlert } from "./AlertContext";
import {
  createloadunload,
  getAllloadunload,
  deleteloadunload,
  entryPatch,
  outPatch,
  IOut,
  IEntry,
} from "../../service/loadunload";

interface ILoadunloadContextProps {
  getloadunload: () => Promise<void>;
  isLoadingloadunload: boolean;
  scheduledAccess: Iloadunload[];
  addloadunload: (payload: Iloadunload) => Promise<void>;
  isLoadingAddloadunload: boolean;
  loadunloadDelete: (id: string) => Promise<void>;
  loadunloadEntry: (id: string, payload: IEntry) => Promise<void>;
  loadunloadOut: (id: string, payload: IOut) => Promise<void>;
}

const LoadunloadContext = createContext({} as ILoadunloadContextProps);

const LoadunloadProvider = ({
  children,
}: IContextProviderProps): JSX.Element => {
  const [isLoadingloadunload, setIsLoadingloadunload] = useState(true);
  const [isLoadingAddloadunload, setIsLoadingAddloadunload] = useState(false);
  const [scheduledAccess, setScheduledAccess] = useState<Iloadunload[]>([]);

  const { handleError, handleSuccess } = useAlert();

  const getloadunload = async () => {
    try {
      const fetchedloadunload = await getAllloadunload();

      setScheduledAccess(fetchedloadunload);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoadingloadunload(false);
    }
  };

  const addloadunload = async (payload: Iloadunload) => {
    try {
      setIsLoadingAddloadunload(true);

      const createdScheduledAccess = await createloadunload(payload);

      setScheduledAccess((prev) => [...prev, createdScheduledAccess.newRecord]);
      handleSuccess(createdScheduledAccess.message);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoadingAddloadunload(false);
    }
  };

  const loadunloadDelete = async (id: string): Promise<void> => {
    try {
      const result = await deleteloadunload(id);
      handleSuccess(result.message);
    } catch (error) {
      handleError(error);
      throw error;
    } finally {
      setIsLoadingAddloadunload(false);
    }
  };
  const loadunloadEntry = async (
    id: string,
    payload: IEntry
  ): Promise<void> => {
    try {
      const result = await entryPatch(id, payload);
      handleSuccess(result.message);
    } catch (error) {
      handleError(error);
      throw error;
    } finally {
      setIsLoadingAddloadunload(false);
    }
  };
  const loadunloadOut = async (id: string, payload: IOut): Promise<void> => {
    try {
      const result = await outPatch(id, payload);
      handleSuccess(result.message);
    } catch (error) {
      handleError(error);
      throw error;
    } finally {
      setIsLoadingAddloadunload(false);
    }
  };

  return (
    <LoadunloadContext.Provider
      value={{
        getloadunload,
        isLoadingloadunload,
        scheduledAccess,
        addloadunload,
        isLoadingAddloadunload,
        loadunloadDelete,
        loadunloadEntry,
        loadunloadOut,
      }}
    >
      {children}
    </LoadunloadContext.Provider>
  );
};

function useLoadUnload(): ILoadunloadContextProps {
  return useContext(LoadunloadContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { LoadunloadProvider, useLoadUnload };
