import { View, Text, Image } from "react-native";
import React from "react";

const Credit = ({
  name,
  character,
  profile_path,
}: {
  name: string;
  character: string;
  profile_path: string;
}) => {
  return (
    <View className="flex-row gap-2 items-center bg-white px-4 py-2 rounded-full">
      {profile_path && (
        <Image
          className="w-[50px] h-[50px] rounded-full"
          source={{
            uri: `${"https://image.tmdb.org/t/p/w500" + profile_path}`,
          }}
        />
      )}
      <View>
        <Text className="font-bold underline">{name}</Text>
        <Text>as {character} </Text>
      </View>
    </View>
  );
};

export default Credit;
