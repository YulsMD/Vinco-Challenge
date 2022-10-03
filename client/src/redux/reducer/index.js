const initialState = {
  champs: [],
  allChamps: [],
  details: [],
  tags: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Getting all the champions from the database and setting the state. */
    case "GET_ALL_CHAMPS":
      return {
        ...state,
        champs: action.payload,
        allChamps: action.payload,
        tags: [
          "All",
          ...new Set(
            Object.values(action.payload)
              .map((el) => el.tags)
              .flat(1)
          ),
        ],
      };

    /* Filtering the champions based on the tags. */
    case "FILTER_CHAMPS":
      const champs = state.allChamps;
      if (action.payload === "All"){
        return {
          ...state,
          champs: champs,
        };}else if(action.payload === 'Editable'){
          let filtered = champs.filter((e) => e.createdByMe=== true)
          return {
            ...state,
            champs: filtered,
          };
        } else{
          let filtered = champs.filter((e) => e.tags.includes(action.payload));
          return {
            ...state,
            champs: filtered,
          };
        }
      
      
    /* Getting the details of the champion. */
    case 'GET_CHAMP_DETAILS':
      console.log(action.payload, 'action')
      return{
        ...state,
        details: action.payload
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
