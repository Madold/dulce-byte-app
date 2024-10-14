import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { Screen } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter/counterSlice";

export default function Index() {

    const insets = useSafeAreaInsets();
    const { counter } = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <Screen style={{
            paddingTop: insets.top,
        }}>
            <Stack.Screen 
                options={{
                    headerShown: false
                }}
            />
            <Text className="text-3xl font-bold">Pick your</Text>
            <Text className="text-3xl font-bold text-secondary">Cookie</Text>
           
        </Screen>
    )
}