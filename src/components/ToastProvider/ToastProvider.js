import React from "react";
import useKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const handleEscape = React.useCallback((e) => {
        if (e.code === "Escape") {
            setToasts([]);
        }
    }, []);

    useKey(handleEscape);

    const createToast = React.useCallback((message, variant) => {
        const newToast = { variant, message, uuid: crypto.randomUUID() };
        setToasts([...toasts, newToast]);
    });

    function dismissToast(uuid) {
        const updatedToasts = toasts.filter((toast) => toast.uuid !== uuid);
        setToasts(updatedToasts);
    }

    return (
        <ToastContext.Provider
            value={{
                toasts,
                createToast,
                dismissToast
            }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
