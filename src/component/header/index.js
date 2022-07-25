import { Text, SafeAreaView, Appearance, TextInput, TouchableOpacity, StyleSheet, Platform, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect, useDispatch } from 'react-redux'
import { getSearch, searchControl, apiData } from '../../api/redux/actions'

 const theme = Appearance.getColorScheme()

 function Header (props) {

     const [search, setSearch] = useState(false)
     const dispatch = useDispatch()

          return(
             <SafeAreaView
                style={style.header}>   
                  {search
                  ? <View style={style.search}>
                    <TextInput
                       hitSlop={{right:180, left:20, top:10, bottom:10}}
                       maxLength={50}
                       style={{padding:10, marginLeft:10}}
                       placeholder="Search"
                       placeholderTextColor="grey"
                       onChangeText={(text) => {text.length > 2 ? dispatch(getSearch({text:text})) : null}}
                    />
                    <TouchableOpacity 
                     hitSlop={{right:10, left:40, top:10, bottom:10}}
                     onPress={() => {
                          dispatch(searchControl({a:false}))
                          setSearch(false)
                     }}>
                      <Icon style={{marginRight:15}} name={"close"} size={15} color={"grey"}/>
                    </TouchableOpacity>
                    </View> 
                  : <View style={style.search}>
                    <Text 
                      style={style.headerText}>
                      UPayment Store
                    </Text> 
                    <TouchableOpacity 
                         hitSlop={{right:10, left:40, top:10, bottom:10}}
                         onPress={() => {setSearch(true), dispatch(searchControl(false))}}
                         style={{marginRight:15}}>
                      <Icon name={"search"} size={20}/>
                    </TouchableOpacity> 
                    </View> 
                  } 
              </SafeAreaView>
          )     
      }
const style = StyleSheet.create({

     header:{
          padding:5,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
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
          marginLeft:20,
          margin:10,
          fontWeight:"900",
          fontStyle:"italic",
          color:"black",
          fontSize:15
     },
     search:{
          flex:1,
          borderBottomWidth:0.2,
          borderColor:"#bebebe",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
     }
})

const mapStateToProps = state => {

     return {
        search: state?.search,
        sc: state?.sc
     }
   
   }
   export default connect(mapStateToProps, { getSearch, searchControl, apiData  })(Header);
   