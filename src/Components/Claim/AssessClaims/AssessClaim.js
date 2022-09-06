import { Fragment, useEffect, useReducer, useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addNewClaim, updateClaim } from '../../../data/DataFunctions';
import './NewClaim.css';

const AssessClaim = () => {


  // const submitForm = (e) => {
  //   e.preventDefault();
  //   console.log(newClaim);
  //   setSaving(true);
  //   setMessage("please wait - saving")
    
  //   let response;

  //   if (editMode) {
  //     let data = {};

  //     if (policyNumber !== claimToEdit.policyNumber) {
  //       data = {...data, policyNumber : policyNumber};
  //     };
  //     if (surname !== claimToEdit.surname) {
  //       data = {...data, surname : surname};
  //     };

  //     response = updateClaim(params.claimId, data);
  //   } 
  //   else {
  //     response = addNewClaim(newClaim);
  //     console.log("------------");
  //     console.log(newClaim.type);
  //     console.log("<<<<<<<<<<<<");
  //   }

  //   response.then(result => { 
  //     if (result.status === 200) {
  //       // navigate("/find/" + result.data.claimId);
  //       navigate("/findAClaim/" + result.data.surname);
  //       // navigate("/newClaim/");
  //     }
  //     else {
  //       setMessage("something went wrong ", result.statusText)
  //     }
  //     setSaving(false);
  //   })
  //     .catch(error => {
  //       setMessage("something went wrong ", error);
  //       setSaving(false);
  //     })
  // }

  return <Fragment>

    <div className="newClaim-form">

      {/* <form onSubmit={submitForm}> */}
        <h2>Assess claim</h2>
        
        {/* <h2>{editMode ? "Edit" : "Register new"} claim</h2> */}

{/* 
        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />

        <label htmlFor="surname">Surname</label>
        <input onChange={handleChange} id="surname" value={newClaim.surname} type="text" /> */}

        {/* style={{editMode: visible ? "block" : "none"}} */}
        {/* <label htmlFor="status" style={{display: editMode ? "block" : "none"}} >Status</label>
        <input onChange={handleChange} id="status" value={newClaim.status} type="text" style={{display: editMode ? "block" : "none"}} /> */}

        {/* <button disabled={saving} className="registerclaim_button" type="submit">Save</button>
        <p>{message}</p> */}
  
      {/* </form> */}
    </div> 

  </Fragment>
  
  
  // (
  //   <div className="assessClaim">
  //     <p>Assess Claim Page</p>
  //   </div>
  // )






};

export default AssessClaim;