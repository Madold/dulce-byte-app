import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {

    return (
        <SafeAreaProvider>
            <View className="flex-1 bg-primary">
            <Stack 
               screenOptions={{
                headerStyle: {
                    backgroundColor: "#EFDFCE",
                },
                headerTitle: "",
               }}
            />
        </View>
        </SafeAreaProvider>
    )
}