import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MovieItemProps from "@/utils/types";
import useFavoritesStore from "@/utils/useFavoritesStore";

const Like = ({ movie }: { movie?: MovieItemProps }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  if (!movie) return null;

  const favorite = isFavorite(movie.id);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-full p-3"
      onPress={() => {
        toggleFavorite();
      }}
    >
      <Image
        source={
          favorite
            ? require("@/assets/images/heart/heart_filled.png")
            : require("@/assets/images/heart/heart_outline.png")
        }
        className="w-[33px] h-[30px]"
      />
    </TouchableOpacity>
  );
};

export default Like;
