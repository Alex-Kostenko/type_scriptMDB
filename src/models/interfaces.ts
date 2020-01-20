export interface rout {
  path: string,
  component: React.FC,
  exact: boolean,
  name: string,
  _showOnHeader: boolean
}

export interface genre {
  id: number,
  name: string
}

export interface searchRes {
  page: number;
  total_results: number;
  total_pages: number;
  results: post[];
}

export interface post {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string
}

export interface matchProps {
  path: string;
  url: string;
  isExact: boolean;
  params: { id: number };
}

export interface withRouterProps {
  history: {};
  location: location;
  match: matchProps;
  staticContext: any;
}

export interface location {
  pathname: string;
  search: string;
  hash: string;
  state: {} | null | undefined;
  key: string;
}

export interface roduction_companies {
  id: number;
  logo_path: any | null;
  name: string;
  origin_country: string;
}

export interface production_countries {
  iso_3166_1: string;
  name: string;
}

export interface spoken_languages {
  iso_639_1: string;
  name: string;
}

export interface movieProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any | null;
  budget: number;
  genres: genre[];
  length: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: roduction_companies[];
  production_countries: production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: false
  vote_average: number;
  vote_count: number;
}
