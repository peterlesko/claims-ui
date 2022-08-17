import './Claims.css';
import { Fragment } from "react";
import { getAllClaims } from "../../../data/DataFunctions";
import ClaimRow from "./ClaimRow";


const Claims = () => {

  const claims = getAllClaims();
  const displayClaims = claims.map((claim, index) => <ClaimRow key={index} claimRow={claim} />);

  return <Fragment>

    <table class="claims-table" >
      <thead>
        <tr>
          <th>Claim Id</th>
          <th>Type</th>
          <th>Policy #</th>
          <th>Surname</th>
          <th>Start Date</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>

      <tbody>    
        {displayClaims}
      </tbody> 
    </table>
  </Fragment>
}

export default Claims; 