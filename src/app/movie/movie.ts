export interface Movie {
    id: number;
    original_title: string;
    overview: string,
    release_date: string,
  }

export interface Response {
  results: Movie[];
}