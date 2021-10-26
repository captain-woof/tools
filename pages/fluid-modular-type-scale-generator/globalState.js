import { createContext, useContext, useReducer } from "react";

/* Initial state */
const initialState = {
    /* States for generator */
    fsBase: 16,
    fsFactorMin: 1.2,
    fsFactorMax: 1.333,
    lhMin: 1.2,
    lhMax: 1.5,
    exportDialogOpen: false
}

/* Reducer */
const reducer = (state, payload) => {
    switch (payload.type) {
        case 'SET_FS_BASE':
            return { ...state, fsBase: payload.value }
        case 'SET_FS_FACTOR_MIN':
            return { ...state, fsFactorMin: payload.value }
        case 'SET_FS_FACTOR_MAX':
            return { ...state, fsFactorMax: payload.value }
        case 'SET_LH_MIN':
            return { ...state, lhMin: payload.value }
        case 'SET_LH_MAX':
            return { ...state, lhMax: payload.value }
        case 'SET_EXPORT_DIALOG_OPEN':
            return { ...state, exportDialogOpen: payload.isOpen }
        case 'RESET':
            return initialState
    }
}

/* Global context */
const GlobalContext = createContext({})

export default function GlobalStateProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

/* Custom hook to get state and dispatch */
export const useGlobalState = () => {
    return useContext(GlobalContext)
}