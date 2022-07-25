import { View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

export default function addButton(props) {

  const navigation = useNavigation()

  return (
    <View style={{position:"absolute", padding:20, alignSelf:"flex-end", top:Platform.OS == "android" ? "65%" : "75%", flex:1}}>
      <TouchableOpacity 
       onPress={() => navigation.navigate("AddProduct")}
       style={{ backgroundColor:"black", borderRadius:30}}>
       <Icon size={55} name={"add-circle"} color={"white"}></Icon>
     </TouchableOpacity>
    </View>
  )
}