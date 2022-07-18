import './PageHeader.css';

const Menu = () => {

  return (

    <div className="containerButtons">
      <button className ="button" type="button" class="newClaim">NEW CLAIM</button>
      <button className ="button" type="button" class="existingClaim">EXISTING CLAIM</button>
      <button className ="button" type="button" class="search">SEARCH</button>
      <button className ="button" type="button" class="view Claims">VIEW CLAIMS</button>
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