import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
    
    const { toasts } = React.useContext(ToastContext);
    return (
        <ol className={styles.wrapper} role="region"
        aria-live="polite"
        aria-label="Notifications">
            {toasts.length > 0 &&
                toasts.map(({ uuid, variant, message }) => {
                    return (
                        <li key={uuid} className={styles.toastWrapper}>
                            <Toast
                                toastId={uuid}
                                toastVariant={variant}
                                toastMessage={message}>
                                {message}
                            </Toast>
                        </li>
                    );
                })}
        </ol>
    );
}

export default ToastShelf;
