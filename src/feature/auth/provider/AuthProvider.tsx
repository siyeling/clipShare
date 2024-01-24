import React, { createContext, useState, useContext } from "react";
import type { Props, GlobalAuthState } from "@/types"

export const AuthStateContext = createContext<GlobalAuthState>({
    authState:false,
    setAuthState:(()=>{})
});

export const AuthProvider = ({children}:Props) => {
    const [authState, setAuthState] = useState<boolean>(false);

    const State:GlobalAuthState = {
        authState,
        setAuthState
    }

    return (
        <AuthStateContext.Provider value={State}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthStateContext)
}