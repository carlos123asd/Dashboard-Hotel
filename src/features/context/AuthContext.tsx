import { PayloadAction } from '@reduxjs/toolkit'
import { useReducer, createContext, useContext, ReactNode } from 'react'

  export type TodoContextType = {
    state: any,
    dispatch: (action: any) => void
  };

  const defaultContextValue: TodoContextType = {
    state: {},  // Puedes ajustar esto a lo que tenga sentido en tu aplicación
    dispatch: () => {}  // Un dispatch que no hace nada, solo para evitar null
  };

const AuthContext = createContext<TodoContextType>(defaultContextValue)

interface initialStetetype {
    _id: string,
    username: string,
    email: string,
    photo: string
}
const initialState:initialStetetype = {
    _id: "",
    username: "",
    email: "",
    photo: ""
}

interface ContextAuthprops {
    _id: string
    name: string,
    email: string,
    photo: string
}

const authReducer = (state:any,action:PayloadAction<ContextAuthprops>) => {
    switch(action.type){
        case 'LOGIN': {
            return {
                ...state,
                _id: action.payload._id,
                username: action.payload.name,
                email: action.payload.email,
                photo: action.payload.photo
            }
        }
        case 'LOGOUT': return initialState
        case 'EDIT': {
            return {
                ...state,
                username: action.payload.name,
                email: action.payload.email,
                photo: action.payload.photo
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
