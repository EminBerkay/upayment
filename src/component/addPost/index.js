import React,{ useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header from './header'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { apiData } from '../../api/redux/actions'
import firebase from 'firebase'

 function AddProduct() {

  const [process, setProcess] = useState(false)
  const [category, setCategory] = useState(1)
  const [disable, setDisable] = useState(true)
  const [title, setTitle] = useState(null)
  const [price, setPrice] = useState(null)
  const [desc, setDesc] = useState(null)
  const [imageLink, setImageLink] = useState(null)
  const navigation = useNavigation()
  let id = (Math.random().toString(9).substr(6, 5))

  useEffect(() => {
    
  
    if(title != null && price != null && desc != null && imageLink != null){
        
       setDisable(false)
      } else {
        setDisable(true)
      }
    
  }, [title, price, desc, imageLink])


  async function writeProduct(){

    setProcess(true),
    setDisable(true)
 
    await firebase.firestore()
          .collection('posts')
          .add({ 
            title:title,
            productCategory:category,
            balance:price,
            description:desc,
            id:id,
            uri:imageLink,
            creation:firebase.firestore.FieldValue.serverTimestamp()
            },{merge:true}).then(() => {
              setTimeout(() => {
                setProcess(false),
                setDisable(false),
                navigation.goBack()
              }, 1500)
            })    
   }


  return (
    <View style={{flex:1}}>
     <Header/>
    <ScrollView
    showsVerticalScrollIndicator={false}
     style={{margin:20}}>
      <View style={{backgroundColor:"white", padding:10, borderWidth:0.5, borderRadius:10, borderColor:"grey"}}>
      <TextInput
        hitSlop={{right:80, left:10, top:5, bottom:5}}
        maxLength={180}
        placeholder="Product title"
        placeholderTextColor="grey"
        onChangeText={(a) => setTitle(a)}
      />
      </View>
      <View style={{backgroundColor:"white", padding:10, borderWidth:0.5, marginTop:20, borderRadius:10, borderColor:"grey"}}>
      <TextInput
        hitSlop={{right:80, left:10, top:5, bottom:5}}
        maxLength={180}
        placeholder="Price"
        keyboardType="number-pad"
        placeholderTextColor="grey"
        onChangeText={(a) => setPrice(a)}
      />
      </View>
      <View style={{backgroundColor:"white", padding:10,height:100, marginTop:20, borderWidth:0.5, borderRadius:10, borderColor:"grey"}}>
      <TextInput
        hitSlop={{right:80, left:10, top:5, bottom:60}}
        maxLength={500}
        multiline={true}
        placeholder="Description"
        placeholderTextColor="grey"
        onChangeText={(a) => setDesc(a)}
      />
      </View>
      <View style={{backgroundColor:"white", padding:10, borderWidth:0.5, marginTop:20, borderRadius:10, borderColor:"grey"}}>
      <TextInput
        hitSlop={{right:80, left:10, top:5, bottom:5}}
        maxLength={180}
        placeholder="Image Link"
        placeholderTextColor="grey"
        onChangeText={(a) => setImageLink(a)}
      />
      </View>
      <View style={{margin:10, marginTop:15,}}>
      <Text>{"Selected Category:  "}
        { category == 1 ? "Accessories" 
        : category == 2 ? "Women-Clothings"
        : category == 3 ? "Furnitures"
        : category == 4 ? "Electronics"
        : category == 5 ? "Food"
        : "All"
        }
      </Text>
      </View>
            <ScrollView
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:5,
                     marginBottom:15}}
                    horizontal={true}>
                    <View style={{flexDirection:"row", 
                    shadowColor:"#bebebe",
                    shadowOpacity:1, shadowRadius:3,
                    shadowOffset:{width:1, height:1}}}>
                   <TouchableOpacity 
                    onPress={() => setCategory(1)}
                    style={category == 1 ? styles.selectedCar : styles.itemType}>
                      <Text
                     style={{fontSize:13, fontWeight:"600", color:category == 1 ? "black" : "white"}}>
                     Accessories</Text></TouchableOpacity>

                   <TouchableOpacity 
                    onPress={() => setCategory(2)}
                    style={category == 2 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 2 ? "black" : "white"}}>
                      Women-Clothings</Text></TouchableOpacity>

                   <TouchableOpacity 
                    onPress={() => setCategory(3)}
                    style={category == 3 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 3 ? "black" : "white"}}>
                      Furnitures</Text></TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => setCategory(4)}
                    style={category == 4 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 4 ? "black" : "white"}}>
                      Electronics</Text></TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => setCategory(5)}
                    style={category == 5 ? styles.selectedCar : styles.itemType}>
                      <Text
                      style={{fontSize:13, fontWeight:"600", color:category == 5 ? "black" : "white"}}>
                      Food</Text></TouchableOpacity>
                  </View>
                    
           </ScrollView>

           <TouchableOpacity 
            onPress={() => writeProduct()}
            disabled={disable}
            style={{padding:20, borderRadius:10, backgroundColor:disable ? "grey" : "black"}}>
                     {process
                      ? <ActivityIndicator size={18} color={"white"}/>
                      : <Text style={{color:"white", alignSelf:"center", fontWeight:"500"}}>Add Product</Text>
                      }
           </TouchableOpacity>
    </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
 

  itemType: {
    borderRadius:7,
    borderWidth:0.3,
    borderColor:"#bebebe",
    padding:7,
    backgroundColor:"black",
    marginRight:7
  },

  selectedCar: {
    borderRadius:7,
    borderWidth:2,
    borderColor:"black",
    padding:7,
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

     post: state?.post,
  }

}
export default connect(mapStateToProps, { apiData  })(AddProduct);
