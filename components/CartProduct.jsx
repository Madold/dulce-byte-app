import { View, Image, Text, Pressable } from "react-native"
import { styled } from "nativewind"

const StyledPressable = styled(Pressable)

export const CartProduct = ({ product, onIncrement, onDecrement }) => {
  return (
    <View className="flex flex-row bg-primaryVariant p-3 rounded-lg">
        <Image className="rounded-md" source={{ uri: product.cookie.cookieCoverUrl }} style={{ width: 100, height: 100 }} />
        <View className="flex-1 ml-2">
            <Text className="text-white font-bold text-xl">{ product.cookie.name }</Text>
            <Text className="text-white">{ product.cookie.description }</Text>

            <View className="flex flex-row items-center w-full justify-evenly mt-3">
                <StyledPressable className="bg-primary px-3 rounded-lg" onPress={() => onDecrement(product)}>
                    <Text className="text-black text-xl font-bold">-</Text>
                </StyledPressable>
                <Text className="text-white">{ product.quantity }</Text>
                <StyledPressable className="bg-primary px-3 rounded-lg" onPress={() => onIncrement(product)}>
                    <Text className="text-black text-xl font-bold">+</Text>
                </StyledPressable>
            </View>
        </View>
    </View>
  )
}
