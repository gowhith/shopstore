import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Productlisting from './containers/Productlisting';
import Productdetails from './containers/Productdetails';
import Notfound from './containers/Notfound';


const App = () => {
  return (
    <div>
    
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Productlisting />}/>
      <Route path="/product/:productid" element={<Productdetails />}/>
      <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
