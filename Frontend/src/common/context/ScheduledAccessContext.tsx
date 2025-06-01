import { createContext, useContext, useState } from "react";
import { IContextProviderProps } from "../../utils/types/context";
import {
  ICreateScheduledAccessInput,
  IScheduleAccess,
} from "../../utils/types/access";
import { useAlert } from "./AlertContext";
import {
  createScheduleAccess,
  getAllScheduleAccess,
  postAccessScheduleByEmailQrCode,
  IPostScheduleAccessResponseQRCode,
  denyentry,
  Idenyentry,
} from "../../service/scheduledAccess";

interface IScheduledAccessContextProps {
  getScheduleAccess: () => Promise<void>;
  isLoadingScheduleAccess: boolean;
  scheduledAccess: IScheduleAccess[];
  addScheduleAccess: (payload: ICreateScheduledAccessInput) => Promise<void>;
  isLoadingAddScheduleAccess: boolean;
  postEmailQr: (
    id: string,
    payload: IPostScheduleAccessResponseQRCode
  ) => Promise<IPostScheduleAccessResponseQRCode>;
  denyentrySchedules: (id: string, payload: Idenyentry) => Promise<void>;
}

const ScheduledAccessContext = createContext(
  {} as IScheduledAccessContextProps
);

const ScheduledAccessProvider = ({
  children,
}: IContextProviderProps): JSX.Element => {
  const [isLoadingScheduleAccess, setIsLoadingScheduleAccess] = useState(true);
  const [isLoadingAddScheduleAccess, setIsLoadingAddScheduleAccess] =
    useState(false);
  const [scheduledAccess, setScheduledAccess] = useState<IScheduleAccess[]>([]);

  const { handleError, handleSuccess } = useAlert();

  const getScheduleAccess = async () => {
    try {
      const fetchedScheduleAccess = await getAllScheduleAccess();

      setScheduledAccess(fetchedScheduleAccess);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoadingScheduleAccess(false);
    }
  };

  const addScheduleAccess = async (payload: ICreateScheduledAccessInput) => {
    try {
      setIsLoadingAddScheduleAccess(true);

      const createdScheduledAccess = await createScheduleAccess(payload);

      setScheduledAccess((prev) => [...prev, createdScheduledAccess.newRecord]);
      handleSuccess(createdScheduledAccess.message);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoadingAddScheduleAccess(false);
    }
  };

  const postEmailQr = async (
    id: string,
    payload: IPostScheduleAccessResponseQRCode
  ): Promise<IPostScheduleAccessResponseQRCode> => {
    try {
      const result = await postAccessScheduleByEmailQrCode(id, payload);

      handleSuccess(result.message);
      return result;
    } catch (error) {
      handleError(error);
      throw error;
    } finally {
      setIsLoadingAddScheduleAccess(false);
    }
  };

  const denyentrySchedules = async (
    id: string,
    payload: { status: string }
  ): Promise<void> => {
    try {
      const result = await denyentry(id, payload);
      handleSuccess(result.message);
      return result;
    } catch (error) {
      handleError(error);
      throw error;
    } finally {
      setIsLoadingAddScheduleAccess(false);
    }
  };

  return (
    <ScheduledAccessContext.Provider
      value={{
        getScheduleAccess,
        isLoadingScheduleAccess,
        scheduledAccess,
        addScheduleAccess,
        isLoadingAddScheduleAccess,
        postEmailQr,
        denyentrySchedules,
      }}
    >
      {children}
    </ScheduledAccessContext.Provider>
  );
};

function useScheduledAccess(): IScheduledAccessContextProps {
  return useContext(ScheduledAccessContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { ScheduledAccessProvider, useScheduledAccess };
