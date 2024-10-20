import { Stack } from "expo-router";
import { LoadingScreen, Screen } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { View, Pressable, Text, Image, ActivityIndicator } from "react-native";
import { signInWithGoogle } from "../../store";
import { styled } from "nativewind";
import { useFonts } from "expo-font";

const DulceBiteIcon = require("../../assets/icon.png")
const GoogleIcon = require("../../assets/img/google_icon.png")
const StyledPressable = styled(Pressable)

export const Auth = () => {

    const insets = useSafeAreaInsets();
    const { isAuthenticating, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [fontsLoaded] = useFonts({
        "Inria-Bold": require("../../assets/fonts/InriaSerif-Bold.ttf"),
    })

    const onGoogleSignIn = () => {
        dispatch(signInWithGoogle());
    }

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

  return (
    <>
            <Screen style={{
                paddingTop: insets.top,
            }}>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                />

                <View className="w-full h-full flex flex-col justify-center items-center gap-5">

                    <Text style={{ fontFamily: "Inria-Bold" }} className="text-5xl text-secondary">Bienvenido</Text>

                    <View className="bg-white rounded-full">
                        <Image source={DulceBiteIcon} style={{ width: 250, height: 250 }} />
                    </View>

                    <StyledPressable className="flex flex-row items-center p-4 bg-secondary rounded-lg active:opacity-80" onPress={onGoogleSignIn}>
                        <Image source={GoogleIcon} style={{ width: 30, height: 30 }} />
                        <View className="w-4" />
                        <Text className="text-white text-base font-bold">Continuar con Google</Text>
                    </StyledPressable>

                    {
                        errorMessage && (
                            <Text className="text-red-500">{errorMessage}</Text>
                        )
                    }
                </View>
            </Screen>
            {
                isAuthenticating && (<LoadingScreen />)
            }
        </>
  )
}
