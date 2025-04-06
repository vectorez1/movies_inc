import { View, Text, Image, ScrollView } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails, getMovieCredits } from "../../utils/api";
import React, { act } from "react";
import Category from "@/components/Category";
import ScoreItem from "@/components/ScoreItem";
import Credit from "@/components/Credit";

const MovieDetails = () => {
  const { id } = useGlobalSearchParams(); // Get the movie ID from the route
  const [movie, setMovie] = React.useState(null); // State to hold movie details

  const { data, isLoading, error } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieDetails(Number(id)),
  });

  const { data: credits, isLoading: isLoadingCredits } = useQuery({
    queryKey: ["movieCredits", id],
    queryFn: () => getMovieCredits(Number(id)),
  });

  if (isLoading && isLoadingCredits) {
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

  if (!isLoadingCredits && credits) {
    console.log(credits.cast[0]?.name);
  }

  return (
    <ScrollView>
      <View className="h-[500px] w-[100%] mb-2">
        <Image
          className="w-[100%] h-[100%]"
          source={{
            uri: `${
              data.poster_path
                ? "https://image.tmdb.org/t/p/w500" + data.poster_path
                : "../assets/images/no_image.png"
            }`,
          }}
        />
        <View className=" flex flex-row gap-2  items-center absolute w-full bottom-[10px] p-3  ">
          <Text className="font-bold bg-banana h-fit rounded-full mx-2 p-3">
            {data.title}
          </Text>
          <ScoreItem
            score={data.vote_average}
            className="scale-150 text-black"
          />
        </View>
      </View>
      <View className="flex-col gap-4 px-4">
        <Text className="font-black">
          {data.release_date.split("-").reverse().join("/")}
        </Text>
        <Category title="Genres">
          <Text>
            {data.genres
              ? data.genres.map((genre: any) => genre.name).join(", ")
              : "No genres available."}
          </Text>
        </Category>
        <Category title="Overview">
          <Text>
            {data.overview ? data.overview : "No overview available."}
          </Text>
        </Category>
        <Category title="Credits" className="flex gap-2">
          {isLoadingCredits ? (
            <Text>Loading credits...</Text>
          ) : (
            credits?.cast.map((actor: any) => (
              <Credit
                key={actor.id}
                name={actor.name}
                character={actor.character}
                profile_path={actor.profile_path}
              />
            ))
          )}
        </Category>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
