import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import './PageHeader.css';

const PageHeader = (props) => {
  
  const username = useSelector(state => state.userName);

  const dispatch = useDispatch();

  const changeName = () => dispatch({type : "update-username", value : "Sally"});

  return (
    <div className="pageHeader">

      <div className="pageHeaderLogo">
        <h2>Speedy Claims</h2>
      </div>

      <Menu setSelectedPage={props.setSelectedPage} />
      {/* <p>Current user : {username} <button onClick={changeName} >change user</button></p> */}
    </div>
  )
};

export default PageHeader;