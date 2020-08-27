import React, { createContext,useContext,useReducer } from "react";

// sets up the data layer

export const StateContext = createContext();

export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// provider

export const useStateValue = () => useContext(StateContext);