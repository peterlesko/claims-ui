import { Fragment, useReducer } from 'react';
import './NewClaim.css';

const RegisterClaim = () => {

  const emptyTransaction = {
    policyNumber: "", insuranceType: "", name: "" }

  const newClaimReducer = (existingState, data) => {
    return {...existingState, [data.field] : data.value}
  }
    
  const [newClaim, dispatch] = useReducer(newClaimReducer, emptyTransaction);

  const handleChange = (event) => {
    const dataToChange = { field: event.target.id, value: event.target.value };
    dispatch(dataToChange);
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(newClaim);
  }


  return <Fragment>

    <div className="newClaim-form">
      <h2>Register new claim</h2>

      <form onSubmit={submitForm}>

        <label htmlFor="policyNumber">Policy number</label>
        <input onChange={handleChange} id="policyNumber" value={newClaim.policyNumber} type="text" />


        <label htmlFor="insuranceType<">Insurance type</label>
        <input onChange={handleChange} id="insuranceType" value={newClaim.insuranceType} type="text" />

        <label htmlFor="name">Name</label>
        <input onChange={handleChange} id="name" value={newClaim.name} type="text" />

        {/* <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />
        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" />

        <label htmlFor=""></label>
        <input onChange={handleChange} id="" value={newClaim} type="text" /> */}

        {/* <button disabled={!valid} className="registerclaim_button" type="submit">Save</button> */}
        {/* <button disabled={saving className="registerclaim_button" type="submit">Save</button> */}

        <button className="registerclaim_button" type="submit">Save</button>
  
      </form>
    </div>

  </Fragment>

  




  // <form className="addTransactionsForm" onSubmit={submitForm} >
  //   <h2>New transaction</h2>
  //   <label htmlFor="orderId">Order Id</label>
  //   <input type="text" id="orderId" onChange={handleChange} value={newTransaction.orderId} />
  //   {/* <input type="text" id="orderId" onChange={handleChange} value={orderId} /> */}
  //   <br />
  //   <label htmlFor="date">Date</label>
  //   <input type="date" id="date" onChange={handleChange} value={newTransaction.date} />
  //   {/* <input type="date" id="date" onChange={handleChange} value={date} /> */}
  //   <br />
  //   <label htmlFor="country">Country</label>
  //   <input type="text" id="country" onChange={handleChange} value={newTransaction.country} />
  //   <br />
  //   <label htmlFor="currency">Currency</label>
  //   <input type="text" id="currency" onChange={handleChange} value={newTransaction.currency} />
  //   <br />
  //   <label htmlFor="amount">Amount</label>
  //   <input type="text" id="amount" onChange={handleChange} value={newTransaction.amount} />
  //   <br />
  //   <label htmlFor="taxCode">Tax Code</label>
  //   <input type="text" id="taxCode" onChange={handleChange} value={newTransaction.taxCode} />
  //   <br />
  //   <label htmlFor="amount">Tax Rate</label>
  //   <input type="text" id="taxRate" onChange={handleChange} value={newTransaction.taxRate} />
  //   <br />
  //   <label htmlFor="type">Type</label>
  //   <input type="text" id="type" onChange={handleChange} value={newTransaction.type} />
  //   <br />
  //   <button disabled={saving} type="submit">Save</button>
  //   <p>{message}</p>
  // </form>


  
  // return (
  //   <div className="registerClaim">
  //     <h2 class="formHeader">
  //       <b>Register new claim</b>
  //     </h2>
  //   </div>
  // )
};

export default RegisterClaim;
