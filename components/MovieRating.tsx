import { Rating } from "react-native-ratings";
import React, { useEffect } from "react";
import useSessionStore from "@/utils/storage";
import { setRating, getRatedMovies } from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

const MovieRating = ({
  current_rating, // Fixed typo here
  movie_id,
}: {
  current_rating: number;
  movie_id: number;
}) => {
  const { token } = useSessionStore((state) => state);
  const [starRating, setStarRating] = React.useState(current_rating / 2);

  if (!token) {
    return (
      <Rating
        style={{
          marginLeft: "auto",
          backgroundColor: "white",
          borderRadius: 15,
          overflow: "hidden",
          padding: 5,
          paddingHorizontal: 10,
        }}
        ratingColor="#F9C74F"
        tintColor="white"
        ratingCount={5}
        startingValue={current_rating / 2}
        imageSize={30}
      />
    );
  }

  const { mutate, isError } = useMutation({
    mutationFn: (newRating: number) => setRating(movie_id, token, newRating),
    onSuccess: () => {
      console.log("Rating updated successfully");
    },
    onError: () => {
      console.error("Failed to update rating");
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["movieRating", movie_id],
    queryFn: () => getRatedMovies(token, 1),
  });

  return (
    <Rating
      style={{
        marginLeft: "auto",
        backgroundColor: "white",
        borderRadius: 15,
        overflow: "hidden",
        padding: 5,
        paddingHorizontal: 10,
      }}
      ratingColor="#F9C74F"
      tintColor="white"
      ratingCount={5}
      startingValue={current_rating / 2}
      imageSize={30}
      onFinishRating={(rating: number) => {
        const newRating = rating * 2;
        setStarRating(rating);
        mutate(newRating);
      }}
    />
  );
};

export default MovieRating;
