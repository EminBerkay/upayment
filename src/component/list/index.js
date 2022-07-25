import { Text, FlatList, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{Fragment, useState, useCallback} from 'react'
import ListItem from './listitem'
import { useFocusEffect } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux'
import { apiData, categoryChange } from '../../api/redux/actions'


const index = (props) => {
  
     const dispatch = useDispatch()
     const [refreshing, setRefreshing] = useState(false)
     const [loading, setLoading] = useState(false)
     const [loadCount, setLoadCount] = useState(8)


     useFocusEffect(
      useCallback(() => {
        props.apiData()
        dispatch(categoryChange({a:0}))
      },[]))
     

     const wait = (timeout) => {
          return new Promise(resolve => setTimeout(resolve, timeout));
     }
      
     const onRefresh = useCallback(() => {
         try {
          setRefreshing(true);
          props.apiData()
          wait(1000).then(() => {setRefreshing(false)})
         } catch (error) {
             
         }
     }, [])

     const footer = () => {
        return(
          <TouchableOpacity
            onPress={() => {setLoading(true), setTimeout(() => {setLoadCount(loadCount+8), setLoading(false)},1000)}} 
            style={{alignSelf:"center", margin:20, marginBottom:100}}>
             {
               loading 
               ? <ActivityIndicator size={"small"} color={"grey"}/>
               : <Text style={{color:"grey", fontWeight:"600"}}>Load more....</Text>
             }
          </TouchableOpacity>
        )
     }


  return (
    <Fragment>
       <FlatList
            style={{alignSelf:"center", height:"100%"}}
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}  
              />
            }
            data={props?.sc
             ? props?.post?.slice(0,loadCount).filter((a) => props?.category?.a == 0 ? (a.productCategory, "in", [0,1,2,3,4,5]) : (a.productCategory == props?.category?.a)).map((a) => a)
             : props?.search
             }
     
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={(footer())}
            renderItem={({ item, index }) => <ListItem post={item} index={index}/>}>
          </FlatList>
     </Fragment>
 
  )
}

const mapStateToProps = state => {

  return {
      post: state?.post,
      category: state?.category,
      search: state?.search,
      sc: state?.sc
  }
}
export default connect(mapStateToProps, { apiData, categoryChange })(index);
 