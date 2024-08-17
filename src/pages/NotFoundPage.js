import React from "react";
import  Image from "../assets/img/pngegg (1).png";

const NotFoundPage =()=>{
   return(
    <div style={{textAlign:"center", margin:"100px"}}>
    <img src={Image} style={{width:"300px" , height:"300px"}}></img>
    <h1>404 PAGE NOT FOUND !!</h1>
</div>
   )
}
export default NotFoundPage;