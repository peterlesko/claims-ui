import { Fragment, useState} from "react";
import Search from "../Search/Search";
import Claims from "./Claims";

const FindAClaim = () => {

  //how to set it up for 3 different on Chnage events
//   const [searchTerm, setSearchTerm] = useState("");

//   return <Fragment>
//     <Search setSearchTerm={setSearchTerm} />
//     <Claims searchTerm={searchTerm}/>
//   </Fragment>
// }

  //this works only for surname
  // const [searchSurname, setSearchSurname] = useState("");
  //     return (<Fragment>
  //   <Search setSearchSurname={setSearchSurname}/>
  //   <Claims searchSurname={searchSurname} />
  //   </Fragment>)can you pls paste http://localhost:8080/api/healthpeter
  // }
  const [searchClaimId, setSearchClaimId] = useState("");
  const [searchPolicyNo, setSearchPolicyNo] = useState("");
  const [searchSurname, setSearchSurname] = useState("");

  return (<Fragment>
      <Search setSearchClaimId={setSearchClaimId} setSearchPolicyNo={setSearchPolicyNo} setSearchSurname={setSearchSurname} />
      <Claims searchClaimId={searchClaimId} searchPolicyNo={searchPolicyNo} searchSurname={searchSurname}  />
    </Fragment>)
  }

  // return (<Fragment>
  //   <Search />
  //   <Claims />
  //   </Fragment>)
  // }

export default FindAClaim;