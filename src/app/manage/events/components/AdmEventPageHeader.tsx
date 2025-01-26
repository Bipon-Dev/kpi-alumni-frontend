import useModelStore from "@/lib/stores/useModelStore";
import React from "react";
import { useAdmEvent } from "./context/AdmEventProvider";
import { RefreshCw } from "lucide-react";

const AdmEventPageHeader: React.FC = () => {
    const { openModel } = useModelStore();
    const { refetch, loading } = useAdmEvent();
    return (
        <div className="flex items-center justify-between p-3">
            <div className="text-2xl font-medium text-primary">
                Manage Events
            </div>
            <div className="flex gap-3 Action Buttons ">
                <button
                    onClick={() => refetch()}
                    disabled={loading}
                    className="px-3 py-2 rounded-md cursor-pointer text-secondary bg-secondary-200 hover:text-white hover:bg-secondary">
                    <RefreshCw />
                </button>
                <button
                    className="px-3 py-2 text-white rounded-md bg-secondary w-[125px] hover:bg-secondary-700 cursor-pointer"
                    disabled={loading}
                    onClick={() => openModel("add-event")}>
                    Add Event
                </button>
            </div>
        </div >
    );
};

export default AdmEventPageHeader;
