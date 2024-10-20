import { View } from "react-native"
import { ActivityIndicator } from "react-native"

export const LoadingScreen = () => {
  return (
    <View className="w-full h-full flex justify-center items-center bg-gray-800 opacity-90 absolute">
        <ActivityIndicator size={50} color="#98154E" />
    </View>
  )
}
