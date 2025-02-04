/* eslint-disable react-refresh/only-export-components */
// import { useAuth2 } from "@/bik-lib/context/auth/Auth2Provider";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getCV } from "../CVBankOeration";

type TContext = {
  cVBankData: any[];
  setCVBankData: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
};

const CVBankContext = createContext<any>({
  cVBankData: [],
  setCVBankData: () => {},
  loading: false,
});

export const useCVBankContext = () => {
  const context = useContext(CVBankContext);
  return context;
};

type TProps = {
  children: ReactNode;
};
const CVBankProvider: FC<TProps> = ({ children }) => {
  // reload -2 = no reload, -1 = reload, -1 = default
  const [reloadKey, setReloadKey] = useState<number>(-1);
  const [cVBankData, setCVBankData] = useState<any[]>([]);
  useEffect(() => {
    if (reloadKey !== -2) {
      getCV()
        .then(({ data }) => {
          setCVBankData(data.data);
        })
        .catch((err: Error) => {
          console.log(err.message);
          setCVBankData([]);
        })
        .finally(() => {
          setReloadKey(-2);
        });
    }
  }, [reloadKey]);

  const value = useMemo(() => {
    return {
      cVBankData: cVBankData,
      setCVBankDData: setCVBankData,
      loading: reloadKey === -1,
    };
  }, [cVBankData, reloadKey]);

  return (
    <CVBankContext.Provider value={value}>
      {children}
      {/* <ModalAdd /> */}
    </CVBankContext.Provider>
  );
};
export default CVBankProvider;
