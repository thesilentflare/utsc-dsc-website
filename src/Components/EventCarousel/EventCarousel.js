import React, {Component, Fragment} from 'react';
import {Carousel} from 'react-bootstrap';
import {MDBBtn, MDBCol} from 'mdbreact';
import {getEvents} from '../../APIs/firebaseAPI';

class EventCarousel extends Component{
  constructor(){
    super();
    this.state = {
      eventList: [],
    };
  }
  // Component did mount function that grabs event data from firebaseAPI
  async componentDidMount(){
    //test();
    var div = this.refs.carousel;
    var eventsList = [];
    var events = getEvents().then((result)=> {
      for (var eventID in result){
        var details = JSON.parse(result[eventID]);
        // transform the date into something readable
        var date = new Date(details.Date.seconds * 1000);
        var dd = String(date.getDate()).padStart(2, '0'); // day

        var numMonthDict = {'1': 'Jan','2': 'Feb','3': 'Mar','4': 'Apr','5': 'May','6': 'Jun','7': 'Jul','8': 'Aug',
        '9': 'Sep', '10': 'Oct','11': 'Nov','12': 'Dec'};
        var mm = numMonthDict[String(date.getMonth() + 1)]; //January is 0!

        var numDayDict = {'0':"Sun", '1':"Mon", '2':"Tue", '3':"Wed", '4':"Thu", '5':"Fri", '6':"Sat"};
        var weekday = numDayDict[String(date.getDay())];
        var hr = (date.getHours()) % 12 || 12;
        var ampm = (hr < 12 || hr === 24) ? "AM" : "PM";
        var min = String(date.getMinutes()).padStart(2, '0');

        var readableDate = weekday + ", " + mm + " " + dd + "\t" + hr + ":" + min + ' ' + ampm;

        // Saves the various event info into state
        this.setState({
          eventList: [...this.state.eventList, {eventID: eventID, date: readableDate, image: details.Image, name: details.Name, signup: details.Signup, description: details.Description, location: details.Location, fees: details.Fees, link: details.Link}]
        });
      }
    });
  }

  render(){
    return(
      <div>
      <h2 className="h2-responsive">Upcoming Events</h2>
      <Carousel className="carousel"
      interval={7000}
      indicators={false}
      nextIcon={<span aria-hidden="true" className="arrows"><img src="./Assets/Carousel/dsc_next.png" width="50vw"/></span>}
      prevIcon={<span aria-hidden="true" className="arrows"><img src="./Assets/Carousel/dsc_prev.png" width="50vw"/></span>}
      >
        {/*Dynamically map events to display*/}
        {this.state.eventList.map((eventID, index)=> {
          return (
            <Carousel.Item className="event-container" key={eventID}>
              <div className="event">
                <div className="event-upper">
                  <img src={eventID.image} className="img-responsive" alt=""></img>
                  <div className="event-details">
                    <p>{eventID.description}</p>
                    <h3>{eventID.date}</h3>
                    <h3>LOC: {eventID.location}</h3>
                    <h3>Fees: {eventID.fees}</h3>
                    {eventID.link ? <a href={eventID.link} target="_blank" rel="noopener noreferrer"><MDBBtn color="primary">Signup Here</MDBBtn></a>:<Fragment/>}
                    {eventID.signup ? <h3>Requires Signup: {eventID.signup}</h3>:<Fragment/>}
                  </div>
                </div>
                <Carousel.Caption><h3 className="event-name">{eventID.name}</h3></Carousel.Caption>
                <div className="event-visual">
                  <MDBCol md='4' className="event-visual-divs" style={{backgroundColor: 'rgb(16, 120, 204)', borderRadius: '0px 0px 0px 25px'}}/>
                  <MDBCol md='4' className="event-visual-divs" style={{backgroundColor: 'rgb(239,35,61)'}}/>
                  <MDBCol md='4' className="event-visual-divs" style={{backgroundColor: '#ffc700'}}/>
                  <MDBCol md='4' className="event-visual-divs" style={{backgroundColor: 'rgb(27,186,155)', borderRadius: '0px 0px 25px 0px'}}/>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      </div>
    );
  }
}
export default EventCarousel;
