import { MovieModel } from "../services/movieService";

export interface State {
  popularMovies: Array<MovieModel>;
  movies: Array<MovieModel>;
}

export const initialState: State = {
  popularMovies: [],
  movies: [],
};

export enum ACTION_TYPES {
  GET_POPULAR_MOVIE,
}

export interface Action<T> {
  type: ACTION_TYPES;
  payload: any;
}

type Transducer = (state: State, action: Action<any>) => State;
type Reducer<T = any> = (state: State, payload?: T) => State;

export const reducer: Transducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_POPULAR_MOVIE:
      return {
        ...state,
        ...{
          popularMovies: action.payload,
        },
      };
    default:
      return state;
  }
};
