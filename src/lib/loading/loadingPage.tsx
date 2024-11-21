import { Loader2 } from "lucide-react";
import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-30">
        <Loader2 className="animate-spin size-full text-secondary" />
      </div>
    </div>
  );
};

export default LoadingPage;
