import { useState, useContext, createContext } from "react";

const UtilsContext = createContext();

export const UtilsContextProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [mobileShow, setMobileShow] = useState(false);

    return (
        <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
            {children}
        </UtilsContext.Provider>
    );
};

export const useUtils = () => {
    const context = useContext(UtilsContext);
    if (context === undefined) {
        throw new Error("useUtils must be used within a UtilsContextProvider");
    }
    return context;
};

export default UtilsContextProvider;
