import { Fragment, useState} from "react";
import Search from "../Search/Search";
import Claims from "./Claims";

const FindAClaim = () => {

  const [searchClaimId, setSearchClaimId] = useState("");
  const [searchPolicyNo, setSearchPolicyNo] = useState("");
  const [searchSurname, setSearchSurname] = useState("");

  return (<Fragment>
      <Search setSearchClaimId={setSearchClaimId} setSearchPolicyNo={setSearchPolicyNo} setSearchSurname={setSearchSurname} />
      <Claims searchClaimId={searchClaimId} searchPolicyNo={searchPolicyNo} searchSurname={searchSurname}  />
    </Fragment>)
  }


export default FindAClaim;