import Feather from "@expo/vector-icons/Feather";
import { Modal, Pressable, View, Text, Image } from "react-native";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export const ProfileModal = ({ user, visible, onClose, onLogout }) => {
  return (
    <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View className="w-screen h-screen flex items-center justify-center">
            <View className="bg-white p-3 m-4 flex items-center rounded-xl">
              <View className="flex flex-row justify-end w-full">
                <Pressable onPress={onClose}>
                  <Feather name="x" size={24} color="black" />
                </Pressable>
              </View>
              <Text className="text-center font-bold text-xl">
                Has iniciado sesión como
              </Text>
              <View className="mt-4" />
              <Image
                source={{ uri: user.photoURL }}
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
              <Text className="text-center mt-4 text-lg">
                {user.displayName}
              </Text>
              <Text className="text-center text-sm text-gray-500">
                {user.email}
              </Text>
              <View className="mt-4" />
              <StyledPressable
                onPress={onLogout}
                className="bg-secondary p-3 rounded-lg"
              >
                <Text className="text-primary ">Cerrar sesión</Text>
              </StyledPressable>
            </View>
          </View>
        </Modal>
  )
}
