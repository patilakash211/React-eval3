import React, { useState } from 'react';

const Register = () => {
    const [name,setname]=useState()
    const [email,setUserEmail]=useState()
    const [password,setPassword]=useState()
    const [username,setUsername]=useState()
    const [mobile,setUsermobile]=useState()
    const [info,setUserinfo]=useState()
 
    async function loadData(name,email,password,username,mobile,info){
        let obj={
            "name": name,
            "email": email,
            "password": password,
            "username": username,
            "mobile": mobile,
            "description": info
    }
    console.log(obj);
        const res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" }
    });
    let response=await res.json();
    console.log(response);
    
     if(response.error==false)
     {
         alert(response.message)
         window.location="index.html"
     }
     else{
        alert(response.message) 
     }
    
    
    }

    function RegisterData(){
        loadData(name,email,password,username,mobile,info)  
    }

  return (
    <div>
    <input type="text" name="" id="" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)} />
    <input type="text" name="" id=""  placeholder='email' onChange={(e)=>setUserEmail(e.target.value)}/>
    <input type="text" name="" id="" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
    <input type="text" name="" id="" placeholder='username'  onChange={(e)=>setUsername(e.target.value)}/>
    <input type="text" name="" id=""  placeholder='mobile' onChange={(e)=>setUsermobile(e.target.value)}/>
    <input type="text" name="" id="" placeholder='info'  onChange={(e)=>setUserinfo(e.target.value)}/>
    <button onClick={RegisterData}>Register</button>
    </div>
  )
}
export default Register;