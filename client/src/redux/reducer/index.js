const initialState = {
    champs: [],
    allChamps: [],
    details: []
}

const rootReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'GET_ALL_CHAMPS':
      return {
        ...state,
        champs: action.payload,
        allChamps: action.payload
      }
    default: return {...state}
  }
}

export default rootReducer