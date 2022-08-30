// import { createStore, configureStore } from "redux";
import {configureStore } from '@reduxjs/toolkit';

const initialState = {surname : [], lastFetch : null, userName : "Matt", claims: []}

const claimsReducer = (state = initialState, action) => {

  if (action.type === "clear-down") {
    return initialState;
  }
  else if (action.type === "refresh=claims") {
    return {...state, claims : action.value, lastFetch : new Date()}
  }
  else if (action.type === "update-username") {
    return {...state, userName : action.value}
  }
  else if (action.type === "save-claims") {
    return { ...state, claims: action.value, lastFetch: new Date().getTime()}
  }
  // else if (action.type === "save-claims") {
  //   return { ...state, claims: action.value, lastFetch: new Date().getTime()}
  // }
  else {
    console.log("unknown redux action" + action.type);
    return state;
  }
}; 

// const store = createStore(claimsReducer);
const claimsStore = configureStore({reducer : claimsReducer});
 
export default claimsStore;       
  