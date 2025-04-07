import { Rating } from "react-native-ratings";
import React, { useEffect, useState } from "react";
import useSessionStore from "@/utils/useSessionStore";
import { setRating, getMovieRated } from "@/utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

const MovieRating = ({
  current_rating,
  movie_id,
}: {
  current_rating: number;
  movie_id: number;
}) => {
  const { token } = useSessionStore((state) => state);
  const [starRating, setStarRating] = useState(current_rating / 2);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieRating", movie_id],
    queryFn: () => getMovieRated(movie_id, token),
    enabled: !!token,
  });

  useEffect(() => {
    if (data?.value) {
      setStarRating(data.value / 2);
    }
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: (newRating: number) => setRating(movie_id, token, newRating),
    onSuccess: () => {
      console.log("Rating updated successfully");
      alert("Rating updated successfully");
    },
    onError: () => {
      console.error("Failed to update rating");
    },
  });

  if (!token) {
    return null;
  }

  return (
    <Rating
      style={{
        marginLeft: "auto",
        backgroundColor: "white",
        borderRadius: 15,
        overflow: "hidden",
        padding: 5,
        paddingHorizontal: 10,
        maxHeight: 44,
      }}
      ratingColor="#F9C74F"
      tintColor="white"
      ratingCount={5}
      imageSize={30}
      startingValue={starRating}
      onFinishRating={(rating: number) => {
        const newRating = rating * 2;
        setStarRating(rating);
        mutate(newRating);
      }}
    />
  );
};

export default MovieRating;
