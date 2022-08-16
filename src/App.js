import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Menu from './PageHeader/Menu';
import Footer from './Footer/Footer';
import RegisterClaim from './RegisterClaim/RegisterClaim';
import Search from './Search/Search';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExistingClaim from './ExistingClaim/ExistingClaim';
import ViewClaims from './ViewClaims/ViewClaims';

function App() {

    return (
    <BrowserRouter>
      <div className="App">
        <PageHeader/>
            <Routes>
              <Route path="/registerClaim" element={<RegisterClaim/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/existingClaim" element={<ExistingClaim/>} />
              <Route path="/viewClaims" element={<ViewClaims/>} />
            </Routes>
        <Footer/>
      </div>

    </BrowserRouter>
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
