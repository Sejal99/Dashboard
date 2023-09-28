import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../../config";
const Navbar = () => {
  const navigate=useNavigate()
  const[name,setName]=useState("");
 useEffect(()=>{
  const f = async()=>{
    try {
    const res=  await axios.get(`${BASE_URL}/admin/me`,{

      headers: {
        Authorization: "bearer " + localStorage.getItem("token"),
      },
    });
    setName(res.data);
  }
  //catch errors
    catch (error) {
      console.log(error);
    }
  }
  f();
 },[])

  if(name!="")
  {
    return(
      <div>
        <button style={{cursor:'pointer'}} onClick={()=>navigate("/addCourse")}>AddCourse</button>
        <button onClick={()=>{
          navigate('/courses')
        }}>View Courses</button>

        <button onClick={()=>{
          localStorage.clear()
          window.location='/'
        }}>Logout</button>

      </div>
    )
  }
  
  else{


  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        
     <div style={{fontSize:10}}>
      <h1>Coursera</h1>
      </div>



        <div style={{display:'flex',gap:10,cursor:'pointer'}}>  
        <button style={{cursor:'pointer'}} onClick={()=>navigate("/Signup")}>Signup</button>
        
        <button style={{cursor:'pointer'}} onClick={()=>navigate("/Signin")}>Signin</button>

        
        
     </div>

   
    </div>
  )
}
}

export default Navbar
