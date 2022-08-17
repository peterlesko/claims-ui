export const getAllClaims = () => {
  return [
    {
        claimId: 1, policyNumber: 3281, title: "Mr", firstName: "Simon", surname: "Smith", status: "new",
        type: "motor", estimatedValue: 400, claimOpenDate: "2022-05-19", claimReason: "backed into lamp post",
        make: "Nissan", model: "Juke", year: 2018, incidentDate: "2022-05-18",
        furtherDetails: "claimed that the lamp post wasn't there the last time they looked"
    },
    {
        claimId: 2, policyNumber: 4406, title: "Mrs", firstName: "Jane", surname: "Jones", status: "paid",
        type: "pet", estimatedValue: 240, claimOpenDate: "2022-05-20", claimReason: "cut on front left paw",
        amount : 260, animalType: "dog", breed: "Border collie", incidentDate: "2022-05-18"
    },
    {
        claimId: 3, policyNumber: 9191, title: "Dr", firstName: "Geraldine", surname: "Green", status: "rejected",
        type: "motor", estimatedValue: 380, claimOpenDate: "2022-05-20", claimReason: "skidded on ice",
        furtherDetails: "Had been snowing all morning",
        make: "Citroen", model: "Berlingo", year: 2021
    },
    {
        claimId: 4, policyNumber: 1200, title: "Prof.", firstName: "Clive", surname: "Cole", status: "open",
        type: "property", estimatedValue: 200, claimOpenDate: "2022-05-21", claimReason: "damage from flood",
        address: "15 Acacia Avenue, Sometown"
    },
    {
        claimId: 5, policyNumber: 1655, title: "Miss", firstName: "Wanda", surname: "Web", status: "rejected",
        type: "property", estimatedValue: 300, claimOpenDate: "2022-05-22",
        claimReason: "window broken by neighbour's child playing football",
        address: "27 Summer View, Differentown"
    }


    // { id: 1, type: "Motor", policyNumber: 147854925639, Name: "Mark Smith", startDate: "2018-08-02",  },
    //   {id: 2, policyNumber: 4406, title: "Mrs"}
    ]
  }
    
  // [
  //   { id: 101, amount: 160, country: "USA", currency: "USD", date: "2017-01-31", order_id: "21216652", tax_code: 0, tax_rate: 0, type: "SALE" },
  //   { id: 102, amount: 200, country: "FRA", currency: "EUR", date: "2017-02-01", order_id: "21216653", tax_code: 7, tax_rate: 0.21, type: "SALE" },
  //   { id: 103, amount: -100, country: "SWE", currency: "EUR", date: "2017-02-01", order_id: "21216654", tax_code: 19, tax_rate: 0.25, type: "Refund" },
  //   { id: 104, amount: 60, country: "USA", currency: "USD", date: "2017-02-02", order_id: "21216655", tax_code: 0, tax_rate: 0, type: "SALE" },
  //   { id: 105, amount: 130, country: "USA", currency: "USD", date: "2017-01-31", order_id: "21216656", tax_code: 0, tax_rate: 0, type: "SALE" },
  //   { id: 106, amount: 230, country: "FRA", currency: "EUR", date: "2017-02-01", order_id: "21216657", tax_code: 7, tax_rate: 0.21, type: "SALE" },
  //   { id: 107, amount: -30, country: "SWE", currency: "EUR", date: "2017-02-01", order_id: "21216658", tax_code: 19, tax_rate: 0.25, type: "Refund" },
  //   { id: 108, amount: 90, country: "USA", currency: "USD", date: "2017-02-02", order_id: "21216659", tax_code: 0, tax_rate: 0, type: "SALE" },
  //   { id: 109, amount: 210, country: "USA", currency: "USD", date: "2017-01-31", order_id: "21216660", tax_code: 0, tax_rate: 0, type: "SALE" },
  //   { id: 110, amount: 110, country: "FRA", currency: "EUR", date: "2017-02-01", order_id: "21216661", tax_code: 7, tax_rate: 0.21, type: "SALE" },
  //   { id: 111, amount: -150, country: "SWE", currency: "EUR", date: "2017-02-01", order_id: "21216662", tax_code: 19, tax_rate: 0.25, type: "Refund" },
  //   { id: 112, amount: 600, country: "USA", currency: "USD", date: "2017-02-02", order_id: "21216663", tax_code: 0, tax_rate: 0, type: "SALE" }
  // ]



// const statuses = [{id : "new", description: "awaiting assessment", open: true},
//     {id : "open", description: "open", open: true},
//     {id :"accepted", description: "accepted - awaiting payment", open: true},
//     {id : "paid" , description: "paid", open: false},
//     {id : "rejected" ,description: "rejected", open: false},
//     {id : "pushed", description: "pushed to main handling", open: false}]

