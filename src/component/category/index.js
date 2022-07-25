import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { connect, useDispatch } from 'react-redux'
import { categoryChange } from '../../api/redux/actions'

 function Category(props) {

     const dispatch = useDispatch()
     const category = props?.category?.a

     return (
            <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10,
                     marginBottom:15, paddingLeft:8}}
                    horizontal={true}>
                    <View style={{flexDirection:"row", 
                    shadowColor:"#bebebe",
                    shadowOpacity:1, shadowRadius:3,
                    shadowOffset:{width:1, height:1}}}>
                   <TouchableOpacity
                      onPress={() => dispatch(categoryChange({a:0}))}
                      style={category == 0 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 0 ? "black" : "white"}}>
                      All</Text></TouchableOpacity>

                   <TouchableOpacity 
                     onPress={() => dispatch(categoryChange({a:1}))}
                    style={category == 1 ? styles.selectedCar : styles.itemType}>
                      <Text
                     style={{fontSize:13, fontWeight:"600", color:category == 1 ? "black" : "white"}}>
                     Accessories</Text></TouchableOpacity>

                   <TouchableOpacity 
                     onPress={() => dispatch(categoryChange({a:2}))}
                    style={category == 2 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 2 ? "black" : "white"}}>
                      Women-Clothings</Text></TouchableOpacity>

                   <TouchableOpacity 
                     onPress={() => dispatch(categoryChange({a:3}))}
                    style={category == 3 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 3 ? "black" : "white"}}>
                      Furnitures</Text></TouchableOpacity>

                    <TouchableOpacity 
                     onPress={() => dispatch(categoryChange({a:4}))}
                    style={category == 4 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 4 ? "black" : "white"}}>
                      Electronics</Text></TouchableOpacity>
                      <TouchableOpacity 
                     onPress={() => dispatch(categoryChange({a:5}))}
                    style={category == 5 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 5 ? "black" : "white"}}>
                      Food</Text></TouchableOpacity>
                  </View>
                    
           </ScrollView>
    );
}


const styles = StyleSheet.create({
 

     itemType: {
       borderRadius:7,
       borderWidth:0.3,
       borderColor:"#bebebe",
       padding:Platform.OS == "android" ? 4 : 7,
       backgroundColor:"black",
       marginRight:7
     },
   
     selectedCar: {
       borderRadius:7,
       borderWidth:2,
       borderColor:"black",
       padding:Platform.OS == "android" ? 4 : 7,
       backgroundColor:"white",
       marginRight:7
     },
   
   
     selectedCord: {
       borderRadius:7,
       borderWidth:0.4,
       borderColor:"#0093f3",
       padding:6,
       backgroundColor:"#0093f3",
       marginRight:7
     }
    
})
const mapStateToProps = state => {

     return {
        category: state?.category
     }
   
   }
export default connect(mapStateToProps, { categoryChange  })(Category);
   
