import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader/PageHeader';
import Menu from './PageHeader/Menu';
import Footer from './Footer/Footer';
import RegisterClaim from './RegisterClaim/RegisterClaim';
import Search from './Search/Search';
import { useState } from 'react';

function App() {

  const [selectedPage, setSelectedPage] = useState("newClaim");

  return (
    <div className="App">

      <PageHeader setSelectedPage={setSelectedPage} />

      {selectedPage === "newClaim" && <RegisterClaim />}
      {selectedPage === "search" && <Search />}

      <Footer />

    </div>
  );
}

export default App;
