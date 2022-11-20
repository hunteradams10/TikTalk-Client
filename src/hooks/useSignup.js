import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("https://tiktalk-server.codergirlsu.dev/users/sign-up", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password})
        })
        const json = await response.json()
        if (json.error != null) {
            console.log(json.error)
        }

        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
    }

    return { signup, isLoading, error }
}

