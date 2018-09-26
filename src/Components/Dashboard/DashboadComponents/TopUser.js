import React, { Component } from 'react'
import ExpertCard from '../DashboadComponents/ExpertCard';
 class TopUser extends Component {
 
  render() {
      const { topExpert } = this.props
    return (
        <div className="card gradient-indigo-dark-blue white">
            <div className="card-header">
                <h4 className="card-title mb-0">TOP CHUYÊN GIA FOREX</h4>
            </div>
            <div className="card-body">
                <div className="card-block">
                
                    {topExpert && topExpert.map((e,index)=>{
                        return (<ExpertCard expert={e} />)
                    })}
            
                </div>
            </div>
        </div>
      
    )
  }
}

export default TopUser
