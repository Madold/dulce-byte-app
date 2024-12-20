import { Image, Text, View } from "react-native";
import { Screen, SearchBar } from "../components";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Feather from '@expo/vector-icons/Feather';
import { useFonts } from "expo-font";

export default function Home() {

    const insets = useSafeAreaInsets()
    const { user } = useSelector(state => state.auth)
    const [fontsLoaded] = useFonts({
        "Inria-Bold": require("../assets/fonts/InriaSerif-Bold.ttf"),
    })

    return (
        <Screen>
            <Stack.Screen 
                options={{
                    headerTintColor: "white",
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Text> Hola, { user.displayName }</Text>
                    ),
                    headerRight: () => (
                        <View className="flex flex-row gap-4 items-center">
                            <Feather name="archive" size={24} color="black" />
                            <Image className="rounded-full" source={{ uri: user.photoURL }} style={{ width: 40, height: 40 }} />
                        </View>
                    )
                }}
            />

            <Text style={{fontFamily: "Inria-Bold"}} className="text-5xl mt-5">Escoje tu</Text>
            <Text style={{fontFamily: "Inria-Bold"}} className="text-5xl text-secondary mb-4">Galleta</Text>
            
            <SearchBar value="" onSearch={() => {}} />
        </Screen>
    )
}