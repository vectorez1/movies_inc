import { View, Text } from "react-native";
import React, { ReactNode } from "react";

const Category = ({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <View className="flex-col gap-2">
      <Text className="font-black">{title}</Text>
      <View className="w-full border-solid border-black border-b-[1px]" />
      <View className={className}>{children}</View>
    </View>
  );
};

export default Category;
