import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
// import Newsitem from "./Components/Newsitem";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

export default class App extends Component {
  pagesize=14;

  render() {
   
    return (
    <>
      <Router>
        <NavBar />
                 
        <Routes>
          <Route exact path="/"  element={<News  pagesize={this.pagesize} key="general" country="in" category="general" />}  />         
         
          <Route exact path="/business" element={<News  pagesize={this.pagesize} key="business" country="in" category="business"/>} />        
          
          <Route exact path="/entertainment" element={<News  pagesize={this.pagesize} key="entertainment" country="in" category="entertainment" />} />         
          
          <Route exact path="/general" element={<News  pagesize={this.pagesize}key="general"  country="in" category="general" />} />            
          
          <Route exact path="/health" element={<News  pagesize={this.pagesize} key="health" country="in" category="health" />}  />         
          
          <Route exact path="/science" element={<News  pagesize={this.pagesize} key="science" country="in" category="science" />}/>             
          
          <Route exact path="/sports"  element={<News  pagesize={this.pagesize}key="sports"  country="in" category="sports" />} />            
          
          <Route exact path="/technology" element={<News  pagesize={this.pagesize} key="technology" country="in" category="technology" />} />         
          
         
        </Routes>
      </Router>
      </>
    );
  }
}
