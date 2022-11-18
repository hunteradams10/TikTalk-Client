import { useContext } from "react";
import { authContext } from "../utils/authContext";

export const useAuthContext = () => {
    const context = useContext(authContext)

    if (!context){
        throw Error('useAuthContext must be used inside provider')
    }

    return context
}