// imports for this page
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
    // states for errors and loading status.
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    // an async function to send email and password to context. There is no error when this request is sent.
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        // async function to send to firebase to check authentication. If something goes wrong, the setError message is displyed to the user and the setLoading state is set to false; the error message is returned. Otherwise it'll go through.
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

