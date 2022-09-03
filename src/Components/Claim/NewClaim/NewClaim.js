import { Fragment, useReducer, useState, useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addNewClaim } from '../../../data/DataFunctions';
import './NewClaim.css';

const RegisterClaim = () => {

  let emptyClaim = { policyNumber: "", surname: "" }

  const newClaimReducer = (existingState, data) => {
    return {...existingState, [data.field] : data.value}
  }
    
  const params = useParams();
                                                                  console.log("Params is: " + params);
  const claimToEditClaimId = params.claimId;
                                                                  console.log("claim to Edit ClaimId: " + claimToEditClaimId);

  const editMode = claimToEditClaimId != null;
  const claimToEdit = useSelector(state => state.claimToEdit);

  if (editMode) {
                                                                    console.log("KKKKKKKKKKKKKKKKKKKK");
                                                                    console.log("Loading: ", claimToEdit);
    emptyClaim = claimToEdit; 
  }

  const [newClaim, dispatch] = useReducer(newClaimReducer, emptyClaim);

  const handleChange = (event) => {
    const dataToChange = { field: event.target.id, value: event.target.value };
    dispatch(dataToChange); 
  }

  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(newClaim);
    setSaving(true);
    setMessage("plase wait - saving")
    const response = addNewClaim(newClaim);
    response.then(result => { 
      if (result.status === 200) {
        setMessage("Claim added with id " + result.data.claimId)
      }
      else {
        setMessage("someting went wrong ", result.statusText)
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
      <h2>Register new claim</h2>

      <form onSubmit={submitForm}>

        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />

        <label htmlFor="surname">Surname</label>
        <input onChange={handleChange} id="surname" value={newClaim.surname} type="text" />

        {/* <label htmlFor="insuranceType<">Insurance type</label>
        <input onChange={handleChange} id="insuranceType" value={newClaim.insuranceType} type="text" /> */}

        {/* <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" /> */}

        {/* <button disabled={!valid} className="registerclaim_button" type="submit">Save</button> */}
        {/* <button disabled={saving className="registerclaim_button" type="submit">Save</button> */}

        <button disabled={saving} className="registerclaim_button" type="submit">Save</button>
        <p>{message}</p>
  
      </form>
    </div>

  </Fragment>

};

export default RegisterClaim;
