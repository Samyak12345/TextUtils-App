import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types'
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
          msg: message,
          type:type
      })
      setTimeout(() => {
      setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = "grey";
      showAlert("Dark Mode has been enabled","sucess");
      document.title = "TextUtils-DarkMode";

      // setInterval(() => {
      //   document.title = " TextUtils is Amazing Mode"
      // },2000);
      // setInterval(() => {
      //   document.title = "Install TextUtild Now"
      // },1500);

    }
    else{
      setMode('light');
      document.body.style.background = "white";
      showAlert("Light Mode has been enabled","sucess");
      document.title = "TextUtils-LightMode";
    }
  }


  return (
    <>
      {/* <Router>   */}
      <Navbar title="TextUtils33" mode={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Route> */}
      {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
