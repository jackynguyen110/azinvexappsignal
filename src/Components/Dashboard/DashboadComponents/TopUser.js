import React, { Component } from 'react'

 class TopUser extends Component {
 
  render() {
      const { topExpert } = this.props
      console.log(topExpert)
    return (
        <div className="card gradient-indigo-dark-blue white">
            <div className="card-header">
                <h4 className="card-title mb-0">TOP CHUYÊN GIA FOREX</h4>
            </div>
            <div className="card-body">
                <div className="card-block">
                    {topExpert && topExpert.map((e,index)=>{
                        return(
                        <div key={index} className="media mb-3">
                            <img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle" src="https://i0.wp.com/lh5.ggpht.com/-pxXiHXa2svo/U2fKbxgG_AI/AAAAAAAAM1A/SDmS69UMhik/s0/DipNT5Z_.png" />
                            <div className="media-body">
                                <h4 className="font-medium-1 mt-2 mb-0">Jacob Rios</h4>
                            </div>
                            <a className="d-flex ml-3 btn btn-raised btn-round gradient-man-of-steel btn-outline-grey py-2 width-150 justify-content-center">Follow</a>
                        </div>)
                    })}
            
                </div>
            </div>
        </div>
      
    )
  }
}

export default TopUser
