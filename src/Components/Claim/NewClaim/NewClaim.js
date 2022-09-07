import { Fragment, useEffect, useReducer, useState, useSyncExternalStore } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addNewClaim, getClaim, updateClaim } from '../../../data/DataFunctions';
import './NewClaim.css';

const RegisterClaim = () => {

  const emptyClaim = {type: "", status: "",  policyNumber: "", name: "", surname: "",
                      claimStartDate : new Date().toISOString().slice(0,10), 
                      claimReason: "", description: "",
                      estAmount: "", claimPayOut: "", 
                      address: "", 
                      motorMake: "", motorModel: "", motorYom: "",
                      petType: "", petBreed: ""}

  // const emptyClaim = { type: "new",  claimStartDate : "", policyNumber: "", surname: "" };

  const newClaimReducer = (existingState, data) => {
    return {...existingState, [data.field] : data.value}
  }
    
  const params = useParams();
  const claimToEditClaimId = params.claimId;

  const [pageChanged, setPageChanged] = useState(params.claimId);

  useEffect( () => {
    setPageChanged(params.claimId)}, [params.claimId]);

  const editMode = claimToEditClaimId != null;
  // const claimToEdit = useSelector(state => state.claimToEdit);

  // code to fix issues with refeshing the page, and keeping the data in the page 
  const claimToEdit1 = useSelector(state => state.claimToEdit);
  const [claimToEdit, setClaimToEdit] = useState(editMode ? claimToEdit1 : emptyClaim);

  console.log(claimToEdit);

// const reduxDispatch = useDispatch();

//   if(claimToEdit.status == null && editMode) {
//     getClaim(params.claimId)
    
//     .then(response => { reduxDispatch({type : "set-claim-to-edit", value : response.data} )
//     setClaimToEdit(response.data);
//   })

//   }
// code to fix issues with refeshing the page, and keeping the data in the page 
const reduxDispatch = useDispatch();
  if(claimToEdit1.claimId == "" && editMode) {
    getClaim(params.claimId)   
    .then(response => {
      reduxDispatch({type : "set-claim-to-edit", value : response.data} )
      for (const key in response.data) {
        dispatch({field: key , value : response.data[key] != null ? response.data[key] : ""})  
      }
  })

  }

  const [newClaim, dispatch] = useReducer(newClaimReducer, claimToEdit );

  useEffect(() => {
    if(!editMode) { 
      dispatch({field: "claimId", value: ""})
      dispatch({field: "type", value: ""})
      dispatch({field: "status", value: "new"})
      dispatch({field: "policyNumber", value: ""})
      dispatch({field: "name", value: ""})
      dispatch({field: "surname", value: ""})
      dispatch({field: "claimStartDate", value: ""})
      dispatch({field: "claimReason ", value: ""})
      dispatch({field: "description  ", value: ""})
      dispatch({field: "estAmount", value: ""})
      dispatch({field: "claimPayOut", value: ""})
      dispatch({field: "address", value: ""})
      dispatch({field: "motorMake", value: ""})
      dispatch({field: "motorModel", value: ""})
      dispatch({field: "motorYom", value: ""})
      dispatch({field: "petType", value: ""})
      dispatch({field: "petBreed", value: ""})
   }
  },[editMode] )

  const [selectedTypeRadio, setSelectedTypeRadio] = useState("");
                                          
  const handleChange = (event) => {
    setSelectedTypeRadio(event.target.value);
    console.log(">>>>>>>>>>>>>>>>>> selectedTypeRadio:  "  + selectedTypeRadio);
    const dataToChange = { field: event.target.id, value: event.target.value };
    dispatch(dataToChange); 
  }

  // const {claimId, status, policyNumber, surname, type, claimStartDate} = newClaim;

  const {claimId,type, status, policyNumber, name, surname, claimStartDate, claimReason, description, estAmount, claimPayOut, address, motorMake, motorModel, motorYom, petType, petBreed} = newClaim;

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

      if (type !== claimToEdit.type) {
        data = {...data, type : type};
      };
      if (status !== claimToEdit.status) {
        data = {...data, status : status};
      };
      if (policyNumber !== claimToEdit.policyNumber) {
        data = {...data, policyNumber : policyNumber};
      };
      if (name !== claimToEdit.names) {
        data = {...data, name : name};
      };
      if (surname !== claimToEdit.surname) {
        data = {...data, surname : surname};
      };
      if (claimStartDate !== claimToEdit.claimStartDate) {
        data = {...data, claimStartDate : claimStartDate};
      };
      if (claimReason !== claimReason.surname) {
        data = {...data, claimReason : claimReason };
      };
      if (description !== description.surname) {
        data = {...data, description : description };
      };
      if (estAmount !== claimToEdit.estAmount) {
        data = {...data, estAmount : estAmount};
      };
      if (claimPayOut !== claimToEdit.claimPayOut) {
        data = {...data, claimPayOut : claimPayOut};
      };
      if (address !== claimToEdit.address) {
        data = {...data, address: address};
      };
      if (motorMake !== claimToEdit.motorMake) {
        data = {...data,motorMake : motorMake};
      };
      if (motorModel !== claimToEdit.motorModel) {
        data = {...data, motorModel : motorModel};
      };
      if (motorYom !== claimToEdit.motorYom) {
        data = {...data, motorYom : motorYom};
      };
      if (petType !== claimToEdit.petType) {
        data = {...data, petType : petType};
      };
      if (petBreed !==  claimToEdit.petBreed) {
        data = {...data, petBreed : petBreed};
      };

      response = updateClaim(params.claimId, data);
    } 
    else {
      response = addNewClaim(newClaim);
      console.log("------------");
      console.log(newClaim.type);
      console.log("<<<<<<<<<<<<");
    }

  //fix the navigating to edit page after submiiting new claim and printing claim ID on the screen, not working yet,
    response.then(result => { 
      if (result.status === 200) {
        // navigate("/find/" + result.data.claimId);
        // navigate("/findAClaim/" + result.data.surname);
        // navigate("/newClaim/");
        dispatch({type : "set-claim-to-edit", value : result.data });
        setMessage("");
        setSaving(false); 
        navigate("/edit/" + result.data.claimId);
        console.log(result.data);
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
        
        <h2>{editMode ? "Edit" : "Register new"} claim  {editMode ? claimId : ""}</h2>

        <div  className="radio-container">   
             

        { !editMode && (
          <> 
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

          </>
        )}
        </div>

        {/* for edit mode only */}
        { editMode && (
          <>
          <label htmlFor="type">Claim Type</label>
          <input onChange={handleChange} id="type" value={newClaim.type} type="text" /> 
          </>
        )}

        {/* change later for edit mode only */}
       { editMode && 
          <Fragment>
           <label htmlFor="status">Claim Status</label>
           <input onChange={handleChange} id="status" value={newClaim.status} type="text" /> 
          </Fragment>
        }

    { editMode && 
      <Fragment>
          <label htmlFor="status">Claim Status</label>
            <select id="status" onChange={handleChange} value={newClaim.status} > 
              <option value="new">New1</option>
              <option value="paid">Paid</option>
              <option value="paid">accepted payment due</option>
              <option value="paid">accepted & paid</option>
              <option value="rejected">rejected</option>
              <option value="paid">paid</option>
              <option value="paid">escalated</option>          
            </select>
      </Fragment>
    }

        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />

        <label htmlFor="name">Name</label>
        <input onChange={handleChange} id="name" value={newClaim.name} type="text" />

        <label htmlFor="surname">Surname</label>
        <input onChange={handleChange} id="surname" value={newClaim.surname} type="text" />


        <label htmlFor="claimStartDate">Claim Start Date</label>
        <input onChange={handleChange} id="claimStartDate" value={newClaim.claimStartDate} type="date" /> 


        <label htmlFor="claimReason">Claim Reason</label>
        <input onChange={handleChange} id="claimReason" value={newClaim.claimReason} type="text" /> 

        <label htmlFor="description">Claim Desc</label>
        <input onChange={handleChange} id="description" value={newClaim.description} type="text" /> 

        <label htmlFor="estAmount">Est Amount</label>
        <input onChange={handleChange} id="estAmount" value={newClaim.estAmount} type="text" /> 

        { editMode && (
          <>
            <label htmlFor="claimPayOut">Claim Pay Out</label>
            <input onChange={handleChange} id="claimPayOut" value={newClaim.claimPayOut} type="text" />   
          </>
        )}

        {(selectedTypeRadio === "property" || claimToEdit.type === "property" ) && (
          <>
            <label htmlFor="address">Address</label>
            <input onChange={handleChange} id="address" value={newClaim.address} type="text" /> 
          </>
        )}

        {(selectedTypeRadio === "motor" || claimToEdit.type === "motor") && (
          <>
            <label htmlFor="motorMake">Make</label>
            <input onChange={handleChange} id="motorMake" value={newClaim.motorMake} type="text" /> 

            <label htmlFor="motorModel">Model</label>
            <input onChange={handleChange} id="motorModel" value={newClaim.motorModel} type="text" /> 

            <label htmlFor="motorYom">YOM</label>
            <input onChange={handleChange} id="motorYom" value={newClaim.motorYom} type="text" /> 
          </>
        )}

        {(selectedTypeRadio === "pet" || claimToEdit.type === "pet"  ) && (
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
