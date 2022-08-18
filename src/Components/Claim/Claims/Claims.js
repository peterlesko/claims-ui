import './Claims.css';
import { Fragment } from "react";
import { getAllClaims } from "../../../data/DataFunctions";
import ClaimRow from "./ClaimRow"; 
//import ReactTable from "react-table-6"; 
// import 'react-table-6/react-table.css';

const Claims = (props) => {

  // const claims = getAllClaims();
  // const displayClaims = claims.map((claim, index) => <ClaimRow key={index} claimRow={claim} />);

  // const claims = getAllClaims();
  // const displayClaims = claims
  //   .map(claim =>
  //     <ClaimRow key={claim.claimId} claimId={claim.claimId} type={claim.type} policyNumber={claim.policyNumber} surname={claim.surname}
  //       claimOpenDate={claim.claimOpenDate} status={claim.status} />);

  const claims = getAllClaims();
  const displayClaims = claims
    // .filter (claim => props.searchTerm === claim.claimId ||
    //                   props.searchTerm === claim.policyNumber ||
    //                   props.searchTerm === claim.surname)my pro
    .filter(claim => (props.searchSurname === claim.surname) || (props.searchPolicyNo === claim.status))
    // .filter(claim => (props.searchSurname === claim.status) )
    .map(claim => <ClaimRow key={claim.claimId} claimId={claim.claimId} type={claim.type} policyNumber={claim.policyNumber} surname={claim.surname}
                  claimOpenDate={claim.claimOpenDate} status={claim.status}/> );

  return <Fragment>

    <table class="claims-table">
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

// return <div>
//   <ReactTable
//     data={claims}
//     columns={claimTableColumns} />
// </div




export default Claims; 