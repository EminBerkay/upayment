import { View, Text, SafeAreaView, Appearance, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

 const theme = Appearance.getColorScheme()

 export default function Header(props) {

        const navigation = useNavigation()
          return(
             <SafeAreaView
                style={style.header}>   
              <TouchableOpacity
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                style={{padding:15, paddingLeft:25}}
                onPress={() => navigation.goBack()}>
               <View 
                  style={style.headerItem}>
                   <View >
                   <Icon size={16} name={"arrow-back"}/>
                   </View>
               </View>
              </TouchableOpacity>
                   <Text 
                      style={style.headerText}>
                      Add Product
                    </Text> 
              </SafeAreaView>
          )     
      }
const style = StyleSheet.create({

     header:{
          flexDirection:"row",
          borderBottomColor:(theme == "dark" ? "#2a2a2a" : "#dedede"),
          borderBottomWidth:0.18,
          shadowColor:"#dddddd",
          shadowRadius:3,
          shadowOpacity:0.2,
          shadowOffset:{height:5},
          backgroundColor:(theme == "dark" ? "black" : "white")

     },
     headerItem:{
          padding:10, 
          paddingHorizontal:10, 
          borderRadius:8, 
          borderWidth:Platform.OS == "android" ? 0.3 : 0.19, 
          borderColor:"#e5e5e5", 
          shadowOpacity:1.8, 
          backgroundColor:"white", 
          shadowColor:"#e5e5e5", 
          shadowRadius:2, 
          shadowOffset:{width:0, height:2}
     },
     headerText:{
          alignSelf:"center",
          marginLeft:15,
          color:"grey",
          fontSize:15
     }
})

