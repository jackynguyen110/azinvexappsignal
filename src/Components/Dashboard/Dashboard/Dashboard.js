import React, { Component } from 'react'
import CardHeader from '../DashboadComponents/CardHeader';
import Timeline from '../DashboadComponents/Timeline';
import TopUser from '../DashboadComponents/TopUser';

 class Dashboard extends Component {
 
  render() {
    return (
        <div>
          <CardHeader/>
        <div className="row">
          <div className="col-md-8">
              <Timeline/>
            </div>
          <div className="col-md-4">
              <TopUser/>
            </div>
          </div>
        </div>
    )
  }
}

export default Dashboard
