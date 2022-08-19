import { Link } from 'react-router-dom';
import './PageHeader.css';

const Menu = (props) => {

  return (
    <div className="ButtonsMenu">
      {/* <button className="newClaim" type="button" onClick={() => props.setSelectedPage("newClaim")}>NEW CLAIM</button> */}

      <Link to="/newClaim"><button className="newClaim" type="button">NEW CLAIM</button></Link> 
      <Link to="/findAClaim"><button className="findAClaim" type="button">FIND A CLAIM</button></Link> 
      <Link to="/existingClaim"><button className="existingClaim" type="button">EXISTING CLAIM</button></Link> 
      <Link to="/viewClaims"><button className="view Claims" type="button">VIEW CLAIMS</button></Link> 


      {/* <button className="existingClaim" type="button" >EXISTING CLAIM</button> */}
      {/* <button className="search" type="button" onClick={() => props.setSelectedPage("search")}>SEARCH</button> */}
      {/* <button className="view Claims" type="button">VIEW CLAIMS</button> */}
    </div>
  )

  // return (
  //   <div className="ButtonsMenu">
  //     <button className="newClaim" type="button" onClick={() => props.setSelectedPage("newClaim")}>NEW CLAIM</button>
  //     <button className="existingClaim" type="button" >EXISTING CLAIM</button>
  //     <button className="search" type="button" onClick={() => props.setSelectedPage("search")}>SEARCH</button>
  //     <button className="view Claims" type="button">VIEW CLAIMS</button>
  //   </div>

  // )
}

export default Menu;


// ????
// import Button from './Button';
// const buttonText = ["NEW CLAIM", "EXISTING CLAIM", "SEARCH", "VIEW CLAIMS"];
// const buttonText = () => [{id: "NEW CLAIM"}, {id: "EXISTING CLAIM"}];
// const displayButtonText = buttonText().map((it, index) => <Button key={index} button1={it} />);

//   return (
//     {displayButtonText}
//   )
// };
