export default interface Movie {
  id: number;
  title: string;
  overview?: string;
  release_date?: string;
  backdrop_path?: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  genre_ids: number[];
  popularity?: number;
}

export default interface MovieItemProps {
  title: string;
  genre_ids: number[];
  poster_path: string;
  vote_average: number;
}
