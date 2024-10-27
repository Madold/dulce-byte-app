import { Image, Text, View, Pressable } from "react-native"
import { styled } from "nativewind"

const StyledPressable = styled(Pressable)

export const CookieCard = ({ cookie, onAddToCart }) => {
  return (
    <View style={{
      backgroundColor: cookie.enphasisColor,
    }} className="h-[40vh] flex flex-row relative w-[90vw] items-end mr-2 rounded-xl overflow-hidden">
        <Image className="absolute left-[-98px] -top-2" source={{ uri: cookie.cookieCoverUrl }} style={{ width: 300, height: 300 }} />
        <View className="flex-1 h-full" />
        <View className="flex-1 items-end justify-evenly p-4 h-full">
            <Text className="text-white text-3xl font-bold">{cookie.name}</Text>
            <Text className="text-white">{cookie.description}</Text>
            <StyledPressable className="bg-primary px-4 py-2 rounded-xl" onPress={onAddToCart}>
              <Text>
                Add to cart
              </Text>
            </StyledPressable>
        </View>
    </View>
  )
}