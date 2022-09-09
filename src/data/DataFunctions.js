import axios from "axios";

export const getAllClaimsAxiosVersion = () => {
  // const headers = new Headers({ 'Accept': 'application/json' });
  const claimsPromise = axios({
    url: "http://localhost:8080/api/claim/",
    method: "GET", headers: { 'Accept': 'application/json' }
  });
  return claimsPromise;
}

export const addNewClaim = (claim) => {
  return axios({
    url: "http://localhost:8080/api/claim/",
    method: "POST",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/JSON' },
    data: claim});
}

export const getClaim = (claimId) => {
  return axios({
    url : `http://localhost:8080/api/claim/${claimId}`,
    method: "GET",
    headers : { 'Accept': 'application/json'}
  });
}

export const updateClaim = ( claimId, data) => {

console.log(data)
  return axios({
    url: "http://localhost:8080/api/claim/" + claimId,
    method: "PUT",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/JSON' },
    data: data});
}