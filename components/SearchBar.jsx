import { TextInput, View, Pressable } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { styled } from "nativewind"

const StyledPressable = styled(Pressable)

export const SearchBar = ({value, onQueryChange, onSearch, style = {}}) => {
  return (
    <View style={style} className="bg-white flex flex-row items-center rounded-xl w-full">
        <TextInput
            className="py-3 pl-2 flex-1"
            placeholder="Buscar"
            value={value}
            onChangeText={onQueryChange}
         />
        <StyledPressable onPress={onSearch(value)} className="bg-secondary h-full px-3 flex flex-row items-center rounded-xl">
            <Feather name="search" size={24} color="white" />
        </StyledPressable>
    </View>
  )
}