// export const getStatusDetail = (status) => statuses.find(it => it.id === status);

// const claims = [
//     {
//         claimId: 1, policyNumber: 3281, title: "Mr", firstName: "Simon", surname: "Smith", status: "new",
//         type: "motor", estimatedValue: 400, claimOpenDate: "2022-05-19", claimReason: "backed into lamp post",
//         make: "Nissan", model: "Juke", year: 2018, incidentDate: "2022-05-18",
//         furtherDetails: "claimed that the lamp post wasn't there the last time they looked"
//     },
//     {
//         claimId: 2, policyNumber: 4406, title: "Mrs", firstName: "Jane", surname: "Jones", status: "paid",
//         type: "pet", estimatedValue: 240, claimOpenDate: "2022-05-20", claimReason: "cut on front left paw",
//         amount : 260, animalType: "dog", breed: "Border collie", incidentDate: "2022-05-18"
//     },
//     {
//         claimId: 3, policyNumber: 9191, title: "Dr", firstName: "Geraldine", surname: "Green", status: "rejected",
//         type: "motor", estimatedValue: 380, claimOpenDate: "2022-05-20", claimReason: "skidded on ice",
//         furtherDetails: "Had been snowing all morning",
//         make: "Citroen", model: "Berlingo", year: 2021
//     },
//     {
//         claimId: 4, policyNumber: 1200, title: "Prof.", firstName: "Clive", surname: "Cole", status: "open",
//         type: "property", estimatedValue: 200, claimOpenDate: "2022-05-21", claimReason: "damage from flood",
//         address: "15 Acacia Avenue, Sometown"
//     },
//     {
//         claimId: 5, policyNumber: 1655, title: "Miss", firstName: "Wanda", surname: "Web", status: "rejected",
//         type: "property", estimatedValue: 300, claimOpenDate: "2022-05-22",
//         claimReason: "window broken by neighbour's child playing football",
//         address: "27 Summer View, Differentown"
//     }
// ];

// let notes = [
//     {id: 1, claimId:4, description: "checking real estimate", date: "2022-05-23"},
//     {id: 2, claimId:3, description: "falls outside policy coverage", date: "2022-05-22"},
//     {id: 3, claimId:4, description: "customer photo received and stored on file", date: "2022-05-28"},
//     {id: 4, claimId:5, description: "customer withdrew claim as amount of damage is lower than policy excess", date: "2022-05-27"}
// ];

// let tasks = [
//     {id: 1, claimId:4, description: "awaiting customer photo", date: "2022-05-22", status: "complete"},
//     {id :2, claimId:4, description: "estimating cost of repair", date: "2022-05-23", status: "active"}
// ];

// export const getClaim = (claimId) => {
//     return claims.find(it => it.claimId === claimId);
// }

// export const getNotesForClaim = (claimId) => {
//     return notes.filter(it => it.claimId === claimId);
// }

// export const getTasksForClaim = (claimId) => {
//     return tasks.filter(it => it.claimId === claimId);
// }

// export const getClaimsByOpenStatus = (status) => {
//     return claims.filter (claim => getStatusDetail(claim.status).open === status);
// }

// export const registerNewClaim = (newClaim) => {
//     const claimIds = claims.map(claim => claim.claimId);
//     const maxClaimId = Math.max(...claimIds);

//     const claimToAdd = {
//         claimId: maxClaimId + 1, status: "new",
//         claimOpenDate: Date.now(), ...newClaim
//     };

//     claims.push(claimToAdd);
//     return claimToAdd;
// }

// export const findClaimByPolicyNumber = (policyNumber) => {
//     return claims.filter(it => it.policyNumber === policyNumber);
// }

// export const findClaimBySurname = (surname) => {
//     return claims.filter(it => it.surname.toLowerCase().includes(surname.toLowerCase()));
// }

// export const updateClaim = (id, newData) => {
//     const position = claims.findIndex(it => it.claimId === +id);
//     const updatedClaim = {...claims[position], ...newData};
//     claims[position] = updatedClaim;
// }

// export const addTaskToClaim = (claimId, task) => {

//     const highestTaskId = Math.max(...tasks.map(it => it.id));
//     tasks.push( {id : highestTaskId + 1, claimId: claimId, description: task, date: new Date().toISOString().substring(0, 10), status: "active"});
// }

// export const addNoteToClaim = (claimId, note) => {
//     const highestNoteId = Math.max(...notes.map(it => it.id));
//     notes.push({id : highestNoteId + 1, claimId : claimId, description: note, date: new Date().toISOString().substring(0, 10)});
// }

// export const markTaskComplete = (id) => {
//     tasks = tasks.map( it => it.id === id ? {...it, status: "complete"} : it);
// }
