'use client';

import React, { useContext, useState, createContext } from 'react';

type AppContextType = {
    sidebar: boolean;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <AppContext.Provider value={{
            sidebar, setSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};
export default useAppContext;
