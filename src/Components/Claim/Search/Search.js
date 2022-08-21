import { Fragment, useState } from 'react';
import './Search.css';
import { useNavigate, useSearchParams } from "react-router-dom";

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

  const navigate = useNavigate();

  // commented out code set use state depending on which input field
  //now it sets surname only  
  const doSearch = (event) => {
    event.preventDefault();
    // if (!(searchSurname === null)) {
    // props.setSearchSurname(searchSurname.trim());
    // }
    // if (!(searchClaimId === null)) {
    //   props.setSearchClaimId(searchClaimId.trim());
    // } else if (!(searchPolicyNo === null)){
    //   props.setSearchPolicyNo(searchPolicyNo.trim());
    // } else if (!(searchSurname === null)) {
    //   props.setSearchSurname(searchSurname.trim());
    // }

    //this for surname and policy number.   
    if (searchSurname !== "") {
      props.setSearchSurname(searchSurname.trim());
      navigate("/findAClaim/" + searchSurname.trim());   //to update URL, rec.8, 18.7.22
    }  else if (searchPolicyNo !== "") {
      props.setSearchPolicyNo(searchPolicyNo.trim());
    }


  }

  //to update URL, rec.8, 18.7.22
  // const select



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

    <div className="search">
      <div className="search-claims">
        <h2 className="search-heading">Search claims</h2>

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

          <button type="submit" disabled={!valid} className="Search">Search</button>
        </form>
      </div>
    </div>

  </Fragment>
};

export default Search;