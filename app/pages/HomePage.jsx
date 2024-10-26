import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Screen, SearchBar } from "../../components";
import { Stack } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { useSelector } from "react-redux";
import { cookies } from "../../data";
import { CookieCard } from "../../components/CookieCard";


export const Home = () => {

    const { user } = useSelector(state => state.auth);

    return (
        <ScrollView>
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
            
            <SearchBar style={{
                marginBottom: 20
            }} value="" onSearch={() => {}} />

            <FlatList 
                data={cookies}
                keyExtractor={ (cookie) => cookie.id }
                renderItem={ ({ item }) => (<CookieCard cookie={item} />) }
                horizontal={true}
            />

        </Screen>
        </ScrollView>
    )
}
