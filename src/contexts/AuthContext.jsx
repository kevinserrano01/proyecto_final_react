import { useReducer,useContext } from 'react';
import { createContext } from 'react'

const AuthContext = createContext({
    state: {},
    actions: {},
});

const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            };
        case ACTIONS.LOGOUT:
            return {
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

function AuthProvider({ children }) { // Colocar componentes dentro

    const [state, dispatch] = useReducer(reducer,{
        isAuthenticated: false,
    });

    const actions = {
        login: (token) => dispatch({ type: ACTIONS.LOGIN, payload: token }),
        logout: () => dispatch({ type: ACTIONS.LOGOUT }),
    };

    return (
        <AuthContext.Provider value={{state, actions}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(type) {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context[type];
}

export { AuthContext, AuthProvider, useAuth };