import { Fragment, useState } from "react";
import { useParams } from "react-router";
import { getClaim } from "../../../data/DataFunctions";

const ViewClaim = () => {

  const emptyClaim = { 
    policyNumber: "", surname: "" }

  const [claim, setClaim] = useState(emptyClaim);
 
  const params = useParams();
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
          </tbody>
        </table>

      </Fragment>
  );
}

export default ViewClaim;