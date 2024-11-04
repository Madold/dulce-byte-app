import { Text, View, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { LoadingScreen, Screen } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../../store/orders/thunks";
import { OrdersList } from "../components/OrdersList";

export const OrdersPage = () => {
  const { isLoading, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [])

  return (
    <Screen
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerShadowVisible: false,
        }}
      />

      {isLoading ? (
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
            Historial de
          </Text>

          <Text
            style={{
              fontFamily: "Inria-Bold",
            }}
            className="text-5xl mt-5 text-secondary"
          >
            Pedidos
          </Text>

          <OrdersList orders={orders} />

        </View>
      )}
    </Screen>
  );
};
