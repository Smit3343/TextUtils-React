import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(msg,type)=>{
    setalert({
      message:msg,
      type:type
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
     <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About us" />
      <Alert alert={alert} />
      
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter The Text to Analyze Below" />}/>
        </Routes>
      </div>
     </BrowserRouter>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About Text here"
}
