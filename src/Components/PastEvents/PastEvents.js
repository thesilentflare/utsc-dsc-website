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
import "../../Main/Landing.css";
import "./PastEvents.module.css";
import EventBox from "../EventBox/EventBox";
import { getEvents } from "../../APIs/firebaseAPI";

class PastEvents extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      eventList: []
    };
    this.myRef = React.createRef();
  }

  // Component did mount function that grabs event data from firebaseAPI
  async componentDidMount() {
    //test();
    var div = this.refs.carousel;
    var eventsList = [];
    var events = getEvents().then(result => {
      for (var eventID in result) {
        var details = JSON.parse(result[eventID]);
        // transform the date into something readable
        var date = new Date(details.Date.seconds * 1000);
        var dd = String(date.getDate()).padStart(2, "0"); // day

        var numMonthDict = {
          "1": "Jan",
          "2": "Feb",
          "3": "Mar",
          "4": "Apr",
          "5": "May",
          "6": "Jun",
          "7": "Jul",
          "8": "Aug",
          "9": "Sep",
          "10": "Oct",
          "11": "Nov",
          "12": "Dec"
        };
        var mm = numMonthDict[String(date.getMonth() + 1)]; //January is 0!

        var numDayDict = {
          "0": "Sun",
          "1": "Mon",
          "2": "Tue",
          "3": "Wed",
          "4": "Thu",
          "5": "Fri",
          "6": "Sat"
        };
        var weekday = numDayDict[String(date.getDay())];
        var hr = date.getHours() % 12 || 12;
        var ampm = hr < 12 || hr === 24 ? "AM" : "PM";
        var min = String(date.getMinutes()).padStart(2, "0");

        var readableDate =
          weekday + ", " + mm + " " + dd + "\t" + hr + ":" + min + " " + ampm;

        // Saves the various event info into state
        this.setState({
          eventList: [
            ...this.state.eventList,
            {
              eventID: eventID,
              date: readableDate,
              image: details.Image,
              name: details.Name,
              signup: details.Signup,
              description: details.Description,
              location: details.Location,
              fees: details.Fees,
              link: details.Link
            }
          ]
        });
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
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
        </div>
        <div className="jumbotron content" ref="hook">
          <MDBJumbotron className="hook">
            <div className="row">
              <div className="col-md-4 text-center">
                <h3>Current Events</h3>
                {this.state.eventList.map((eventID, index) => {
                  return (
                    <EventBox
                      title={eventID.name}
                      img={eventID.image}
                      date={eventID.date}
                    />
                  );
                })}
                <h3>Past Events</h3>
              </div>

              <div class="col-lg-8 text-center">
                1/Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsumv3
              </div>
            </div>
          </MDBJumbotron>
        </div>
      </div>
    );
  }
}

export default PastEvents;
