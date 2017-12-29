/**
 * Created by CameronMerten on 10/19/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchBlog} from '../actions/index'
import {
  Dialog,
} from "@blueprintjs/core"
import bikes1 from '../images/bikeShopPics/bikes1.JPG'

const footerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridGap: '20px',
  paddingTop:"20px",
  marginLeft:'50px',
  marginRight:'50px'
}

class Footer extends Component {
  state = {ownerIsOpen: false, hoursIsOpen: false, missionIsOpen: false}
  toggleOwnerDialog = () => this.setState({ ownerIsOpen: !this.state.ownerIsOpen })
  toggleHoursDialog = () => this.setState({ hoursIsOpen: !this.state.hoursIsOpen })
  toggleMissionDialog = () => this.setState({ missionIsOpen: !this.state.missionIsOpen })


  renderOwnerPopUp(){
    return(
      <li>
        <button className="pt-button pt-minimal" onClick={this.toggleOwnerDialog}>
          Local Owner
        </button>
        <Dialog
          isOpen={this.state.ownerIsOpen}
          onClose={this.toggleOwnerDialog}
          title="About Greg DerTorossian"
        >

          <div className="pt-dialog-body" style={{'width':'90%','fontSize':'120%'}}>
            <img src={bikes1} style={{'height':'200px', 'width':'90%'}}/>
            <div style={{'fontSize':'120%', 'marginTop':'20px'}}>
              <p>I have been passionate about biking since I was a child riding in the Saratoga hills.  Initially I rode a Schwinn Stingray, and then evolved to riding BMX bikes for fun. In my 30’s I discovered the joys of both mountain bike riding and road riding.</p>

              <p> My passion for mountain bikes lead my to co-coaching the Woodside Beasts, a high school mountain bike team.  I also enjoy racing various enduro series through out the West.  Perhaps the greatest joy for me has been the people I have meet through biking.  </p>
              <p> I am thrilled to share my passion with you through the Woodside Bike Shop.</p>
            </div>
          </div>
        </Dialog>
      </li>

    )
  }

  renderMission(){
    return(
      <li>
        <button className="pt-button pt-minimal" onClick={this.toggleMissionDialog}>
          Mission
        </button>
        <Dialog
          isOpen={this.state.missionIsOpen}
          onClose={this.toggleMissionDialog}
          title="Woodside Bike Shop Mission"
        >
          <div className="pt-dialog-body" style={{'width':'90%','fontSize':'120%'}}>
            <img src={bikes1} style={{'height':'200px', 'width':'80%'}}/>
            <div style={{'fontSize':'120%', 'marginTop':'20px'}}>
              <p>Our mission is to serve our local community with the best information, products and service.</p>
            </div>
          </div>
        </Dialog>
      </li>
    )
  }


  render() {
    //console.log('footer state', this.state)
    return (
      <div style={footerStyle}>

        <ul style={{'gridColumn':'2/3', 'gridRow':'1', 'listStyle': 'none'}}>
          <strong>About Us</strong>
          {this.renderOwnerPopUp()}
          {this.renderMission()}
        </ul>


      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchBlog})(Footer)
