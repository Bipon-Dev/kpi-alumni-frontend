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
import { getEvents } from "../AdmEventOperation";

type TAdmEventContext = {
    data: string[];
    setData: (data: string[]) => void;
    loading: boolean;
    refetch: () => void;
};

const AdmEventContext = createContext<TAdmEventContext>({
    data: [],
    setData: () => { },
    loading: false,
    refetch: () => { },
});

export const useAdmEvent = () => {
    const context = useContext(AdmEventContext);
    return context;
};

type TProps = {
    children: ReactNode;
};

const Provider: FC<TProps> = ({ children }) => {
    // reload -2 = no reload, -1 = reload, -1 = default
    const [reloadKey, setReloadKey] = useState<number>(-1);
    const [data, setData] = useState<string[]>([]);

    //   const {authInfo} = useAuth2();

    useEffect(() => {
        if (reloadKey !== -2) {
            const fetchData = async () => {
                try {
                    const eventData = await getEvents();
                    setData(eventData);
                }
                catch (error) {
                    console.log("Failed to fetch events:", error);
                }
            }
            fetchData();
            setReloadKey(-2);
        }
    }, [reloadKey]);

    const value = useMemo(() => {
        const refetch = () => {
            setReloadKey(-1);
        }

        return {
            data: data,
            setData: setData,
            loading: reloadKey === -1,
            refetch,
        };
    }, [data]);

    return <AdmEventContext.Provider value={value}>{children}</AdmEventContext.Provider>;
};

export default Provider;
