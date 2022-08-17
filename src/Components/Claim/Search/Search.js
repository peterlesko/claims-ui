import { Fragment } from 'react';
import './Search.css';

const Search = () => {

  return <Fragment>

    <div class="search">

      <div class="search-claims">
        <h2 class="search-heading">Search claims</h2>

        <p>Enter Policy Number or Costumer's Name</p>

        <form action="gfgfdg.html" method="get">
          <label for="claimId">Claim Id *</label>
          <input type="text" name="claimId" id="claimId" required />

          <label for="policyNumber">Policy Number *</label>
          <input type="text" name="policyNumber" id="policyNumber" required />

          <label for="surname">Surname *</label>
          <input type="text" name="surname" id="surname" required />

          <button type="search" class="Search"><b>Search</b></button>
        </form>
      </div>      
    </div>

  







  </Fragment>
};

export default Search;