// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";
// import { X } from "lucide-react";

// type Toast = {
//   id: number;
//   message: string;
//   type?: "success" | "error" | "info";
// };

// type ToastContextType = {
//   addToast: (message: string, type?: "success" | "error" | "info") => void;
// };

// const ToastContext = createContext<ToastContextType | undefined>(undefined);

// export function ToastProvider({ children }: { children: ReactNode }) {
//   const [toasts, setToasts] = useState<Toast[]>([]);

//   const addToast = (
//     message: string,
//     type: "success" | "error" | "info" = "info"
//   ) => {
//     const id = Date.now();
//     setToasts((prev) => [...prev, { id, message, type }]);
//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== id));
//     }, 3000);
//   };

//   return (
//     <ToastContext.Provider value={{ addToast }}>
//       {children}
//       {/* Toast Container */}
//       <div className="fixed top-4 right-4 flex flex-col gap-3 z-50">
//         {toasts.map((toast) => (
//           <div
//             key={toast.id}
//             className={`px-4 py-2 rounded-lg shadow text-white flex items-center gap-2 ${
//               toast.type === "success"
//                 ? "bg-green-600"
//                 : toast.type === "error"
//                 ? "bg-red-600"
//                 : "bg-gray-800"
//             }`}
//           >
//             <span>{toast.message}</span>
//             <button
//               onClick={() =>
//                 setToasts((prev) => prev.filter((t) => t.id !== toast.id))
//               }
//               className="ml-auto hover:text-gray-200"
//             >
//               <X size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </ToastContext.Provider>
//   );
// }

// export function useToast() {
//   const context = useContext(ToastContext);
//   if (!context) throw new Error("useToast must be used inside ToastProvider");
//   return context;
// }
// //

"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { X, CheckCircle, Info, AlertCircle } from "lucide-react";

type Toast = {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
};

type ToastContextType = {
  addToast: (message: string, type?: "success" | "error" | "info") => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle size={16} className="text-[#0099ff]" />;
      case "error":
        return <AlertCircle size={16} className="text-[#0099ff]" />;
      default:
        return <Info size={16} className="text-[#0099ff]" />;
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed top-16 right-4 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="px-4 py-2 rounded-md shadow border border-[#0099ff]/30 bg-white text-sm flex items-center gap-2 min-w-[220px] max-w-[300px]"
          >
            {getIcon(toast.type || "info")}
            <span className="text-gray-700 flex-1">{toast.message}</span>
            <button
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              className="ml-auto text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
