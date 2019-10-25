import React, {Component} from "react";
import Mailchimp from 'react-mailchimp-form'
//import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
//import {Button, TextField, FormControl, FormHelperText} from '@material-ui/core';
import './Newsletter.css'

class NewsletterSub extends Component {
  render() {
    return (
<div >
<h2 className="h1-responsive"><b>Subscribe to our Newsletter</b></h2>
<Mailchimp
action={process.env.REACT_APP_Mailchimp_action_URL}

//Adding multiple fields:
fields={[
  {
    name: 'EMAIL',
    placeholder: 'Email*',
    type: 'email',
    required: true,
  },
  {
    name: 'FNAME',
    placeholder: 'Firstname*',
    type: 'text',
    required: true,
  },
  {
    name: 'LNAME',
    placeholder: 'Lastname*',
    type: 'text',
    required: true,
  }
]}
// Change predetermined language
messages = {
  {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "Asterisk fields are Required",
    duplicate: "Too many subscribe attempts for this email address",
    button: "SUBSCRIBE"
  }
}
// Add a personalized class
className='<YOUR_CLASSNAME>'
/>

</div>

    );
  }
}

export default NewsletterSub;
