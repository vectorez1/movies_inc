import { View, Text, Image } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../utils/api";
import React from "react";

const MovieDetails = () => {
  const { id } = useGlobalSearchParams(); // Get the movie ID from the route
  const [movie, setMovie] = React.useState(null); // State to hold movie details

  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieDetails(Number(id)),
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
        <Text>Error loading movie details</Text>
      </View>
    );
  }

  return (
    <View className="p-5">
      <View>
        <Image
          className="rounded-lg w-[100px] h-[300px]"
          source={{
            uri: `${
              data.poster_path
                ? "https://image.tmdb.org/t/p/w500" + data.poster_path
                : "../assets/images/no_image.png"
            }`,
          }}
        />
      </View>
      <Text>Movie Details for ID: {id}</Text>
      <Text>Title: {data.overview}</Text>
    </View>
  );
};

export default MovieDetails;
