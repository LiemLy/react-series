import { CharacterModel } from "../services/characterService";

export interface State {
  characters: Array<CharacterModel>;
}

export const initialState: State = {
  characters: [],
};

export enum ACTION_TYPES {
  GET_ALL_CHARACTER,
}

export interface Action<T> {
  type: ACTION_TYPES;
  payload: any;
}

type Transducer = (state: State, action: Action<any>) => State;
type Reducer<T = any> = (state: State, payload?: T) => State;

export const reducer: Transducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_CHARACTER:
      return {
        ...state,
        ...{
          characters: action.payload,
        },
      };
    default:
      return state;
  }
};
