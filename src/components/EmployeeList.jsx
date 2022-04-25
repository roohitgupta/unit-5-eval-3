import { EmployeeDetails } from "./EmployeeDetails";
import Employee from "../db";
import React, { useState } from "react";
import "../App.css"

export const EmployeeList = () => {
  const [employee, setEmployee] = useState(Employee)



  return (

    <>
    {Employee.map((current) => (
        <>
          <div className="list_container">
            {/* On clicking this card anywhere, user goes to user details */}
            <div className="employee_card">
              <img className="employee_image"src="{current.imgae}" />
              <div
               className="employee_name">{current.employee_name}</div>
              <div className="employee_title">{current.title}</div>
              <div className="salary">{current.salary}</div>
            </div>
          </div>
          </>
    ))}
        </>



  );
};
