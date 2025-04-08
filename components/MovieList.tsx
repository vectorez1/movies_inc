import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Movie from "../utils/types";
import { getMovies } from "../utils/api";
import { MovieItem } from "./MovieItem";
import { useQuery } from "@tanstack/react-query";
import useSessionStore from "@/utils/useSessionStore";

export default function MovieList() {
  const [page, setPage] = useState(1);

  const { token } = useSessionStore();

  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies(page),
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error loading movies</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <FlatList
        //Sorting the movies by title
        data={data.results.sort((a: Movie, b: Movie) =>
          a.title.localeCompare(b.title)
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          margin: 2,
          padding: 5,
        }}
        renderItem={({ item }) => (
          <MovieItem
            id={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            release_date={item.release_date}
          />
        )}
      />
    </View>
  );
}
