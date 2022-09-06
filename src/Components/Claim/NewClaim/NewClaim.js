import { Fragment, useEffect, useReducer, useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addNewClaim, updateClaim } from '../../../data/DataFunctions';
import './NewClaim.css';

const RegisterClaim = () => {

  // const emptyClaim = { type: "", date : new Date().toISOString().slice(0,10), 
  //                     policyNumber: "", surname: ""};

  const emptyClaim = { type: "new",  claimStartDate : "", policyNumber: "", surname: "" };

  const newClaimReducer = (existingState, data) => {
    return {...existingState, [data.field] : data.value}
  }
    
  const params = useParams();
  const claimToEditClaimId = params.claimId;

  const [pageChanged, setPageChanged] = useState(params.claimId);

  useEffect( () => {
    setPageChanged(params.claimId)}, [params.claimId]);

  const editMode = claimToEditClaimId != null;
  const claimToEdit = useSelector(state => state.claimToEdit);

  const [newClaim, dispatch] = useReducer(newClaimReducer, 
                                          editMode ? claimToEdit : emptyClaim );
                                            
  const [selectedTypeRadio, setSelectedTypeRadio] = useState("");
                                          
  const handleChange = (event) => {
    setSelectedTypeRadio(event.target.value);
    console.log(">>>>>>>>>>>>>>>>>> selectedTypeRadio:  "  + selectedTypeRadio);
    const dataToChange = { field: event.target.id, value: event.target.value };
    dispatch(dataToChange); 
  }

  const {claimId, policyNumber, surname, type, claimStartDate} = newClaim;

  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  // const [claimType, setClaimType] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(newClaim);
    setSaving(true);
    setMessage("please wait - saving")
    
    let response;

    if (editMode) {
      let data = {};

      if (policyNumber !== claimToEdit.policyNumber) {
        data = {...data, policyNumber : policyNumber};
      };
      if (surname !== claimToEdit.surname) {
        data = {...data, surname : surname};
      };

      response = updateClaim(params.claimId, data);
    } 
    else {
      response = addNewClaim(newClaim);
      console.log("------------");
      console.log(newClaim.type);
      console.log("<<<<<<<<<<<<");
    }

    response.then(result => { 
      if (result.status === 200) {
        // navigate("/find/" + result.data.claimId);
        navigate("/findAClaim/" + result.data.surname);
        // navigate("/newClaim/");
      }
      else {
        setMessage("something went wrong ", result.statusText)
      }
      setSaving(false);
    })
      .catch(error => {
        setMessage("something went wrong ", error);
        setSaving(false);
      })
  }

  return <Fragment>

    <div className="newClaim-form">

      <form onSubmit={submitForm}>
        {/* <h2>Register new claim</h2> */}
        
        <h2>{editMode ? "Edit" : "Register new"} claim</h2>

        <div  className="radio-container">        
          <label>Claim type</label>

          <input onChange={handleChange} checked={type === "property"}
          id="type" value="property" name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} checked={type === "motor"}
          id="type" value="motor" name="type" type="radio" />          
          <label className="radio-label" htmlFor="motor">Motor</label>

          <input onChange={handleChange}  checked={type === "pet"}
          id="type" value="pet" name="type" type="radio"/>
          <label className="radio-label" htmlFor="pet">Pet</label>

        </div>

        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />

        <label htmlFor="name">Name</label>
        <input onChange={handleChange} id="name" value={newClaim.name} type="text" />

        <label htmlFor="surname">Surname</label>
        <input onChange={handleChange} id="surname" value={newClaim.surname} type="text" />

        <label htmlFor="claimStartDate">Claim Start Date</label>
        <input onChange={handleChange} id="claimStartDate" value={newClaim.claimStartDate} type="date" /> 

        <label htmlFor="amount">Amount</label>
        <input onChange={handleChange} id="amount" value={newClaim.amount} type="text" /> 

        <label htmlFor="claimReason">Claim Reason</label>
        <input onChange={handleChange} id="claimReason" value={newClaim.claimReason} type="text" /> 

        <label htmlFor="description">Description</label>
        <input onChange={handleChange} id="description" value={newClaim.description} type="text" /> 

        {selectedTypeRadio === "property" && (
          <>
          <label htmlFor="address">Address</label>
          <input onChange={handleChange} id="address" value={newClaim.address} type="text" /> 
          </>
        )}

        {selectedTypeRadio === "motor" && (
          <>
          <label htmlFor="motorMake">Make</label>
          <input onChange={handleChange} id="motorMake" value={newClaim.motorMake} type="text" /> 

          <label htmlFor="motorModel">Model</label>
          <input onChange={handleChange} id="motorModel" value={newClaim.motorModel} type="text" /> 

          <label htmlFor="motorYom">YOM</label>
          <input onChange={handleChange} id="motorYom" value={newClaim.motorYom} type="text" /> 
          </>
        )}

        {selectedTypeRadio === "pet" && (
          <>
          <label htmlFor="petType">Pet Type</label>
          <input onChange={handleChange} id="petType" value={newClaim.petType} type="text" /> 

          <label htmlFor="petBreed">Pet Breed</label>
          <input onChange={handleChange} id="petBreed" value={newClaim.petBreed} type="text" /> 
          </>
        )}


        <button disabled={saving} className="registerclaim_button" type="submit">Save</button>
        <p>{message}</p>


        {/* style={{editMode: visible ? "block" : "none"}} */}
        {/* <label htmlFor="status" style={{display: editMode ? "block" : "none"}} >Status</label>
        <input onChange={handleChange} id="status" value={newClaim.status} type="text" style={{display: editMode ? "block" : "none"}} /> */}


        {/* {editMode === false && (<label htmlFor="status">Status</label> && <input onChange={handleChange} id="status" value={newClaim.status} type="text" />) */}
       

{/* 
        {selectedTypeRadio === "auto" && (
          <>
          <label htmlFor="status">Status</label>
          <input onChange={handleChange} id="status" value={newClaim.status} type="text" /> 
          </>
        )} */}

      {/* <div aria-hidden={ selectedTypeRadio !== "auto" }>
        <>
        <label htmlFor="status">Status</label>
        <input onChange={handleChange} id="status" value={newClaim.status} type="text" />
        </>
      </div> */}

{/* selectedTypeRadio */}


  
      </form>
    </div> 

  </Fragment>

};

export default RegisterClaim;
