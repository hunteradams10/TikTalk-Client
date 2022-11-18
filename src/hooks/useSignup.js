import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("https://tiktalk-server.codergirlsu.dev/users/sign-up", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            // save user to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            //update authContext
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            console.log(response)
        }
    }

    return { signup, isLoading, error }
}

