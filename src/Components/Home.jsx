import React from "react";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";

const Home = ()=>{
return (
    <div>
        <Login/>
        <Register/>
        <Product/>
    </div>
)
}

export {Home}