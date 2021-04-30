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

export interface MovieDetailModel {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: string;
  budget?: number;
  genres?: { id?: number; name?: string }[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  production_countries?: { iso_3166_1?: string; name?: string }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
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

  async getDetailMovie(id: string): Promise<MovieDetailModel> {
    const result = await axios.get(
      `${this.host}/movie/${id}?api_key=${this.apiKey}&language=${this.language}`
    );

    return result.data;
  }
}

const movieService = new MovieService();

export { movieService };
