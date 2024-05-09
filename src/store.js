import { createStore } from "redux";

const initialState = {
  user: null,
  isLogined:false
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload,isLogined:true };
    default:
      return state;
  }
};


const store=createStore(userLoginReducer);

export default store;
