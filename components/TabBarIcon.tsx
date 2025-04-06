import { View, Text } from "react-native";
import React from "react";

const TabBarIcon = ({
  title,
  focused,
}: {
  title: string;
  focused: boolean;
}) => {
  if (focused) {
    return (
      <View className="w-[150px] h-[3em] items-center justify-center bg-tomato rounded-full">
        <Text className="font-bold" style={{ color: "white" }}>
          {title}
        </Text>
      </View>
    );
  }
  return (
    <View className="w-[150px] h-[3em] items-center justify-center">
      <Text className="font-bold" style={{ color: "black" }}>
        {title}
      </Text>
    </View>
  );
};

export default TabBarIcon;
