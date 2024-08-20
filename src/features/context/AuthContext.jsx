import { useReducer, createContext, useContext } from 'react'

const AuthContext = createContext()
const initialState = {
    auth: false,
    username: "",
    email: ""
}

const authReducer = (state,action) => {
    console.log(action.type)
    switch(action.type){
        case 'LOGIN': {
            return {
                ...state,
                auth: true,
                username: action.payload.name,
                email: action.payload.email
            }
        }
        case 'LOGOUT': return initialState
        case 'EDIT': {
            return {
                ...state,
                username: action.payload.name,
                email: action.payload.email
            }   
        }
        default: return state
    }
}

export function AuthProvider({ children }){
    const [state,dispatch] = useReducer(authReducer,initialState)
    return <>
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    </>
}

export const useContextAuth = () => useContext(AuthContext)
