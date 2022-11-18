import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
    const logout = () => {
        //removing user from localstorage

        localStorage.removeItem('user')

        // dispatch logout for context

        dispatchEvent({type: 'LOGOUT'})

        
    }

    return { logout }
}