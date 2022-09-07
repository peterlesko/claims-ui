import './Claims.css';
import { Fragment, useEffect, useState } from "react";
import { getAllClaims, getAllClaimsAxiosVersion } from "../../../data/DataFunctions";
import ClaimRow from "./ClaimRow"; 
import { useDispatch, useSelector } from "react-redux";
//import ReactTable from "react-table-6"; 
// import 'react-table-6/react-table.css';

const Claims = (props) => {

  //its working commented out to uncluding useEffect() for update URL, rec.8, 18.7.22
  const [claims, setClaims] = useState([]);
  
  const dispatch = useDispatch();   //code for Redux, must be declared on top level
  const claimsInRedux = useSelector(state => state.claims); // extract claims
  const lastFetchInRedux = useSelector(state => state.lastFetch);

  const getClaimDataFromServer = () => {
    // const paymentsPromise = getAllPaymentsRestVersion(); 
    let timedifference = 999999;
    if (lastFetchInRedux != null) {
      const now = new Date();
      timedifference = now.getTime() - lastFetchInRedux;
    }
    console.log("timedifference", timedifference);
    //if we have a data in the store, setClaims(that data)
    //else do the rest of this.
    if (claimsInRedux.length > 0 && timedifference < 60000) {
      setClaims(claimsInRedux);
      console.log("got claims from redux");
    }
    else {
      const claimsPromise = getAllClaimsAxiosVersion();
        claimsPromise.then(
        (response) => {
          if (response.status === 200) {
            // response.json().then (
            //   data => {
            //     //set the transactios variable'
            //     console.log("got the data");
            //     setTransactions(data);
            //   } 
            // )
            setClaims(response.data);
            console.log(">>>>>>>>>>> Status:  " + response.data);
            dispatch({ type: "save-claims", value : response.data}); 
          }
          else {
            console.log("Something went wrong", response.status);
          }
        }
      )
      .catch(
        (error) => {
          console.log("Server error", error);
        }
      );
    }
  };

  useEffect(() => { getClaimDataFromServer() }, []);

  const displayClaims = claims
    .filter(claim  => ((props.searchClaimId) === (claim.claimId.toString())) ||      
                      ((props.searchPolicyNo) === (claim.policyNumber.toString())) ||
                      (props.searchSurname === claim.surname))
    .map(claim => <ClaimRow key={claim.claimId} claimId={claim.claimId} type={claim.type} 
                  policyNumber={claim.policyNumber} surname={claim.surname}
                  claimStartDate={claim.claimStartDate} status={claim.status}/> );
                  // claimOpenDate={claim.claimOpenDate} status={claim.status}/> );

  
  return <Fragment>

    <table className="claims-table">
      <thead>
        <tr>
          <th>Claim Id</th>
          <th>Type</th>
          <th>Policy #</th>
          <th>Surname</th>
          <th>Start Date</th>
          <th>Status</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>    
        {displayClaims}
      </tbody> 
    </table>
    {claims.length === 0 && <p>Please wait... loading data</p>}
  </Fragment>
}

export default Claims; 