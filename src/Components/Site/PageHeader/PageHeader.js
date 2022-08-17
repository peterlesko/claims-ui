import Menu from "./Menu";
import './PageHeader.css';

const PageHeader = (props) => {
  return (
    <div className="pageHeader">

      <div className="pageHeaderLogo">
        <h2>Insurance Company</h2>
      </div>

      <Menu setSelectedPage={props.setSelectedPage} />
    </div>
  )
};

export default PageHeader;