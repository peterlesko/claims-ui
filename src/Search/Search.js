import './Search.css';

const Search = () => {

  return (

    <div class="search">

      <div class="searchClaims">

        <h2 class="formHeader"><b>Search claims</b></h2>

        <form action="gfgfdg.html" method="get">

          <label for="policyNumber">Policy Number *</label>
          <input type="text" name="policyNumber" id="policyNumber" required />

          <label for="surname">Surname *</label>
          <input type="text" name="surname" id="surname" required />

          <button type="search" class="Search"><b>Search</b></button>
        </form>

      </div>


      <table class="searchTable" >
        <thead>
          <tr>
            <th>Policy number</th>
            <th>Surname</th>
            <th>Claim Date</th>
            <th>Status</th>
            <th>Open Claim</th>
          </tr>
        </thead>

        <tbody>
          <td>1234</td>
          <td>Smith</td>
          <td>30/10/2021</td>
          <td>processed</td>
          <td>
            <button type="search" class="Search">Search</button>
          </td>
        </tbody>

        <tbody>
          <td>5678</td>
          <td>Clark</td>
          <td>28/12/2019</td>
          <td>in progress</td>
          <td>
            <button type="search" class="Search">Search</button>
          </td>
        </tbody>
      </table>

    </div>

    // <div className="search">
    //     <p>Search Page</p>
    // </div>


  )
};

export default Search;