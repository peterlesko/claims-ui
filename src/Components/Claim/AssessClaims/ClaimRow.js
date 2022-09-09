import { useNavigate } from "react-router";

const ClaimRow = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/view/${props.claimId}`);
  }

  return <tr>
    <td>{props.claimId}</td>
    <td>{props.type}</td>
    <td>{props.policyNumber}</td>
    <td>{props.surname}</td>
    <td>{props.claimStartDate}</td>
    <td>{props.status}</td>
    <td>
      <button onClick={handleClick} type="button" className="viewButton">View</button>
    </td>
  </tr>

}

export default ClaimRow; 