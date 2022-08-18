import { Fragment, useState } from 'react';
import './Search.css';

const Search = (props) => {

  // const [searchTerm, setSearchTerm] = useState("");
  // const [valid, setValid] = useState(false);

  // const doSearch = (event) => {
  //   event.preventDefault();
  // }

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  //   setValid(event.target.value.trim().length > 0)
  // }

  const [searchClaimId, setSearchClaimId] = useState("");
  const [searchPolicyNo, setSearchPolicyNo] = useState("");
  const [searchSurname, setSearchSurname] = useState("");

  const [valid, setValid] = useState(false);

  const doSearch = (event) => {
    event.preventDefault();
    props.setSearchSurname(searchSurname.trim());
    // if (!(searchClaimId === null)) {
    //   props.setSearchClaimId(searchClaimId.trim());
    // } else if (!(searchPolicyNo === null)){
    //   props.setSearchPolicyNo(searchPolicyNo.trim());
    // } else if (!(searchSurname === null)) {
    //   props.setSearchSurname(searchSurname.trim());
    // }
  }

  const handleChangeClaimId = (event) => {
    setSearchClaimId(event.target.value);
    setValid(event.target.value.trim().length > 0)
  }

  const handleChangePolicyNo = (event) => {
    setSearchPolicyNo(event.target.value);
    setValid(event.target.value.trim().length > 0)
  }

  const handleChangeSurname = (event) => {
    setSearchSurname(event.target.value);
    setValid(event.target.value.trim().length > 0)
  }

  return <Fragment>

    <div class="search">
      <div class="search-claims">
        <h2 class="search-heading">Search claims</h2>

        <form onSubmit={doSearch}>
          <label htmlFor="claimId">Claim Id *</label>
          <input onChange={handleChangeClaimId} value={searchClaimId} id="claimId" type="text" />
          {/* <input type="text" id="claimId" /> */}
          {/* <input type="text" id="claimId" required /> */}

          <label htmlFor="policyNumber">Policy Number *</label>
          <input onChange={handleChangePolicyNo} value={searchPolicyNo} id="policyNumber" type="text" />
          {/* <input type="text" id="policyNumber" /> */}

          <label htmlFor="surname">Surname *</label>
          <input onChange={handleChangeSurname} value={searchSurname} id="surname" type="text" />
          {/* <input type="text" id="surname" /> */}

          <button type="submit" disabled={!valid} class="Search">Search</button>
        </form>
      </div>
    </div>

  </Fragment>
};

export default Search;