
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import AddCourse from './Components/AddCourse';
import Courses from './Components/Courses';
import Course from './Components/Course';
import { RecoilRoot ,useSetRecoilState} from 'recoil';


const App = () => {
  return (
    //adding recoil
    <RecoilRoot>
     
    <div>
      <Router>
      <Navbar />
      <InitUser/>
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
  );
}

  function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })

            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        } catch (e) {

            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <></>
}

export default App
