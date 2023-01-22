import { View } from "react-native";
import Logo from '../assets/logo.svg'
// import icones
import {Feather} from '@expo/vector-icons'

export function Header() {
  return (
      <View className="w-full flex-row item-center justify-between">
        {/* <Logo/> */}
      
      <Feather
      //icone 
       name='plus' color='white' size={20}/>
      </View>
  );
}