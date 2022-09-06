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
                                            
  const [selectedTypeRadio, setSelectedTypeRadio] = useState("");
                                          
  const handleChange = (event) => {
    setSelectedTypeRadio(event.target.value);
    console.log(">>>>>>>>>>>>>>>>>> selectedTypeRadio:  "  + selectedTypeRadio);
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

          {/* {/* <input onChange={handleChange} checked={type === "property"} 
          id="property" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} checked={selectedTypeRadio === "auto"} 
          id="auto" value={newClaim.type} name="type" type="radio" />          
          <label className="radio-label" htmlFor="auto">Auto</label>

          <input onChange={handleChange}  checked={selectedTypeRadio === "pet"} 
          id="pet" value={newClaim.type} name="type" type="radio"/> */}


          <input onChange={handleChange} checked={type === "property"}
          id="type" value="property" name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} checked={type === "auto"}
          id="type" value="auto" name="type" type="radio" />          
          <label className="radio-label" htmlFor="auto">Auto</label>

          <input onChange={handleChange}  checked={type === "pet"}
          id="type" value="pet" name="type" type="radio"/>
          <label className="radio-label" htmlFor="pet">Pet</label>


          {/* <input onChange={handleChange} checked={selectedTypeRadio === "property"} 
          id="property" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} checked={selectedTypeRadio === "auto"} 
          id="auto" value={newClaim.type} name="type" type="radio" />          
          <label className="radio-label" htmlFor="auto">Auto</label>

          <input onChange={handleChange}  checked={selectedTypeRadio === "pet"} 
          id="pet" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="pet">Pet</label> */}


          {/* <input  onChange={handleChange} id="property" value={newClaim.property} name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} id="auto" value={newClaim.auto} name="type" type="radio" />          
          <label className="radio-label" htmlFor="auto">Auto</label>

          <input onChange={handleChange} id="pet" value={newClaim.pet} name="type" type="radio"/>
          <label className="radio-label" htmlFor="pet">Pet</label> */}

{/*           
          <input  onChange={handleChange} id="property" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="property">Property</label>

          <input onChange={handleChange} id="auto" value={newClaim.type} name="type" type="radio" />          
          <label className="radio-label" htmlFor="auto">Auto</label>

          <input onChange={handleChange} id="pet" value={newClaim.type} name="type" type="radio"/>
          <label className="radio-label" htmlFor="pet">Pet</label> */}

        </div>

        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />

        <label htmlFor="surname">Surname</label>
        <input onChange={handleChange} id="surname" value={newClaim.surname} type="text" />

        {/* style={{editMode: visible ? "block" : "none"}} */}
        {/* <label htmlFor="status" style={{display: editMode ? "block" : "none"}} >Status</label>
        <input onChange={handleChange} id="status" value={newClaim.status} type="text" style={{display: editMode ? "block" : "none"}} /> */}

        <button disabled={saving} className="registerclaim_button" type="submit">Save</button>
        <p>{message}</p>
  
      </form>
    </div> 

  </Fragment>

};

export default RegisterClaim;
