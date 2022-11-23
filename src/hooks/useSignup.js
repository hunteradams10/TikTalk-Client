// imports for this page
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
    // using state for error handling and loading to fetch from the API. When the user signs up, a post request will be sent to the API with the username, email and password. It will await that response and if there's an error, it'll be logged, and if not, the authContext is updated with the new username, email and password, as well as being updated in the back-end.
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

