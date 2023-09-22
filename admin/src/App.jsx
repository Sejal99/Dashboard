
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import AddCourse from './Components/AddCourse';


const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/courses"} element={<AddCourse />} />
      
        </Routes>
      </Router>
     
    </div>
  )
}

export default App
