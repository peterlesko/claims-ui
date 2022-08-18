import { Fragment, useState} from "react";
import Search from "../Search/Search";
import Claims from "./Claims";

const FindAClaim = () => {

//   const [searchTerm, setSearchTerm] = useState("");

//   return <Fragment>
//     <Search setSearchTerm={searchTerm} />
//     <Claims searchTerm={searchTerm}/>
//   </Fragment>
// }

  const [searchSurname, setSearchSurname] = useState("");

  return (<Fragment>
    <Search setSearchSurname={setSearchSurname} />
      <Claims searchSurname={searchSurname} />
    </Fragment>)
  }




export default FindAClaim;