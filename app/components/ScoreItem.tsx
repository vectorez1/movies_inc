import { View, Text } from "react-native";
import React from "react";

const ScoreItem = ({
  score,
  className,
}: {
  score: number;
  className?: string;
}) => {
  return (
    <View
      className={`${
        score < 5 ? "bg-tomato" : score < 7 ? "bg-banana" : "bg-lime"
      } rounded-full w-8 h-8 items-center justify-center ${className}`}
    >
      <Text className="text-white font-bold text-sm">
        {score ? score.toPrecision(2) : 0}
      </Text>
    </View>
  );
};

export default ScoreItem;
