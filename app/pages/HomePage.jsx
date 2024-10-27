import { FlatList, Image, Text, View, Pressable } from "react-native";
import { Screen, SearchBar } from "../../components";
import { Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { cookies } from "../../data";
import { CookieCard } from "../../components/CookieCard";
import { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styled } from "nativewind";
import { signOut } from "../../store";
import { ProfileModal } from "../../components/ProfileModal";

const StyledPressable = styled(Pressable);

export const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch(signOut);

  const handleLogout = () => {
    dispatch(signOut());
  };

  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView>
      <Screen style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerTintColor: "white",
            headerShadowVisible: false,
            headerLeft: () => <Text>Hola, {user.displayName}</Text>,
            headerRight: () => (
              <View className="flex flex-row gap-4 items-center">
                <Feather name="archive" size={24} color="black" />
                <Pressable onPress={() => setModalVisible(true)}>
                  <Image
                    className="rounded-full"
                    source={{ uri: user.photoURL }}
                    style={{ width: 40, height: 40 }}
                  />
                </Pressable>
              </View>
            ),
          }}
        />

        <ProfileModal
          user={user}
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onLogout={handleLogout}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: "Inria-Bold" }} className="text-5xl mt-5">
            Escoje tu
          </Text>
          <Text
            style={{ fontFamily: "Inria-Bold" }}
            className="text-5xl text-secondary mb-4"
          >
            Galleta
          </Text>

          <SearchBar
            style={{
              marginBottom: 20,
            }}
            value=""
            onSearch={() => {}}
          />

          <View>
            <FlatList
              data={cookies}
              keyExtractor={(cookie) => cookie.id}
              renderItem={({ item }) => (
                <CookieCard cookie={item} onAddToCart={openBottomSheet} />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </Screen>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["50%"]}
        backgroundStyle={{
          backgroundColor: "#98154E",
        }}
        handleIndicatorStyle={{
          backgroundColor: "#fff",
        }}
      >
        <BottomSheetView>
          <View className="p-3">
            <View className="w-full flex flex-row">
              <View className="flex flex-row items-center gap-2">
                <View className="bg-primaryVariant p-4 rounded-full">
                  <Feather name="shopping-cart" size={24} color="#EFDFCE" />
                </View>

                <View>
                  <Text className="text-xl font-bold text-primary">
                    Shopping cart
                  </Text>
                  <Text className="text-primary">0 items</Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
