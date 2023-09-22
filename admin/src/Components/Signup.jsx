import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {
    const [useremail,setuseremail]=useState('')
    console.log(useremail);
    const [userpassword,setuserpassword]=useState('')
    console.log(userpassword);
  return (
    <div>
        <h2>Signup</h2>
      <form style={{alignItems:'center'}}>
        {/* <label for="email">email</label> */}
        <input placeholder='your email' onChange={(e)=>setuseremail(e.target.value)} />
        {/* <label for="password">password</label> */}
        <input type='password'placeholder='your password'  onChange={(e)=>setuserpassword(e.target.value)} />
        <button onClick={async()=>{
            try {
              const response= await axios.post('http://localhost:3000/admin/signup',{username:useremail,password:userpassword})
              localStorage.setItem('token',response.data.token);
              alert('user registered successfully');
              console.log(response);
            } catch (error) {
               console.log(error); 
            }
        }}>Signup</button>
      </form>
    </div>
  )
}

export default Signup
