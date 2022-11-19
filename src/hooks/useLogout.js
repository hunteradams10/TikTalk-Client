import { useAuthContext } from './useAuthContext';

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        
        // Get a reference to the last interval + 1
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }

        //removing user from localstorage
        localStorage.removeItem('user')

        // dispatch logout for context

        dispatch({type: 'LOGOUT'})

        
    }

    return { logout }
}