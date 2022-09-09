import {render} from "@testing-librery/react"
import { BrowserRouter } from "react-router-dom"
import { createElement } from "react"
import AssessClaims from "./AssessClaims"

jest.mock("../../../data/DataFunctions" , () => {

  return {
    getAllClaimsAxiosVersion : () => 
    Promise.resolve({  status : 200,  data : [{status:"rejected"}, {status: "new"}, {status:"escalated"}, 
                    {status: "inProgress"}, {status:"new"}, {status: "acceptedPaid"} ] })
  }
})

test ("Claims with other then new status are removed from list", async () => {
  render (<BrowserRouter><AssessClaims /></BrowserRouter> )
  const table = await createElement.findByRole("option", {}, 5000);
  // expect(table).toBeInTheDocument();
  expect(table).toHaveLength(2);
}  )