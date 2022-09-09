import React, { Fragment, useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getClaim } from "../../../data/DataFunctions";
import './ViewClaim.css';

const ViewClaim = () => {

  const emptyClaim = {  claimId: "", type: "", status: "",  policyNumber: "", name: "", surname: "",
                        claimStartDate : new Date().toISOString().slice(0,10), 
                        claimReason: "", description: "",
                        estAmount: "", claimPayOut: "", 
                        address: "", 
                        motorMake: "", motorModel: "", motorYom: "",
                        petType: "", petBreed: ""}

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

      <div class="view-claims-header">
        <h2>Details claim Id {claim.claimId}</h2>
      </div>

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

            { claim.type==="property" && 
              <Fragment>
                <tr>
                  <th>Address</th>
                  <td>{claim.address}</td>
                </tr>
              </Fragment>  
            }

            { claim.type==="motor" && 
              <Fragment>
                <tr>
                  <th>Make</th>
                  <td>{claim.motorMake}</td>
                </tr>

                <tr>
                  <th>Model</th>
                  <td>{claim.motorModel}</td>
                </tr>

                <tr>
                  <th>YOM</th>
                  <td>{claim.motorYom}</td>
                </tr>
              </Fragment>  
            }

            { claim.type==="pet" && 
              <Fragment>
                <tr>
                  <th>Pet Type</th>
                  <td>{claim.petType}</td>
                </tr>

                <tr>
                  <th>Pet Breed</th>
                  <td>{claim.petBreed}</td>
                </tr>
              </Fragment>  
            }

          </tbody>
        </table>

      <button disabled={claim.status === "rejected" || claim.status === "acceptedPaid"} onClick={edit} type="button" className="viewClaimButton">Assess-edit</button>

    </Fragment>
  );
}

export default ViewClaim;