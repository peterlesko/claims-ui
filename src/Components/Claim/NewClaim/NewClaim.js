import { Fragment, useEffect, useReducer, useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addNewClaim, updateClaim } from '../../../data/DataFunctions';
import './NewClaim.css';

const RegisterClaim = () => {

  const emptyClaim = { type: "", policyNumber: "", surname: "" }

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
                                            
  const handleChange = (event) => {
    const dataToChange = { field: event.target.id, value: event.target.value };
    dispatch(dataToChange); 
  }

  const {claimId, policyNumber, surname, type} = newClaim;

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

          <input  onChange={handleChange} id="property" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} id="auto" value={newClaim.type} name="type" type="radio" />          
          <label className="radio-label" htmlFor="auto">Auto</label>

          <input onChange={handleChange} id="pet" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="pet">Pet</label>

        </div>

        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />

        <label htmlFor="surname">Surname</label>
        <input onChange={handleChange} id="surname" value={newClaim.surname} type="text" />

        <button disabled={saving} className="registerclaim_button" type="submit">Save</button>
        <p>{message}</p>
  
      </form>
    </div> 

  </Fragment>

};

export default RegisterClaim;
