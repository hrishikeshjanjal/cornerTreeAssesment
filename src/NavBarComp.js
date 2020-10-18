import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JobSeeker from "./JobSeeker";
import Recruiter from "./Recruiter";
import ContactUs from "./ContactUs";
const NavBarComp = () => {
  return (
    <div className="navbar">
      <img
        src="https://i.pinimg.com/originals/2d/6d/78/2d6d78cb202b3771de194b3a68be706c.jpg"
        alt="logo"
      ></img>

      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/jobseeker">JobSeeker{JobSeeker}</Link>
          <Link to="/recruiter">Recruiter{Recruiter}</Link>
          <Link to="/contact">Expert Advice{ContactUs}</Link>
          <Switch>
            <Route path="/contact" component={ContactUs} />
            <Route path="/jobseeker" component={JobSeeker} />
            <Route path="/recruiter" component={Recruiter} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default NavBarComp;

// <Nav.Link href="#features">Job Seeker</Nav.Link>
//         <Nav.Link href="#pricing">Recruiter</Nav.Link>
