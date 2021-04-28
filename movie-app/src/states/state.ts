import { MovieModel } from "../services/movieService";

export interface State {
  popularMovies: Array<MovieModel>;
  movies: Array<MovieModel>;
  popularPage: number;
  isLoadingLoadMore: boolean;
}

export const initialState: State = {
  popularMovies: [],
  popularPage: 1,
  isLoadingLoadMore: false,
  movies: [],
};

export enum ACTION_TYPES {
  GET_POPULAR_MOVIE,
  LOAD_MORE_POPULAR_MOVIE,
  LOAD_MORE_POPULAR_MOVIE_SUCCESS,
  LOAD_MORE_POPULAR_MOVIE_FAILED,
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
    case ACTION_TYPES.LOAD_MORE_POPULAR_MOVIE:
      return {
        ...state,
        ...{
          isLoadingLoadMore: true,
        },
      };
    case ACTION_TYPES.LOAD_MORE_POPULAR_MOVIE_FAILED:
      return {
        ...state,
        ...{
          isLoadingLoadMore: false,
        },
      };
    case ACTION_TYPES.LOAD_MORE_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        ...{
          popularMovies: [...state.popularMovies, ...action.payload],
          popularPage: state.popularPage + 1,
          isLoadingLoadMore: false,
        },
      };
    default:
      return state;
  }
};
