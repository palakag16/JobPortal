import React from 'react'
import "./App.css"
import Dashboard from './Pages/Dashboard'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import TopHeading from './Components/TopHeading';
import Login from './Pages/Login';
import Home from "./Pages/Home";
import WelcomeScreen from './Components/WelcomeScreen';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from './Components/PrivateRoute';
const App = () => {
  return (
    <>
      <Router>
        <TopHeading/>
        <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/home" element={
          <PrivateRoute>
              <Home />
          </PrivateRoute>} />
          <Route exact path="/welcome" element={
          <PrivateRoute>
              <WelcomeScreen />
          </PrivateRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App