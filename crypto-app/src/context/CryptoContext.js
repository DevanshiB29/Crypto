import { createContext, useState } from "react";

export const CryptoContext= createContext({});

export const CrptoProvider =({children})=>{

    const[test, setTest]=useState("this is test");
    return (
        <CryptoContext.Provider value={{test}}>
            {children}
        </CryptoContext.Provider>
    )
}