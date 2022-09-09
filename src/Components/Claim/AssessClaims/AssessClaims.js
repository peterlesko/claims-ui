import { Fragment, useEffect, useState } from "react";
import { getAllClaims, getAllClaimsAxiosVersion, getClaim } from "../../../data/DataFunctions";
import { useDispatch, useSelector } from "react-redux";
import ClaimRow from "./ClaimRow";
import { useParams } from "react-router";

const AssessClaims = (props) => {
  
  const [claims, setClaims] = useState([]);
  
  const dispatch = useDispatch();   //code for Redux, must be declared on top level
  const claimsInRedux = useSelector(state => state.claims); // extract claims
  const lastFetchInRedux = useSelector(state => state.lastFetch);

  const getClaimDataFromServer = () => {

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
            setClaims(response.data);
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
    .filter(claim => claim.status === "new")
    .map(claim => <ClaimRow key={claim.claimId} claimId={claim.claimId} type={claim.type} 
                  policyNumber={claim.policyNumber} surname={claim.surname}
                  claimStartDate={claim.claimStartDate} status={claim.status}/> );

  return <Fragment>
         
         
    <div className="assess-claims">
        
      <h2 data-testid="h2">Assess claims</h2>

      <table className="claims-table">
        <thead>
          <tr>
            <th>Claim Id</th>
            <th>Type</th>
            <th>Policy #</th>
            <th>Surname</th>
            <th>Start Date</th>
            <th>Status</th>
            <th>Assess</th>
          </tr>
        </thead>

        <tbody>    
          {displayClaims}
        </tbody> 
      </table>
      {claims.length === 0 && <p>Please wait... loading data</p>}
    </div>

  </Fragment>
}

export default AssessClaims;