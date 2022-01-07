import React from "react";
import useInitialstate from "../hooks/useInitialState";

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
    const initialstate = useInitialstate();
    return (
        <AppContext.Provider value={initialstate}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;