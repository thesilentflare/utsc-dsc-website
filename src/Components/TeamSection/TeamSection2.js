import React, {Component} from "react";
import "./TeamSection.css";
import {getMembers} from '../../APIs/firebaseAPI';

// Dynamic Loading Version of Team Section
class TeamSection2 extends Component {
  constructor(){
    super();
    this.state = {
      execList: [],
      membList: [],
    };
  }

  componentDidMount(){
    var execs = getMembers("dsc-execs").then((result)=> {
      for (var exec in result){
        var details = JSON.parse(result[exec]);
        this.setState({
          execList: [...this.state.execList, {name: details.Name, position: details.Position, image: details.Image}]
        });
        console.log(this.state.execList);
      }
    });

    var execs = getMembers("dsc-members").then((result)=> {
      for (var memb in result){
        var details = JSON.parse(result[memb]);
        this.setState({
          membList: [...this.state.membList, {name: details.Name, position: details.Position, image: details.Image}]
        });
        console.log(this.state.membList);
      }
    });
    //console.log(this.state.execList);
  }

  render() {
    return (
      <div class="container pt-1 my-5 z-depth-1">
        <section class="p-md-3 mx-md-5 text-lg-left">
          <h2 class="font-weight-bold mb-4 pb-4">Our Team</h2>
          <h3 class="font-weight-bold mb-4 pb-4">Execs</h3>
          <div class="row">
            {this.state.execList.map((exec, index)=> {
              return (
                <div class="col-lg-4 col-sm-6 mb-5" key={exec}>
                  <div class="row d-flex align-items-center">
                    <div
                      class="col-5 avatar w-100 white d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={exec.image}
                        class="img-fluid rounded-circle z-depth-1"
                      />
                    </div>
                    <div class="col-7">
                      <h6 class="font-weight-bold pt-2">{exec.name}</h6>
                      <p class="text-muted">
                        {exec.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <h3 class="font-weight-bold mb-4 pb-4">Members</h3>
          <div class="row">
            {this.state.membList.map((memb, index)=> {
              return (
                <div class="col-lg-4 col-sm-6 mb-5" key={memb}>
                  <div class="row d-flex align-items-center">
                    <div
                      class="col-5 avatar w-100 white d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={memb.image}
                        class="img-fluid rounded-circle z-depth-1"
                      />
                    </div>
                    <div class="col-7">
                      <h6 class="font-weight-bold pt-2">{memb.name}</h6>
                      <p class="text-muted">
                        {memb.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
export default TeamSection2;
