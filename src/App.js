import React from "react";
import './tailwind.css'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Views/Home"
import Detail from "./Views/Detail";
import About from "./Views/About";
import Product from "./Views/Product";
import Header from './components/Header'
import Footer from './components/Footer'

//Link 는 하이퍼링크
/*
Router  > Switch > Route
*/
function App() {
  return (
    <div className="relative pb-10 min-h-screen">
          
        <Router>
                <Header/>

                <div className="p-3">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/products/:id" component={Product}/>
                        <Route path="/:id" component={Detail} />
                    </Switch>
                </div>

                <Footer />
        </Router>
  
    </div>
  );
}

export default App;
