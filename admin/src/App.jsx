
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import AddCourse from './Components/AddCourse';
import Courses from './Components/Courses';
import Course from './Components/Course';
import { RecoilRoot } from 'recoil';


const App = () => {
  return (
    <RecoilRoot>
    <div>
      <Router>
      <Navbar />
        <Routes>
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/addCourse"} element={<AddCourse />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/course/:courseId"} element={<Course />} />

      
        </Routes>
      </Router>
     
    </div>
    </RecoilRoot>
  )
}

export default App
