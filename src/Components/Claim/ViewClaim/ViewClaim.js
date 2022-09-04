import { Fragment, useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getClaim } from "../../../data/DataFunctions";

const ViewClaim = () => {

  const emptyClaim = { claimId: "", policyNumber: "", surname: "", status: "" }
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

  return (
      <Fragment>
        <h2>View claim ID: {claim.claimId}</h2>
        <table className="claims-table">
          <tbody>
            <tr>
              <th>Claim ID</th>
              <td>{claim.claimId}</td>
            </tr>
            <tr>
              <th>Policy #</th>
              <td>{claim.policyNumber}</td>
            </tr>
            <tr>
              <th>Surname</th>
              <td>{claim.surname}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{claim.status}</td>
            </tr>
          </tbody>
        </table>
        {/* {useReducer.role === "MANAGER" & <button>edit</button> }  //for roles */} 
        {/* <button>edit</button>  */}
        {/* <button onClick={edit} type="submit" className="Search">edit2</button> */}
        <button onClick={edit}>edit</button>
      </Fragment>
  );
}

export default ViewClaim;