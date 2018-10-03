import React, { Component } from 'react';

class followSignal extends Component {
    render() {
        return (
            <div className="row match-height">
            <div className="col-xl-4 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Discover People</h4>
                </div>
                <div className="card-body">
                  <div className="card-block">
                    <div className="media mb-3">
                      <img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle" src="../app-assets/img/portrait/small/avatar-s-12.png" />
                      <div className="media-body">
                        <h4 className="font-medium-1 mt-2 mb-0">Jessica Rice</h4>
                      </div>
                      <a className="d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white">Following</a>
                    </div>
                    <div className="media mb-3">
                      <img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle" src="../app-assets/img/portrait/small/avatar-s-11.png" />
                      <div className="media-body">
                        <h4 className="font-medium-1 mt-2 mb-0">Jacob Rios</h4>
                      </div>
                      <a className="d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center">Follow</a>
                    </div>
                    <div className="media mb-3">
                      <img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle" src="../app-assets/img/portrait/small/avatar-s-3.png" />
                      <div className="media-body">
                        <h4 className="font-medium-1 mt-2 mb-0">Russell Diaz</h4>
                      </div>
                      <a className="d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center">Follow</a>
                    </div>
                    <div className="media mb-3">
                      <img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle" src="../app-assets/img/portrait/small/avatar-s-6.png" />
                      <div className="media-body">
                        <h4 className="font-medium-1 mt-2 mb-0">Sara Bell</h4>
                      </div>
                      <a className="d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white">Following</a>
                    </div>
                    <div className="media mb-3">
                      <img alt="96x96" className="media-object d-flex mr-3 align-self-center bg-info height-50 rounded-circle" src="../app-assets/img/portrait/small/avatar-s-18.png" />
                      <div className="media-body">
                        <h4 className="font-medium-1 mt-2 mb-0">Janet Lucas</h4>
                      </div>
                      <a className="d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center">Follow</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Sales Analysis</h4>
                </div>
                <div className="card-body">
                  <div className="card-block">
                  <table className="table table-responsive-md text-center">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Cặp Tiền</th>
                              <th>Stoploss</th>
                              <th>TakeProfit</th>
                              <th>Thời Gian mở</th>
                              <th>Giá mở cửa</th>
                              <th>Kết Quả</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td><img className="media-object round-media" src="https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif" alt="Generic placeholder" style={{ height: 35 }} /></td>
                                <td>324234</td>
                                <td>234234</td>
                                <td>234234</td>
                                <td>
                                 
                                </td>
                                <td>234234</td>
                                <td>
                                  <button type="button" className="btn btn-raised btn-info btn-min-width mr-1 mb-1">Running...</button>
                                </td>
                              </tr>
                      
                          </tbody>
                        </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default followSignal;