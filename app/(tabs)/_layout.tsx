import React from "react";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import TabBarIcon from "../../components/TabBarIcon";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          display: "flex",
          paddingTop: 10,
          paddingHorizontal: 0,
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Favorites" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
