import { createContext, useReducer, useEffect } from "react";

export const authContext = createContext();
// a reducer is used to keep track of login and logout actions. Login is used for register, too, because the actions are the same
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// authContextProvider wraps all children, implements the reducer defined above. It can be used everywhere in the app to handle authentication state.

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // if the 'user' item is present in localStorage, we will get the user in context. If it's not, the value of 'user' in context is set to 'null'.

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user})
    }
  }, [])

  console.log('AuthContext state: ', state)

  return(
    <authContext.Provider value ={{...state, dispatch}}>
        { children }
    </authContext.Provider>
  )
};
