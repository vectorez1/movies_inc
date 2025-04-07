import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import MovieList from "../../components/MovieList";
import { useQuery } from "@tanstack/react-query";
import { getSessionToken } from "@/utils/api";
import useSessionStore from "@/utils/useSessionStore";

const Index = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: getSessionToken,
    queryKey: ["sessionToken"],
  });

  const { token, setToken, clearToken } = useSessionStore();

  useEffect(() => {
    if (data && !token) {
      setToken(data);
    }
  }, [data]);

  return (
    <View className="w-[100%] h-full">
      <MovieList />
    </View>
  );
};

export default Index;
