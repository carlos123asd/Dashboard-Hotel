import { PayloadAction } from '@reduxjs/toolkit'
import { useReducer, createContext, useContext, ReactNode } from 'react'

  export type TodoContextType = {
    state: any,
    dispatch: any
  };

const AuthContext = createContext<TodoContextType | null>(null)

interface initialStetetype {
    auth: boolean,
    username: string,
    email: string
}
const initialState:initialStetetype = {
    auth: false,
    username: "",
    email: ""
}

interface ContextAuthprops {
    name: string,
    email: string
}

const authReducer = (state:any,action:PayloadAction<ContextAuthprops>) => {
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

type contectProvider = {
    children: ReactNode
}

export function AuthProvider({children} : contectProvider){
    const [state,dispatch] = useReducer(authReducer,initialState)
    return <>
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    </>
}

export const useContextAuth = () => useContext(AuthContext)
