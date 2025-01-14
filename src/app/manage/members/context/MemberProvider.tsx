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
import { getMember } from "../MembersSectionOeration";
import ModalAdd from "../modal/ModalAdd";
interface TMenbers {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  shift: string;
  session: string;
  status: string;
  department: string;
  photo: string;
  roll: number;
  registration: number;
  institute: string;
}
type TContext = {
  memberData: TMenbers[];
  setMemberData: React.Dispatch<React.SetStateAction<TMenbers[]>>;
  loading: boolean;
};

const MemberContext = createContext<TContext | undefined>(undefined);

export const useMemberContext = () => {
  const context = useContext(MemberContext);
  return context;
};

type TProps = {
  children: ReactNode;
};

const MemberProvider: FC<TProps> = ({ children }) => {
  // reload -2 = no reload, -1 = reload, -1 = default
  const [reloadKey, setReloadKey] = useState<number>(-1);
  const [memberData, setMemberData] = useState<TMenbers[]>([]);

  useEffect(() => {
    if (reloadKey !== -2) {
      getMember()
        .then(({ data }) => {
          setMemberData(data);
        })
        .catch((err: Error) => {
          console.log(err.message);
          setMemberData([]);
        })
        .finally(() => {
          setReloadKey(-2);
        });
    }
  }, [reloadKey]);

  const value = useMemo(() => {
    return {
      memberData: memberData,
      setMemberData: setMemberData,
      loading: reloadKey === -1,
    };
  }, [memberData, reloadKey]);

  return (
    <MemberContext.Provider value={value}>
      {children}
      {/* <ModalAdd /> */}
    </MemberContext.Provider>
  );
};

export default MemberProvider;
