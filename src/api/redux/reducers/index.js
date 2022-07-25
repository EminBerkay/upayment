const INITIAL_STATE = {
     post:[],
     category:0,
     search:[],
     sc:true
}

export const reducer = (state = INITIAL_STATE, action) => {


     switch (action.type) {
          case "GET_DATA":
               return { ...state, post: action.payload}
               
          case "GET_CATEGORY":
               return { ...state, category: action.payload}
              
          case "GET_SEARCH":
                    return { ...state, search: action.payload}
           
          case "GET_SC":
                    return { ...state, sc: action.payload}
               
               
          default:
               break;
     }
}