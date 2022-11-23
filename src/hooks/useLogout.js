//imports for this page
import { clearAllIntervals } from '../utils/utils';
import { getAuth } from 'firebase/auth';

// an async function is inside to call the auth context and clear all intervals. It will then use the response to sign the user out.
export const useLogout = () => {
    const logout = async () => {
        const auth = getAuth()
        clearAllIntervals()
        await auth.signOut()
    }

    return { logout }
}