import { createContext, FunctionComponent, useReducer } from "react";
import { initialState, reducer } from "./state";

export const appContext = createContext({});

export const AppProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <appContext.Provider value={[state, dispatch]}>
      {children}
    </appContext.Provider>
  );
};
