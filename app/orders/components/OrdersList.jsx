import { FlatList } from "react-native"
import { OrderItem } from "./OrderItem"

export const OrdersList = ({ orders }) => {
  return (
    <FlatList
        className="mt-5" 
        data={orders}
        keyExtractor={(order) => order.id}
        renderItem={({item}) => (
            <OrderItem order={item} />
        )}
    />
  )
}
