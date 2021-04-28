import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { movieService } from "../../services/movieService";
import { ACTION_TYPES, appContext } from "../../states";
import { FaSearch } from "react-icons/fa";

const SORT = [
  {
    value: "1",
    name: "Popularity Descending",
  },
  {
    value: "2",
    name: "Popularity Ascending",
  },
];

function PopularPage() {
  const [state, dispatch] = useContext(appContext);

  useEffect(() => {
    movieService.getPopularMovies().then((result) => {
      console.log(result);
      dispatch({
        type: ACTION_TYPES.GET_POPULAR_MOVIE,
        payload: result.results,
      });
    });
  }, []);

  const movies = state.popularMovies;
  const isLoadingLoadMore = state.isLoadingLoadMore;

  const loadMore = () => {
    dispatch({
      type: ACTION_TYPES.LOAD_MORE_POPULAR_MOVIE,
      payload: {},
    });
    movieService
      .getPopularMovies(state.popularPage + 1)
      .then((result) => {
        dispatch({
          type: ACTION_TYPES.LOAD_MORE_POPULAR_MOVIE_SUCCESS,
          payload: result.results,
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTION_TYPES.LOAD_MORE_POPULAR_MOVIE_FAILED,
          payload: {},
        });
      });
  };

  return (
    <div>
      <div>
        <div>
          <div className="mt-8 mb-4">
            <p className="text-2xl font-bold">Popular Movies</p>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <div className="mb-4">
                <select className="form-select w-full rounded-md" name="sort">
                  <option value="">Select an options</option>
                  {SORT.map((v) => {
                    return <option value={v.value}>{v.name}</option>;
                  })}
                </select>
              </div>

              <div>
                <button className="flex items-center justify-center text-gray-700 bg-white rounded-md border-2 border-gray-200 w-full py-2">
                  <FaSearch /> <span className="ml-2">Search</span>
                </button>
              </div>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-5 gap-6">
                {movies.map((m) => {
                  return (
                    <div className="border border-1 border-gray-200 rounded-xl overflow-hidden">
                      <div>
                        <Link to={"/movie/" + m.id}>
                          <img
                            className="w-full"
                            src={
                              "https://image.tmdb.org/t/p/w220_and_h330_face" +
                              m.poster_path
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="p-6 relative">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-bold border-green-600 border-2 absolute -top-5 left-5">
                          <p>{m.vote_average}</p>
                        </div>
                        <Link
                          className="text-md font-extrabold hover:text-blue-700"
                          to={"/movie/" + m.id}
                        >
                          <p>{m.original_title}</p>
                        </Link>
                        <p className="text-gray-600">{m.release_date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center my-12">
                <button
                  onClick={loadMore}
                  className="bg-blue-900 text-white px-4 py-2 font-bold rounded-md hover:bg-blue-800 flex justify-center items-center"
                >
                  {isLoadingLoadMore ? (
                    <div className="mr-2 loader ease-linear rounded-full border-2 w-4 h-4 border-gray-200"></div>
                  ) : (
                    <div></div>
                  )}
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPage;
