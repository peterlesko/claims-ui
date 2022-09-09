import {configureStore } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';  

const initialState = {surname : [], lastFetch : null, userName : "Matt",
                      claims : [],
                      claimToEdit : {
                      claimId: "",
                      type: "", status: "",  policyNumber: "",
                      name: "", surname: "",
                      claimStartDate : new Date().toISOString().slice(0,10),
                      claimReason: "", description: "",
                      estAmount: "", claimPayOut: "",
                      address: "",
                      motorMake: "", motorModel: "", motorYom: "",
                      petType: "", petBreed: ""}};


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
  else if (action.type === "set-claim-to-edit") {
    return {...state, claimToEdit : action.value}
  }
  else {
    console.log("unknown redux action" + action.type);
    return state;
  }
}; 

const claimsStore = configureStore({reducer : claimsReducer});
 
export default claimsStore;       
  