import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Answers from './componnet/answers';
import Quize from './componnet/Quize';
import   NavBar from './componnet/NavBar';







class App extends Component {
 
 
  render() {
    return (
     <BrowserRouter>

       <div>
         <Switch>
         <Route path='/answers' component={Answers}/>
       
         <Quize/>
        
        </Switch>
        
      </div>
     </BrowserRouter>
     
    );
  }
}

export default App;
