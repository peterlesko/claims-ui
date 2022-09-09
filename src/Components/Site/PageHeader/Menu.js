import { Link } from 'react-router-dom';
import './PageHeader.css';

const Menu = (props) => {

  return (
    <div className="ButtonsMenu">
      {/* <button className="newClaim" type="button" onClick={() => props.setSelectedPage("newClaim")}>NEW CLAIM</button> */}

      <Link to="/newClaim"><button className="newClaim" type="button">NEW CLAIM</button></Link> 
      <Link to="/findAClaim"><button className="findAClaim" type="button">FIND A CLAIM</button></Link> 
      {/* <Link to="/existingClaim"><button className="existingClaim" type="button">EXISTING CLAIM</button></Link>  */}
      <Link to="/assessClaims"><button className="assessClaims" type="button">ASSESS CLAIMS</button></Link> 
    </div>
  )
}

export default Menu;
  