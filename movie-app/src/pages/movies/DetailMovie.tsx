import React from "react";
import { useParams } from "react-router";
import SubNav from "../../components/SubNav";
import { MovieModel, movieService } from "../../services/movieService";

function DetailMoviePage() {
  const { id } = useParams<{ id: string }>();
  let movie: MovieModel;

  movieService
    .getDetailMovie(id)
    .then((result) => {
      movie = result;
    })
    .catch((err) => err);

  return (
    <div>
      <SubNav />

      <div className="bg-red-200 w-full h-16">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DetailMoviePage;
