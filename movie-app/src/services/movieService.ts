import axios from "axios";

export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: "en";
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ResultGetPopularMovies {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

class MovieService {
  host: string;
  apiKey: string;
  language: string;

  constructor() {
    this.host = `https://api.themoviedb.org/3`;
    this.apiKey = `46c8f4f525bdd00cc55108034d90ff4e`;
    this.language = `en`;
  }

  async getPopularMovies(page: number = 1): Promise<ResultGetPopularMovies> {
    const result = await axios.get(
      `${this.host}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`
    );

    return result.data;
  }
}

const movieService = new MovieService();

export { movieService };
