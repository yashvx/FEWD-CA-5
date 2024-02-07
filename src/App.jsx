// App.js
import BookData from './components/BookData';
import React from 'react';
import SearchBox from './components/SearchBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Logo from './components/Logo';
import RegistrationScreen from './components/RegistrationScreen';

const App = () => {
  return (
    <Router>
      <>
        <SearchBox/>
        <Logo/>
        <Register/>
        <Routes>
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<BookData />} />
          <Route path="*" element={<RegistrationScreen />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
