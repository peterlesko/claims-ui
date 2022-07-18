import Menu from "./Menu";
import './PageHeader.css';

const PageHeader = () => {
  return (
    <div class="containerHeader">

      <div className="containerLogo">
        <h2>Insurance Company</h2>
      </div>


      <div className="menu">
        <Menu />
      </div>

    </div>
  )
};

export default PageHeader;
