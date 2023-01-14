import React ,{createContext, useContext, useReducer } from "react";

// Preapres a dataLayer or context store
export const StateContext = createContext();
 
// Wrap our app and provide data layer to every component
export const StateProvider = ({reducer, initialState, children}) =>(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )

// with the help of this we will pull information from data layer
export const useStateValue = ()=> useContext(StateContext);