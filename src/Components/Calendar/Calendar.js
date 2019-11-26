import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import {getEvents} from '../../APIs/firebaseAPI';

import './styles.scss'

const blue = '#3788d8'
const red = '#ea4335'
const green = '#0f9d58'
const yellow = '#fbbc04'

export default class DemoApp extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      events: []
    };
  }

  async componentDidMount(){
    getEvents().then((result)=> {
      for (var eventID in result){
        var date = eventID.substring(eventID.length-10, ).replace(/_/g,'-');
        var title = JSON.parse(result[eventID]).Name;
        var location = JSON.parse(result[eventID]).Location;
        var eventObject = { title: title, date: date, location: location };
        this.setState({
          events: [...this.state.events, eventObject]
        })
      }
    }); 
  }

  render() {
    console.log("Render State", this.state.events);
    return (
      <div>
        <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]} 
                    events={this.state.events}
                    eventColor={blue}
                    eventTextColor="white"
                    eventRender={function(info) {
                      var location = "<b>" +  (info.event.extendedProps.location || "Brian's Mom's house") + "</b>";
                      var node = document.createElement("span");
                      node.innerHTML = location;
                      info.el.appendChild(node);
                    }}/>
      </div>
    )
  }

}