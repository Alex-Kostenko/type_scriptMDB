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
