import './App.css';
import PageHeader from './Components/Site/PageHeader/PageHeader';
import Menu from './Components/Site/PageHeader/Menu';
import Footer from './Components/Site/Footer/Footer';
import RegisterClaim from './Components/Claim/NewClaim/NewClaim';
import Search from './Components/Claim/Search/Search';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewClaims from './Components/Claim/AssessClaims/AssessClaims';
import FindAClaim from './Components/Claim/Claims/FindAClaim';
import NewClaim from './Components/Claim/NewClaim/NewClaim';
import AssessClaims from './Components/Claim/AssessClaims/AssessClaims';
import { Provider } from 'react-redux';
import claimsStore from './Components/Site/Store/Store';
import ViewClaim from './Components/Claim/ViewClaim/ViewClaim';
// import AssessClaim from './Components/Claim/AssessClaims/AssessClaim';

function App() {

    return ( 
      <Provider store={claimsStore} >
        <BrowserRouter>
          <div className="App">
            <PageHeader/>
                <Routes>
                  <Route path="/newClaim" element={<NewClaim/>} />

                  <Route path="/edit/:claimId" element={<NewClaim/>} />

                  <Route path="/findAClaim" element={<FindAClaim/>} />
                  <Route path="/findAClaim/:surname" element={<FindAClaim />} />
                  <Route path="/find/:claimId" element={<FindAClaim/>} />

                  <Route path="/view/:claimId" element={<ViewClaim/>} />

                  <Route path="/assessClaims" element={<AssessClaims />} />

                  <Route path="/" element= {<h1 className="home-page" >Welcome to the application</h1>} />
                  {/* <Route path="*" element= {<PageNotFound />} /> */}
                </Routes>
            <Footer/>
          </div>

        </BrowserRouter>
    </Provider>
  );
}

export default App;



                  {/* this is working 
                  <Route path="/assessClaim/:claimId" element={<AssessClaim/>} /> */}
                  {/* <Route path="/assessClaim/:claimId" element={<NewClaim/>} /> */}