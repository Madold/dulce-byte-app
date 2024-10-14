import { Link, Stack } from "expo-router";
import { Text } from "react-native";
import { Screen } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

export default function Index() {

    const insets = useSafeAreaInsets();

    return (
        <Screen style={{
            paddingTop: insets.top,
        }}>
            <Stack.Screen 
                options={{
                    headerShown: false
                }}
            />
            <Text>Chilla</Text>
            <Link href="/auth">Auth</Link>
        </Screen>
    )
}