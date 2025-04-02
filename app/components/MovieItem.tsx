import { Text, View, Image } from "react-native";
import React from "react";
import { MovieItemProps } from "../utils/types";
import { getGenreName } from "../utils/api";
import ScoreItem from "./ScoreItem";

export const MovieItem = ({
  title,
  poster_path,
  genre_ids,
  vote_average,
}: MovieItemProps) => {
  return (
    <View className="flex justify-center items-center">
      <View className="flex-row  mb-2 w-fit">
        <Image
          className="rounded-lg w-[fit-content] h-[fit-content]"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={{ width: 100, height: 150 }}
        />
        <ScoreItem
          score={vote_average}
          className="absolute right-[-8] top-[-8]"
        />
      </View>

      <Text className=" font-bold" style={{ width: 100, fontSize: 12 }}>
        {title}
      </Text>
    </View>
  );
};

export default MovieItem;
