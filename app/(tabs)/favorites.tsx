import { View, Text, FlatList } from "react-native";
import React from "react";
import useFavoritesStore from "@/utils/useFavoritesStore";
import MovieItem from "@/components/MovieItem";

const Favorites = () => {
  const { favorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold">No favorites yet</Text>
        <Text className="text-gray-500">
          Add some movies to your favorites!
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 py-1">
        <Text className="font-bold text-2xl">Favorites</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <MovieItem
            id={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            release_date={item.release_date}
          />
        )}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          marginBottom: 16,
        }}
      />
    </View>
  );
};

export default Favorites;
