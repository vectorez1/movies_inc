import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import Category from "./Category";
import { getMovieRecommendations } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import MovieItem from "./MovieItem";

const RecomendedMovies = ({ movie_id }: { movie_id: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["movieRecommendations"],
    queryFn: () => getMovieRecommendations(movie_id),
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }
  if (!data) {
    return <></>;
  }

  return (
    <Category
      title="Recomended Movies"
      className="flex-row gap-2 overflow-x-scroll scrollbar-hide"
    >
      <FlatList
        data={data.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieItem
            id={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            release_date={item.release_date}
          />
        )}
        contentContainerStyle={{ paddingLeft: 10, paddingRight: 10, gap: 10 }}
      />
    </Category>
  );
};

export default RecomendedMovies;
