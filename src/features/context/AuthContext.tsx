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
    user: Object
}
const initialState:initialStetetype = {
    user: {}
}

interface ContextAuthprops {
    user: Object
}

const authReducer = (state:any,action:PayloadAction<ContextAuthprops>) => {
    switch(action.type){
        case 'LOGIN': {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case 'LOGOUT': return initialState
        case 'EDIT': {
            return {
                ...state,
                user: action.payload.user
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
