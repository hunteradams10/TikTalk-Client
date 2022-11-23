// imports for this page
import { useContext } from "react";
import { authContext } from "../utils/authContext";

// using Context for authentication which is later used to wrap the App component in index.js. If there is an error and the context isn't working, it will be thrown.
export const useAuthContext = () => {
    const context = useContext(authContext)

    if (!context){
        throw Error('useAuthContext must be used inside provider')
    }

    return context
}