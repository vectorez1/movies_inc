import { View, Text, Image } from "react-native";
import React from "react";
import ScoreItem from "./ScoreItem";
import MovieRating from "./MovieRating";

const MovieBanner = ({
  id,
  poster_path,
  title,
  vote_average,
}: {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}) => {
  return (
    <View className="h-[500px] w-[100%] mb-2">
      <Image
        className="w-[100%] h-[100%]"
        source={{
          uri: `${
            poster_path
              ? "https://image.tmdb.org/t/p/w500" + poster_path
              : "@/assets/images/no_image.png"
          }`,
        }}
      />
      <View className=" flex flex-row gap-2 items-center absolute w-full top-[10px] py-2  ">
        <Text
          className="font-bold bg-banana h-fit overflow-hidden rounded-full mx-2 p-3"
          style={{ maxWidth: 300 }}
        >
          {title}
        </Text>
        <ScoreItem score={vote_average} className="scale-150 text-black" />
      </View>

      {/*Rating UI*/}
      <View className="w-full flex flex-row p-2 absolute bottom-[10px]">
        <MovieRating current_rating={vote_average} movie_id={id} />
      </View>
    </View>
  );
};

export default MovieBanner;
