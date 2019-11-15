import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBJumbotron,
  MDBIframe,
  MDBNavbarToggler
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./PastEvents.module.css";

class PastEvents extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div>
        <div className="header">
          <Router>
            <MDBNavbar color="white" light expand="md">
              <MDBNavbarBrand className="logo">
                {/*Change logo to your logo placed in public folder*/}
                <a href="/">
                  <img
                    className="navbar-brand"
                    href="/"
                    expand="lg"
                    src={process.env.REACT_APP_navbar_logo}
                    height="80"
                    width="145"
                    alt=""
                  />
                </a>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav right>
                  {/*Change/Add navbar links here*/}
                  <MDBNavItem className="links">
                    <MDBNavLink to="/pastEvents">Past Events</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="links">
                    <MDBNavLink to="/">Events</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="links">
                    <MDBNavLink to="/">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="links">
                    <MDBNavLink to="/">Calendar</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="links">
                    <MDBNavLink to="/">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/">
                      <Button variant="contained" color="primary">
                        Subscribe
                      </Button>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
          <div>
            <h1>Jason was here.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvents;
