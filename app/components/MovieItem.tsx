import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MovieItemProps from "../utils/types";
import { getGenreName } from "../utils/api";
import ScoreItem from "./ScoreItem";

export const MovieItem = ({
  title,
  poster_path,
  genre_ids,
  vote_average,
  release_date,
}: MovieItemProps) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center bg-white rounded-lg shadow-md p-2"
      onPress={() => {
        // Handle movie item press
        console.log("Movie item pressed:", title);
      }}
    >
      <View className="flex-row  mb-2 w-fit">
        <Image
          className="rounded-lg w-[fit-content] h-[fit-content]"
          source={{
            uri: `${
              poster_path
                ? "https://image.tmdb.org/t/p/w500" + poster_path
                : "../assets/images/no_image.png"
            }`,
          }}
          style={{ width: 100, height: 150 }}
        />
        <ScoreItem
          score={vote_average}
          className="absolute right-[-8] top-[-8]"
        />
      </View>

      <View>
        <Text className=" font-bold" style={{ width: 100, fontSize: 12 }}>
          {title}
        </Text>
        <Text className="text-[7px]">{release_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
