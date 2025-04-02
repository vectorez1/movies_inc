import React, { useEffect, useState } from "react";
import { FlatList, Text, View, ScrollView } from "react-native";
import { Movie } from "../utils/types";
import { getMovies } from "../utils/api";
import { MovieItem } from "../components/MovieItem";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(100);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getMovies(page);
        setMovies(res.results);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movies.");
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      {error ? (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            margin: 3,
            padding: 10,
          }}
          renderItem={({ item }) => (
            <MovieItem
              title={item.title}
              genre_ids={item.genre_ids}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          )}
        />
      )}
    </View>
  );
}
