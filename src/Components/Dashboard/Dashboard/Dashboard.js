import React, { Component } from 'react'
import CardHeader from '../DashboadComponents/CardHeader';
import Timeline from '../DashboadComponents/Timeline';
import TopUser from '../DashboadComponents/TopUser';

 class Dashboard extends Component {
 
  render() {
    return (
        <div>
          <CardHeader/>
          <div class="row">
            <div class="col-md-8">
              <Timeline/>
            </div>
            <div class="col-md-4">
              <TopUser/>
            </div>
          </div>
        </div>
    )
  }
}

export default Dashboard
