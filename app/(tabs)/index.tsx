import { View, Text } from "react-native";
import React, { useEffect } from "react";
import MovieList from "../../components/MovieList";
import { useQuery } from "@tanstack/react-query";
import { getSessionToken } from "@/utils/api";

const Index = () => {
  return (
    <View className="w-[100%] h-full">
      <MovieList />
    </View>
  );
};

export default Index;
