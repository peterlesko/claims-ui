import './PageHeader.css';

const Menu = (props) => {

  return (
    <div className="ButtonsMenu">
      <button className="newClaim" type="button" onClick={() => props.setSelectedPage("newClaim")}>NEW CLAIM</button>
      <button className="existingClaim" type="button" >EXISTING CLAIM</button>
      <button className="search" type="button" onClick={() => props.setSelectedPage("search")}>SEARCH</button>
      <button className="view Claims" type="button">VIEW CLAIMS</button>
    </div>

  )
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
