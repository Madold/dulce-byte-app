import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Layout() {

    return (
        <SafeAreaProvider>
            <Provider store={store}>
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
            </Provider>
        </SafeAreaProvider>
    )
}