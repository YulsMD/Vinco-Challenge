const initialState = {
  champs: [],
  allChamps: [],
  details: [],
  tags: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case "FILTER_CHAMPS":
      const champs = state.allChamps;
      if (action.payload === "All")
        return {
          ...state,
          champs: champs,
        };
      const filtered = champs.filter((e) => e.tags.includes(action.payload));
      return {
        ...state,
        champs: filtered,
      };
      
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
