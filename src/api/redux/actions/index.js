import firebase from 'firebase'

export const apiData = (a) => dispatch => {

    try {

     firebase.firestore()
          .collection("posts")
          .orderBy("creation", "desc")
          .get()
          .then((snapshot) => {
              let post = snapshot.docs.map(doc => {
                  const data = doc.data()
                  return data
              })
              dispatch({type: 'GET_DATA', payload: post})
            
          })
         
    } catch (error) {
         
    }
            
}

export const categoryChange = (a) => dispatch => {

     try {
          dispatch({type: 'GET_CATEGORY', payload:a})
     } catch (error) {
          
     }
    
}

export const getSearch = ({text}) => dispatch => {
  
     const inputStart = text.trim();
     let lastLetterCode = inputStart.charCodeAt(inputStart.length-1);
     lastLetterCode++;
     const newLastLetter = String.fromCharCode(lastLetterCode);
     const inputEnd = text.slice(0,inputStart.length-1) + newLastLetter;
   
    
     firebase.firestore()
       .collection("posts")
       .where('title', '>=', inputStart)
       .where('title', '<=', inputEnd)
       .get()
       .then((snapshot) => {
         let post = snapshot.docs.map(doc => {
             let data = doc.data()
             return {...data}
         })
         dispatch({type: 'GET_SEARCH', payload: post})
       })
       .catch((error) => {console.log(error)})
     
 
 
 
}

export const searchControl = (a) => dispatch => {

     try {
          dispatch({type: 'GET_SC', payload:a})
     } catch (error) {
          
     }
    
}

