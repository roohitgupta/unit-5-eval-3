import Employee from "../db";
import React, { useState } from "react";


export const EmployeeDetails = () => {
const [employee, setEmployee] = useState(Employee)
  


  return (
    <div className="UserCardBody">
      <div className="user_details">
        <img className="user_image" />
        <h4 className="user_name"></h4>
        <span className="user_salary">$</span>
        <span className="tasks">
          <li className="task"></li>
        </span>
        Status: <b className="status"></b>
        Title: <b className="title"></b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    </div>
  );
};
