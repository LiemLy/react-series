import { createContext, FunctionComponent, useReducer, Dispatch } from "react";
import { initialState, reducer, State, Action } from "./state";

export const appContext = createContext<[State, Dispatch<Action<any>>]>([
  initialState,
  () => {},
]);

export const AppProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <appContext.Provider value={[state, dispatch]}>
      {children}
    </appContext.Provider>
  );
};
