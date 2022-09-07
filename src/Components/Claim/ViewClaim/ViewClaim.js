import { Fragment, useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getClaim } from "../../../data/DataFunctions";
import './ViewClaim.css';

const ViewClaim = () => {

  // const emptyClaim = { claimId: "",  policyNumber: "", surname: "", status: "" }

  const emptyClaim = {  claimId: "", type: "", status: "",  policyNumber: "", name: "", surname: "",
                       date : new Date().toISOString().slice(0,10), 
                       claimReason: "", description: "",
                       estAmount: "", claimPayOut: "", 
                       address: "", 
                       motorMake: "", motorModel: "", motorYom: "",
                       petType: "", petBreed: ""}



  // const emptyClaim = { claimId: "",  policyNumber: "", surname: "", status: "" }
  // const emptyClaim = { policyNumber: "", surname: "" }

  const [claim, setClaim] = useState(emptyClaim);
 
  const navigate = useNavigate();

  const params = useParams();

  useEffect( () => {
    getClaim(params.claimId)



    
      .then(response => {
        if (response.status === 200) {
          setClaim(response.data);
        }
        else {
          console.log("Something went wrong ", response.status);
        }
      })
      .catch(error => console.log("error occured", error));
  }, [] );

  const dispatch = useDispatch(); 
  
  const edit = () => {
    console.log("Claim is : " + claim.policyNumber);
    dispatch({type : "set-claim-to-edit", value : claim });
    navigate("/edit/" + params.claimId);
  }


  // const assessClaim = () => {
  //   dispatch({type : "set-claim-to-edit", value : claim });
  //   navigate("/assessClaim/" + params.claimId);
  // }

  // this is working 
  // const assessClaim = () => {
  //   dispatch({type : "set-claim-to-edit", value : claim });
  //   navigate("/assessClaim/" + params.claimId);
  // }

//   <tr>
//   <th></th>
//   <td>{claim.}</td>
// </tr>



  return (
      <Fragment>
        <h2>View claim ID: {claim.claimId}</h2>
        <table className="view-claims-table">
          <tbody>
            <tr>
              <th>Claim ID</th>
              <td>{claim.claimId}</td>
            </tr>

            <tr>
              <th>Claim type</th>
              <td>{claim.type}</td>
            </tr>

            <tr>
              <th>Status</th>
              <td>{claim.status}</td>
            </tr>

            <tr>
              <th>Policy #</th>
              <td>{claim.policyNumber}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{claim.name}</td>
            </tr>
            <tr>
              <th>Surname</th>
              <td>{claim.surname}</td>
            </tr>
            <tr>
              <th>Claim Start Date</th>
              <td>{claim.claimStartDate}</td>
            </tr>
            <tr>
              <th>Claim Reason </th>
              <td>{claim.claimReason}</td>
            </tr>

            <tr>
              <th>Description </th>
             <td>{claim.description}</td>
            </tr>

            <tr>
              <th>Est Amount</th>
              <td>{claim.estAmount}</td>
            </tr>

            <tr>
              <th>Claim PayOut</th>
              <td>{claim.claimPayOut}</td>
            </tr>

            <tr>
               <th>Address</th>
              <td>{claim.address}</td>
            </tr>

            <tr>
               <th>Make</th>
              <td>{claim.motorMake}</td>
            </tr>

            <tr>
               <th>Model</th>
              <td>{claim.motorModel}</td>
            </tr>

            <tr>
               <th>Model</th>
              <td>{claim.motorModel}</td>
            </tr>



          </tbody>
        </table>
        {/* {useReducer.role === "MANAGER" & <button>edit</button> }  //for roles */} 
        {/* <button>edit</button>  */}
        {/* <button onClick={edit} type="submit" className="Search">edit2</button> */}
        <button onClick={edit}>edit</button>
        <button onClick={edit}>Asses claim</button>
        {/* <button onClick={edit}>Asses claim</button> */}


      </Fragment>
  );
}

export default ViewClaim;