import { View, Text } from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";
import React from "react";

const MovieDetails = () => {
  const { id } = useGlobalSearchParams(); // Get the movie ID from the route
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Movie Details for ID: {id}</Text>
    </View>
  );
};

export default MovieDetails;
