import React, {Component} from 'react';
import {MDBRow, MDBCol, MDBCard} from 'mdbreact';

class GoalCards extends Component{

  render(){
    return(
      <MDBRow className="goals-row">
        {/*Card 1*/}
        <MDBCol md='6' className="col-goals">
          <MDBCard
            className='card-image'
            style={{
              background:
                "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80') no-repeat center center",
                height: "auto",
                backgroundSize: "cover",
                margin: "5% 5%",
                borderRadius: "15px"
            }}
          >
            <div className='rounded-frame text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
              <div className="goals-details">
                <h5 className='blue-text'>
                <img src="./Assets/Cards/LearnIcon.png" alt="Learn" width="30"/> Learn
                </h5>
                <p>
                ...through hands-on technical workshops and training offered by Google Developers, get certified too!
                </p>
              </div>
            </div>
          </MDBCard>
        </MDBCol>

        {/*Card 2*/}
        <MDBCol md='6' className="col-goals">
          <MDBCard
            className='card-image'
            style={{
              background:
                "url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat center center",
                height: "auto",
                backgroundSize: "cover",
                margin: "5% 5%",
                borderRadius: "15px"
            }}
          top >
            <div className='rounded-frame text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
              <div className="goals-details">
                <h5 className='red-text'>
                <img src="./Assets/Cards/ShareIcon.png" alt="Learn" width="30"/> Share
                </h5>
                <p>
                ...with peers and mentors, create and maintain new networks in a community of like-minded individuals!
                </p>
              </div>
            </div>
          </MDBCard>
        </MDBCol>

        {/*Card 3*/}
        <MDBCol md='6' className="col-goals">
          <MDBCard
            className='card-image'
            style={{
              background:
                "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat center center",
                height: "auto",
                backgroundSize: "cover",
                margin: "5% 5%",
                borderRadius: "15px",
            }}
          >
            <div className='rounded-frame text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
              <div className="goals-details">
                <h5 className='green-text'>
                <img src="./Assets/Cards/ApplyIcon.png" alt="Learn" width="30"/> Apply
                </h5>
                <p>
                ...your skills in a semi-competitive, 4 month long technical project that helps real businesses and the community!
                </p>
              </div>
            </div>
          </MDBCard>
        </MDBCol>

        {/*Card 4*/}
        <MDBCol md='6' className="col-goals">
          <MDBCard
            className='card-image'
            style={{
              background:
                "url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80') no-repeat center center",
                height: "auto",
                backgroundSize: "cover",
                margin: "5% 5%",
                borderRadius: "15px"
            }}
          >
            <div className='rounded-frame text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
              <div className="goals-details">
                <h5 className='yellow-text'>
                <img src="./Assets/Cards/DeliverIcon.png" alt="Learn" width="30"/> Deliver
                </h5>
                <p>
                ...your project in a large, end-of-year showcase across University of Toronto campuses and win awesome awards!
                </p>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    );
  }
}
export default GoalCards;
