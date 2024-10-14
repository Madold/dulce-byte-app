import { View } from "react-native"

export const Screen = ({ style, children }) => {
  return (
    <View style={style} className="bg-primary px-4 w-full h-screen">
        { children }
    </View>
  )
}
