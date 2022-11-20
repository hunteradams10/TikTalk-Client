import { clearAllIntervals } from '../utils/utils';
import { getAuth } from 'firebase/auth';

export const useLogout = () => {
    const logout = async () => {
        const auth = getAuth()
        clearAllIntervals()
        await auth.signOut()
    }

    return { logout }
}