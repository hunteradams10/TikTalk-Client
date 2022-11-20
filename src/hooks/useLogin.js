import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)


    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const auth = getAuth();
        try {
            let res = await signInWithEmailAndPassword(auth, email, password)
            return res
        } catch (e) { 
            setError("Could not sign you in using these details")
            setIsLoading(false)
            return { error : e}
        }
    }

    return { login, isLoading, error }
}

