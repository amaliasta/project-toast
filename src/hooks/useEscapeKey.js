import React from "react";

const useKey = (handlerFunction) => {
    React.useEffect(() => {
        console.log('effect running')
        window.addEventListener("keydown", handlerFunction);
        return () => window.removeEventListener("keydown", handlerFunction);
    }, [handlerFunction]);

    return [];
};

export default useKey;
