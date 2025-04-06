import { Stack } from "expo-router";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { View, Text } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <View className="items-start justify-center h-16 px-6 w-fit">
          <Text className="text-2xl text-tomato font-bold">Movies INC</Text>
        </View>
      </View>
      <Stack>
        {/* Tabs layout */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false, // Hide header for tabs
          }}
        />
        {/* Movie details route */}
        <Stack.Screen
          name="movie/[id]"
          options={{
            headerShown: false, // Show header for movie details
            title: "Movie Details", // Customize the header title
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
