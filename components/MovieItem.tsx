import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScoreItem from "./ScoreItem";
import { useRouter } from "expo-router";
import MovieItemProps from "@/utils/types";

export const MovieItem = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: MovieItemProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="flex justify-center items-center bg-white rounded-lg shadow-md p-2"
      onPress={() => {
        // Handle movie item press
        console.log("Movie item pressed:", title);
        router.push(`/movie/${id}`);
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
        <Text
          className=" font-bold"
          numberOfLines={1}
          style={{ width: 100, fontSize: 12 }}
        >
          {title}
        </Text>
        <Text className="text-[7px]">
          {release_date && release_date.split("-").reverse().join("/")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
