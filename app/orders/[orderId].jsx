import { Screen } from "../../components";
import { Stack, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { getOrder } from "../../store/orders/thunks";

export default function Page() {
  const { orderId } = useLocalSearchParams();
  const dispatch = useDispatch();
  const { order, isFetchingOrder } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
        }}
      />

      {isFetchingOrder ? (
        <View className="w-full h-full flex justify-center items-center">
          <ActivityIndicator size={50} color="#98154E" />
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontFamily: "Inria-Bold",
            }}
            className="text-5xl mt-5"
          >
            Detalles del
          </Text>

          <Text
            style={{
              fontFamily: "Inria-Bold",
            }}
            className="text-5xl mt-5 text-secondary"
          >
            Pedido
          </Text>
        </View>
      )}
    </Screen>
  );
}
