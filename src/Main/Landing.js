import React, { Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink,
MDBCollapse, MDBJumbotron, MDBIframe, MDBNavbarToggler} from 'mdbreact';
import {Button} from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import * as comp from "../Components";
import './Landing.css';

class Landing extends Component{
  constructor(){
    super();
    this.state = {
      isOpen: false,
    };
    this.myRef = React.createRef();
}
  // function that handles navbar hamburger opening/closing
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  // function that handles scrolling to the passed in ref
  scrollTo = (ref) => {
    var r = ref;
    window.scrollTo(0, r.offsetTop-100);
    this.collapse();
  }
  // main render function
  render(){
    return(
      <div className="wrapper">
        {/*Top Navbar Component*/}
        <div className="header">
          <Router>
            <MDBNavbar color="white" light expand="md">
              <MDBNavbarBrand className="logo">
                {/*Change logo to your logo placed in public folder*/}
                <a onClick={()=>this.scrollTo(this.refs.hook)}>
                  <img className="navbar-brand" href="/" expand="lg"
                    src={process.env.REACT_APP_navbar_logo} height="80" width="145" alt=""/></a>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                  <MDBNavbarNav right>
                    {/*Change/Add navbar links here*/}
                    <MDBNavItem className="links">
                      <MDBNavLink  onClick={()=>this.scrollTo(this.refs.carousel)}>
                        Events
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="links">
                      <MDBNavLink onClick={()=>this.scrollTo(this.refs.about)}>
                        About
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="links">
                      <MDBNavLink onClick={()=>this.scrollTo(this.refs.calendar)}>
                        Calendar
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="links">
                      <MDBNavLink onClick={()=>this.scrollTo(this.refs.footer)}>
                        Contact
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink onClick={()=>this.scrollTo(this.refs.subscribe)}>
                        <Button variant="contained" color="primary">
                          Subscribe
                        </Button>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </div>

        {/*First Component "Banner Hook" that people will see*/}
        <div className="content" ref="hook">
          <MDBJumbotron className="hook">
            <div className="hook-left">
              <p className="h5-responsive">
                Creating impact and <strong>empowering</strong></p>
              <p className="h5-responsive">
                <strong>students</strong> through technology.</p>
              {/*Fancy typing animation text here*/}
              <div className="typewriter">
                <div className="typewriter-text">
                  android:text="@string/hello_world"
                </div>
              </div>
            </div>
          </MDBJumbotron>

          {/*Event Carousel that grabs data from state (Fully dynamic)*/}
          <div className="section-carousel" ref="carousel">
            <comp.EventCarousel/>
          </div>

          {/*About section*/}
          <div className="section-about" ref="about">
            <h3 className="h6-responsive">About Us</h3>
            <p>
              The developer student clubs at the University of Toronto seek to provide
              students on the Saint George, Missisauga, and Scarborough campuses with
              opportunities to understand, work with the latest and greatest in technology.
              We focus on promoting student innovation, enabling collaboration between
              students and their local communities, and empowering students to overcome
              fears and misconceptions towards how difficult it is to get started with tech.
            </p>
          </div>

          {/*Goal cards section*/}
          <div className="section-goals" ref="goals">
              <comp.GoalCards/>
          </div>

          {/*Google Calendar embed section*/}
          <div className="section-calendar" ref="calendar">
            <h2 className="h6-responsive"><b>Calendar</b></h2>
            <MDBIframe src={process.env.REACT_APP_google_cal} frameborder="0" scrolling="no"/>
          </div>

          {/*Mailchimp Newsletter Signup Section*/}
          <div className="section-newsletter" ref="subscribe">
            <comp.NewsletterSub/>
          </div>
        </div>

        {/*Footer Section*/}
        <div className="footer" ref="footer">
          <comp.Footer/>
        </div>
      </div>
    );
  }
}
export default Landing;
