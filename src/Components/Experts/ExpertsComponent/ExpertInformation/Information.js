import React, { Component } from 'react'

class Information extends Component {
  
  render() {
    const { expertDetail } = this.props
    return (
      <section id="about">
      <div className="row">
        <div className="col-12">
          <div className="content-header">About</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Personal Information</h5>
            </div>
            <div className="card-body">
              <div className="card-block">
                <div className="mb-3">
                  <span className="text-bold-500 primary">About Me:</span>
                    <span className="display-block overflow-hidden">{expertDetail.information.about}
                  </span>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <ul className="no-list-style">
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="icon-present font-small-3" /> Birthday:</a></span>
                          <span className="display-block overflow-hidden">{new Date(expertDetail.information.birthday.seconds * 1000).toLocaleDateString('en-GB')}</span>
                      </li>
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-map-pin font-small-3" /> Birthplace:</a></span>
                          <span className="display-block overflow-hidden">{expertDetail.information.birthplace}</span>
                      </li>
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-globe font-small-3" /> Lives in:</a></span>
                          <span className="display-block overflow-hidden">{expertDetail.information.address}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <ul className="no-list-style">
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-user font-small-3" /> Gender:</a></span>
                          <span className="display-block overflow-hidden">{expertDetail.information.sex ? "Male" : "Female"}</span>
                      </li>
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-mail font-small-3" /> Email:</a></span>
                          <a className="display-block overflow-hidden">{expertDetail.email}</a>
                      </li>
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-monitor font-small-3" /> Website:</a></span>
                          <a className="display-block overflow-hidden">{expertDetail.information.website}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <ul className="no-list-style">
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-smartphone font-small-3" /> Phone Number:</a></span>
                          <span className="display-block overflow-hidden">{expertDetail.information.phone}</span>
                      </li>
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-briefcase font-small-3" /> Occupation:</a></span>
                          <span className="display-block overflow-hidden">{expertDetail.information.occupation}</span>
                      </li>
                      <li className="mb-2">
                        <span className="text-bold-500 primary"><a><i className="ft-book font-small-3" /> Joined:</a></span>
                          <span className="display-block overflow-hidden">{new Date(expertDetail.joined.seconds * 1000).toLocaleDateString('en-GB')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Educational Information</h5>
            </div>
            <div className="card-body">
              <div className="card-block">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <ul className="no-list-style">
                      <li className="mb-2">
                        <span className="primary text-bold-500"><a><i className="ft-home font-small-3" /> Broklin Institute</a></span>
                        <span className="grey line-height-0 display-block mb-2 font-small-2">2008 - 2009</span>
                        <span className="line-height-2 display-block overflow-hidden">Professor: Leonardo Stagg. Six months of best Developing tools course.</span>
                      </li>
                      <li className="mb-2">
                        <span className="primary text-bold-500"><a><i className="ft-home font-small-3" /> The Ninja College </a></span>
                        <span className="grey line-height-0 display-block mb-2 font-small-2">2012 - 2013</span>
                        <span className="line-height-2 display-block overflow-hidden">Professor: Steve Ustreil. Gave me the best educational information for Ninja.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <ul className="no-list-style">
                      <li className="mb-2">
                        <span className="primary text-bold-500"><a><i className="ft-home font-small-3" /> Ninja Developer</a></span>
                        <span className="grey line-height-0 display-block mb-2 font-small-2">2009-2011</span>
                        <span className="line-height-2 display-block overflow-hidden">Ninja Developer for the “PIXINVENT” creative studio. </span>
                      </li>
                      <li className="mb-2">
                        <span className="primary text-bold-500"><a><i className="ft-home font-small-3" /> Senior Ninja Developer</a></span>
                        <span className="grey line-height-0 display-block mb-2 font-small-2">2014-Now</span>
                        <span className="line-height-2 display-block overflow-hidden">Senior Ninja Developer for the “PIXINVENT” creative studio.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
    
    )
  }
}
export default Information