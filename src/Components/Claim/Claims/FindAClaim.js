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
  //   </Fragment>)
  // }

  const [searchSurname, setSearchSurname] = useState("");
  const [searchPolicyNo, setSearchPolicyNo] = useState("");
  return (<Fragment>
    <Search setSearchSurname={setSearchSurname} setSearchPolicyNo={setSearchPolicyNo} />
    <Claims searchSurname={searchSurname} searchPolicyNo={searchPolicyNo} />
    </Fragment>)
  }


  // return (<Fragment>
  //   <Search />
  //   <Claims />
  //   </Fragment>)
  // }


export default FindAClaim;