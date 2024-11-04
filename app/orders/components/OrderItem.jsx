import { Text, View } from "react-native";
import { formatDate, formatTotalPayment } from "../utils";
import { useMemo } from "react";
import { calculateTotalPaymentFromOrder } from "../utils/calculateTotalPaymentFromOrder";
import { Link } from "expo-router";

export const OrderItem = ({ order }) => {
  const total = useMemo(() => calculateTotalPaymentFromOrder(order), [order]);

  return (
    <View className="w-full">
      <View className="flex flex-row justify-between">
        <Text>Id de la orden</Text>
        <Text>{order.id}</Text>
      </View>
      <View className="ml-3 mt-3">
        <View className="flex flex-row justify-between mb-3">
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

        <View className="flex flex-row justify-between mb-3">
          <Text>Total</Text>
          <Text>{formatTotalPayment(total)}</Text>
        </View>

        <View className="flex flex-row justify-between mb-3">
          <View></View>
          <Link href={`/orders/${order.id}`}>
            <Text className="font-bold text-secondary">Ver más...</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};
