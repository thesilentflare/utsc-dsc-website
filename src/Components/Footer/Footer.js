import React, {Component} from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdbreact';


class Footer extends Component{

  render(){
    return(
      <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4 foot">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="7">
              <h2 className="h2-responsive">Contact Us</h2>
              {/*Contact info list here*/}
              <ul className="pt-3">
                <li className="list-unstyled">
                  <MDBIcon icon="envelope"/><a href="mailto:utsc@developerstudentclub.ca">  utsc@developerstudentclub.ca</a>
                </li>
                <li className="list-unstyled">
                  <p><MDBIcon icon="map-marker-alt" /> 1265 Military Trail, Scarborough, ON M1C 1A4</p>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="5" className="footer-right">
              <iframe id="map" src={process.env.REACT_APP_google_maps} width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="footer-center pt-3">
              <p className="h7-responsive pt-1"> <img src={process.env.REACT_APP_footer_logo} alt="UofT Coat of Arms" width="30"/> All rights reserved.</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    );
  }
}
export default Footer;
