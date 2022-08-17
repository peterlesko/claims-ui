import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const ClaimRow = (props) => {

  return <tr>
    <td>{props.claimRow.claimId}</td>
    <td>{props.claimRow.type}</td>
    <td>{props.claimRow.policyNumber}</td>
    <td>{props.claimRow.surname}</td>
    <td>{props.claimRow.claimOpenDate}</td>
    <td>{props.claimRow.status}</td>
    <td>
      <button type="button" class="viewButton">View</button>
    </td>
  </tr>;

}

export default ClaimRow; 