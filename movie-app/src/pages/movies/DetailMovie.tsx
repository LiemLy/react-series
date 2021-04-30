import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import SubNav from "../../components/SubNav";
import { MovieDetailModel, movieService } from "../../services/movieService";

function convertRunTime(runtime: number) {
  return `${(runtime / 60) >> 0}h${runtime % 60}`;
}

function DetailMoviePage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailModel>({});
  const [bg, setBg] = useState<string>("");

  useEffect(() => {
    movieService
      .getDetailMovie(id)
      .then((result) => {
        setMovie(result);
        setBg(
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
        );
      })
      .catch((err) => err);
  }, [id]);

  return (
    <div>
      <SubNav />

      <div className="w-full">
        <div>
          <div>
            <div className="w-full relative">
              <div
                className="bg-gradient-to-tl bg-no-repeat bg-cover"
                style={{
                  height: "75vh",
                  backgroundImage: "url(" + bg + ")",
                }}
              ></div>

              <div
                className="bg-black absolute top-0 bottom-0 w-full bg-opacity-90 z-0"
                style={{ height: "75vh" }}
              ></div>

              <div className="absolute top-0 bottom-0">
                <div
                  style={{ height: "75vh" }}
                  className="text-white w-full flex items-center justify-center"
                >
                  <div className="w-4/5">
                    <div className="grid grid-cols-7 gap-8">
                      <div className="col-span-2 w-full rounded-xl overflow-hidden">
                        <img
                          className="w-full"
                          src={
                            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                            movie.backdrop_path
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-span-5 h-full flex items-center">
                        <div>
                          <p className="text-4xl font-bold">{movie.title}</p>
                          <div>
                            <span> {movie.release_date}</span>
                            <span>
                              {movie.genres?.map((r) => r.name).join(", ")}
                            </span>
                            <span> {convertRunTime(movie.runtime as any)}</span>
                          </div>
                          <p className="text-xl my-3 font-bold">Overview</p>
                          <p>{movie.overview}</p>

                          <div className="mt-6 grid grid-cols-3 gap-4">
                            <div>
                              <div className="font-bold">Zackary Adler</div>
                              <div>Director, Writer</div>
                            </div>
                            <div>
                              <div className="font-bold">Andy Conway</div>
                              <div>Writer</div>
                            </div>
                            <div>
                              <div className="font-bold">
                                James Edward Barker
                              </div>
                              <div>Writer</div>
                            </div>
                            <div>
                              <div className="font-bold">Nicky Tate</div>
                              <div>Writer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMoviePage;
