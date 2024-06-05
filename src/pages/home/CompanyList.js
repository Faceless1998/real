import React from "react";
import { Link } from "react-router-dom";
import { options } from "./Data";

const CompanyList = () =>{
    return(
        <div>

            <h1>კომპანიების სია</h1>
            <ul>
                {
                    options.map( (option, index) =>(
                        <li key={index}>
                            <Link to={`/info/partners/${option.id}`} >{option.companyName}</Link>
                        </li>
                    )
                 )
                }
            </ul>
        </div>
    )
}

export default CompanyList;