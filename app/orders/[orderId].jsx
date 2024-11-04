import { Screen } from "../../components";
import { Stack, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { getOrder } from "../../store/orders/thunks";
import {
  formatDate,
  formatTotalPayment,
  calculateTotalPaymentFromOrder,
} from "./utils";

export default function Page() {
  const { orderId } = useLocalSearchParams();
  const dispatch = useDispatch();
  const { order, isFetchingOrder } = useSelector((state) => state.orders);
  const total = useMemo(() => calculateTotalPaymentFromOrder(order), [order]);

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

          <View className="flex flex-row justify-between mt-5">
            <Text>Id de la orden</Text>
            <Text>{order.id}</Text>
          </View>

          <View className="ml-3">
            <View className="flex flex-row justify-between mb-3 mt-3">
              <Text>Fecha</Text>
              <Text>{formatDate(order.timestamp)}</Text>
            </View>

            <View className="flex flex-row justify-between mb-3">
              <Text>Estado del pago</Text>
              <Text>{order.paymentState}</Text>
            </View>

            <View className="flex flex-row justify-between mb-3">
              <Text>Estado de la entrega</Text>
              <Text>{order.complianceStatus}</Text>
            </View>

            {order.products.map((product) => (
              <View id={`${product.cookie.id}`}>
                <View className="flex flex-row justify-between mb-3">
                  <Text>Producto</Text>
                  <Text>{product.cookie.name}</Text>
                </View>
                <View className="flex flex-row justify-between mb-3">
                  <Text>Precio</Text>
                  <Text>{formatTotalPayment(product.cookie.price)}</Text>
                </View>
                <View className="flex flex-row justify-between mb-3">
                  <Text>Cantidad</Text>
                  <Text>{product.quantity}</Text>
                </View>
              </View>
            ))}

            <View className="flex flex-row justify-between mb-3">
              <Text>Total</Text>
              <Text>{formatTotalPayment(total)}</Text>
            </View>
          </View>
        </View>
      )}
    </Screen>
  );
}
