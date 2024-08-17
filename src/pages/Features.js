import React from "react";
import "../assets/css/pagesStyle.css"
import { Link } from "react-router-dom";


const Features =()=>{
    return (
        <div>
               <div className="header">
            <h1 className="name">Todo List</h1>
            <nav>
        <ul>
            <li class="link"><Link to={"/"}>Home</Link></li>
            <li class="link"><Link to={"/Features of My TODO list"}>Features</Link></li>
            <li class="link"><Link to={"/Features of My TODO list"}>About</Link></li>
            <li class="link"><a href="#">Contact</a></li>
        </ul>
    </nav>
            </div>
            <div className="fea-content">
                <h1 className="name-blak"> My todo service</h1>
                <p>save your tasks to remeber it easly</p>
            </div>

        </div>
    )
}
export default Features ;