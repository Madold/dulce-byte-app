import { Modal, Pressable, View, Text, Image, TextInput } from "react-native";
import { styled } from "nativewind";
import { useState } from "react";

const StyledPressable = styled(Pressable);

const formResult = {
    address: "",
    phone: "",
}

export const DeliveryModal = ({ visible, onClose, onSubmit }) => {
  const [formState, setformState] = useState({
    address: "",
    phone: "",
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="w-screen h-screen flex items-center justify-center bg-[#232222c7]">
        <View className="bg-white p-3 m-4 flex items-center rounded-xl w-[70%]">
          <Text className="text-center font-bold text-xl">
            Información de entrega
          </Text>
          <TextInput
            className="w-full border-gray-700 rounded-md border-[1.5px] mt-3 p-2"
            placeholder="Dirección de entrega"
            value={formState.address}
            onChangeText={(text) =>
              setformState({ ...formState, address: text })
            }
          />

          <TextInput
            className="w-full border-gray-700 rounded-md border-[1.5px] mt-3 p-2"
            keyboardType="number-pad"
            placeholder="Teléfono"
            value={formState.phone}
            onChangeText={(text) => setformState({ ...formState, phone: text })}
          />

          <View className="flex flex-row gap-2 justify-between w-full mt-4">
            <StyledPressable
              onPress={onClose}
              className="bg-primary p-3 rounded-lg"
            >
              <Text className="text-secondary text-center">Cancelar</Text>
            </StyledPressable>
            <StyledPressable
              onPress={() => onSubmit(formState)}
              className="bg-secondary p-3 rounded-lg"
            >
              <Text className="text-primary text-center">Aceptar</Text>
            </StyledPressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
