import { Link } from "react-router-dom"
import "../App.css"

export const Navbar = () => {

  const nav = [
    { title: "Home", to: "/"},
    { title: "Employee List", to: "/employees"},
    { title: "Admin", to: "/admin"},
    { title: "Login", to: "/login"},

  ]



  return (
    <div className="navbar">
     
      {nav.map((e, i) => 
        <Link className="LinkBtn" key={i} to={e.to} > {e.title} </Link>
      )}

    </div>
  );
};
