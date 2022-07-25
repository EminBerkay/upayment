import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView, Dimensions } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'



 const listitem = ({post}) => {

   const [information, setInformation] = useState(false)
     
  return (
          <TouchableOpacity 
            onPress={() => setInformation(true)}
            style={{shadowColor:"#dedede", shadowOffset:{width:0, height:3}, shadowOpacity:5, shadowRadius:5, borderRadius:10, backgroundColor:"#e4e4e4", padding:1, margin:10}}>
           <View style={{ flexDirection:"column", alignContent:"center", alignSelf:"flex-start"}}>
            <Image style={{borderRadius:8, width:150, height:140 }} source={{uri:post?.uri}}/>
           </View>
           <View style={{flex:1,borderRadius:7, backgroundColor:"black"}}>
              <View style={{margin:2}}>
                 <Text style={{color:"white", margin:3, fontWeight:"600"}}>{post?.title}</Text>
                 <View style={{flexDirection:"row", justifyContent:"space-between", alignContent:"space-around"}}>
               <Text style={{color:"white", margin:3, fontWeight:"600"}}>${post?.balance}</Text>
               <Icon style={{marginRight:3}} name={"edit"} size={20} color={"yellow"}/>
              </View>
              </View>
              
           </View>
           {information
                ? <Modal
                    animationType="fade"
                    visible={information}
                    onRequestClose={() => setInformation(false)}
                    presentationStyle={"formSheet"}
                    statusBarTranslucent>
                      <TouchableOpacity
                       style={{padding:20,paddingTop:30}}
                        onPress={() => {
                         setInformation(false)
                          }}>
                          <Icon style={{alignSelf:"flex-end"}} size={30} name="close"/>
                        </TouchableOpacity>
                          <ScrollView style={{alignSelf:"center", width:Dimensions.get("screen").width}}>
                          <View style={{ flexDirection:"column", alignContent:"center", alignSelf:"flex-start"}}>
                              <Image style={{ width:Dimensions.get("screen").width, height:180 }} source={{uri:post?.uri}}/>
                             </View>
                           <View style={style.descriptionContainer}>
                             <View style={{flexDirection:"row", margin:15, justifyContent:"space-between"}}>
                               <Text style={{color:"white", fontWeight:"500", fontSize:18}}>
                                    {post?.title}
                                 </Text>
                                 <Text style={{color:"white", fontWeight:"700", fontSize:20}}>
                                    $ {post?.balance}
                                 </Text>
                             </View>
                               <Text style={{textAlign:"justify", color:"white"}}>
                                   {post?.description}
                               </Text>
                           </View>
                          </ScrollView>
                  </Modal>
                : null
                } 
          </TouchableOpacity>
  )
}

const style = StyleSheet.create({
     descriptionContainer:{
      shadowColor:"grey",
      shadowOffset:{width:0, height:3},
      shadowOpacity:5,
      shadowRadius:10,
      margin:15,
      padding:15, borderRadius:10,
      backgroundColor:"black"
     }
})

export default listitem