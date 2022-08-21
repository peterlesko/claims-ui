import './App.css';
import PageHeader from './Components/Site/PageHeader/PageHeader';
import Menu from './Components/Site/PageHeader/Menu';
import Footer from './Components/Site/Footer/Footer';
import RegisterClaim from './Components/Claim/NewClaim/NewClaim';
import Search from './Components/Claim/Search/Search';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExistingClaim from './Components/Claim/ExistingClaim/ExistingClaim';
import ViewClaims from './Components/Claim/AssessClaims/AssessClaims';
import FindAClaim from './Components/Claim/Claims/FindAClaim';
import NewClaim from './Components/Claim/NewClaim/NewClaim';
import AssessClaims from './Components/Claim/AssessClaims/AssessClaims';
import { Provider } from 'react-redux';
import claimsStore from './Components/Site/Store/Store';

function App() {

    return ( 
      <Provider store={claimsStore} >
        <BrowserRouter>
          <div className="App">
            <PageHeader/>
                <Routes>
                  <Route path="/newClaim" element={<NewClaim/>} />
                  <Route path="/findAClaim" element={<FindAClaim/>} />
                  <Route path="/findAClaim/:surname" element={<FindAClaim />} />
                  <Route path="/existingClaim" element={<ExistingClaim/>} />
                <Route path="/assessClaims" element={<AssessClaims/>} />
                </Routes>
            <Footer/>
          </div>

        </BrowserRouter>
    </Provider>
  );

  // const [selectedPage, setSelectedPage] = useState("newClaim");

  // return (
  //   <div className="App">

  //     <PageHeader setSelectedPage={setSelectedPage} />

  //     {selectedPage === "newClaim" && <RegisterClaim />}
  //     {selectedPage === "search" && <Search />}

  //     <Footer />

  //   </div>
  // );
}

export default App;
