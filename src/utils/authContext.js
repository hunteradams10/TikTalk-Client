import { createContext, useReducer, useEffect } from "react";

export const authContext = createContext();

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
