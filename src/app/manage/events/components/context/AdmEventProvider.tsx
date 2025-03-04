import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getEvents } from "../AdmEventOperation";
import { TEventAdmData } from "../AdmEventTypes";

type TAdmEventContext = {
  data: TEventAdmData;
  setData: (data: TEventAdmData) => void;
  loading: boolean;
  refetch: () => void;
};
const AdmEventContext = createContext<TAdmEventContext>({
  data: {
    eventStatus: [],
    events: [],
  },
  setData: () => {},
  loading: false,
  refetch: () => {},
});
export const useAdmEvent = () => {
  const context = useContext(AdmEventContext);
  return context;
};

type TProps = {
  children: ReactNode;
};

const AdmEventProvider: FC<TProps> = ({ children }) => {
  // reload -2 = no reload, -1 = reload, -1 = default
  const [reloadKey, setReloadKey] = useState<number>(-1);
  const [data, setData] = useState<TEventAdmData>({
    eventStatus: [],
    events: [],
  });

  useEffect(() => {
    if (reloadKey !== -2) {
      const fetchData = async () => {
        try {
          const eventData = await getEvents();
          setData(eventData.data);
        } catch (error) {
          console.log("Failed to fetch events:", error);
        }
      };
      fetchData();
    }
    setReloadKey(-2);
  }, [reloadKey]);

  const value = useMemo(() => {
    const refetch = () => {
      setReloadKey(-1);
    };
    return {
      data: data,
      setData: setData,
      loading: reloadKey === -1,
      refetch,
    };
  }, [data, reloadKey]);

  return (
    <AdmEventContext.Provider value={value}>
      {children}
    </AdmEventContext.Provider>
  );
};

export default AdmEventProvider;
