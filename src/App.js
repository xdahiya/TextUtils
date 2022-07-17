// import logo from "./logo.svg";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#082e4f';
      showAlert('Dark Mode Enabled', 'success');
      document.title = 'TextUtiles - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
      document.title = 'TextUtiles - Light Mode';
    }
  };
  return (
    <>
      <Navbar
        title="Raman"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <TextForm
        heading="Enter The Text To Anylayze"
        mode={mode}
        showAlert={showAlert}
      />

      {/* <About /> */}
    </>
  );
}

export default App;
