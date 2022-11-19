import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)


    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
    }

    return { login, isLoading, error }
}

