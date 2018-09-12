import React, { Component } from 'react'

 class CardHeader extends Component {
 
  render() {
    return (
        <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
          <div className="card gradient-blackberry">
            <div className="card-body">
              <div className="card-block pt-2">
                <div className="media">
                  <div className="media-body white text-left">
                    <h3 className="font-large-1 mb-0">60</h3>
                    <span>Lệnh Đang Hoạt Động</span>
                  </div>
                  <div className="media-right white text-right">
                    <i className="icon-pie-chart font-large-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
          <div className="card gradient-ibiza-sunset">
            <div className="card-body">
              <div className="card-block pt-2">
                <div className="media">
                  <div className="media-body white text-left">
                    <h3 className="font-large-1 mb-0">1200</h3>
                    <span>Tổng Số Pips</span>
                  </div>
                  <div className="media-right white text-right">
                    <i className="icon-bulb font-large-1" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
          <div className="card gradient-green-tea">
            <div className="card-body">
              <div className="card-block pt-2">
                <div className="media">
                  <div className="media-body white text-left">
                    <h3 className="font-large-1 mb-0">12.000</h3>
                    <span>Người Dùng Hoạt Động</span>
                  </div>
                  <div className="media-right white text-right">
                    <i className="icon-graph font-large-1" />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
          <div className="card gradient-pomegranate">
            <div className="card-body">
              <div className="card-block pt-2">
                <div className="media">
                  <div className="media-body white text-left">
                    <h3 className="font-large-1 mb-0">23</h3>
                    <span>Chuyên Gia</span>
                  </div>
                  <div className="media-right white text-right">
                    <i className="icon-wallet font-large-1" />
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default CardHeader
