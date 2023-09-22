import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
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

export default Navbar
