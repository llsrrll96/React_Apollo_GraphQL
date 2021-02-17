import React from "react";
import './tailwind.css'
import {HashRouter as Router, Route} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home"
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
  <Router>
      <Header/>
      <Route exact path="/" component={Home}>

      </Route>
      <Route path="/:id" component={Detail} />
      
     <Footer />
  </Router>
  );
}

export default App;
