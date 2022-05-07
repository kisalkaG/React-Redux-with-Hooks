const initialState = {account :0,receiveeAccountBalance:0}

const reducer = (state = initialState , action) => {
  switch (action.type) {
      case "deposit":        
          return {
            ...state,
            account : state.account + action.payload
          }
      case "withdraw":
          return {
            ...state,
             account : state.account - action.payload
          }
      case "transfer":      
           return {
            ...state,
            account: state.account - action.payload,
            receiveeAccountBalance: state.receiveeAccountBalance + action.payload
        }          
          default:
               return state    
  }
  
};

export default reducer;