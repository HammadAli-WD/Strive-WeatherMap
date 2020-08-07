import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Route
    path="/"
    exact
    component={Home}
   />
    <Route
    path="/detail"
    exact
    component={Weather} 
    />     
           
  {/*   <Route path="/city/:id" component={City} /> */}
           
    </Router>
  );
}

export default App;
