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

  // return <tr>
  //   <td>{props.claimRow.claimId}</td>
  //   <td>{props.claimRow.type}</td>
  //   <td>{props.claimRow.policyNumber}</td>
  //   <td>{props.claimRow.surname}</td>
  //   <td>{props.claimRow.claimOpenDate}</td>
  //   <td>{props.claimRow.status}</td>
  //   <td>
  //     <button type="button" class="viewButton">View</button>
  //   </td>
  // </tr>;
}

export default ClaimRow; 