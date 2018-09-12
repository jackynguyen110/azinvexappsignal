import React, { Component } from 'react'
import Chat from './Chat'
class SignalRoom extends Component {
  render() {
    return (
      <div>
      <section id="about">
        <div className="row">
          <div className="col-12">
            <div className="content-header">Tín Hiệu</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
                  <div class="card-block">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" id="baseIcon-tab1" data-toggle="tab" aria-controls="tabIcon1" href="#tabIcon1" aria-expanded="true"><i class="fa fa-play"></i> Tín Hiệu Miễn Phí </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="baseIcon-tab2" data-toggle="tab" aria-controls="tabIcon2" href="#tabIcon2" aria-expanded="false"><i class="fa fa-flag"></i>Tín Hiệu VIP </a>
                    </li>
                  </ul>
                  <div class="tab-content px-1 pt-1">
                    <div role="tabpanel" class="tab-pane active" id="tabIcon1" aria-expanded="true" aria-labelledby="baseIcon-tab1">
                    <div className="card-block">
                        <table className="table table-responsive-md text-center">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Cặp Tiền</th>
                              <th>Stoploss</th>
                              <th>TakeProfit</th>
                              <th>Thời Gian mở</th>
                              <th>Thời Gian Đóng</th>
                              <th>Kết Quả</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><img className="media-object round-media" src="https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif" alt="Generic placeholder image" style={{height: 35}} /></td>
                              <td>Product 1</td>
                              <td>38.9 Ounce</td>
                              <td>$9.97</td>
                              <td>
                                
                              </td>
                              <td>$19.94</td>
                              <td>
                              <button type="button" class="btn btn-raised btn-info btn-min-width mr-1 mb-1">Running...</button>
                              </td>
                            </tr>
                            <tr>
                              <td><img className="media-object round-media" src="http://pngimages.net/sites/default/files/close-flag-png-image-74376.png" alt="Generic placeholder image" style={{height: 35}} /></td>
                              <td>Product 2</td>
                              <td>15.9 Ounce</td>
                              <td>$6.00</td>
                              <td>
                              
                              </td>
                              <td>$12.00</td>
                              <td>
                                <button type="button" class="btn btn-raised btn-success btn-min-width mr-1 mb-1">+92 pips</button>
                              </td>
                            </tr>
                            <tr>
                              <td><img className="media-object round-media" src="http://pngimages.net/sites/default/files/close-flag-png-image-74376.png" alt="Generic placeholder image" style={{height: 35}} /></td>
                              <td>Product 2</td>
                              <td>15.9 Ounce</td>
                              <td>$6.00</td>
                              <td>
                              
                              </td>
                              <td>$12.00</td>
                              <td>
                                <button type="button" class="btn btn-raised btn-danger btn-min-width mr-1 mb-1">-12 pips</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane" id="tabIcon2" aria-labelledby="baseIcon-tab2">
                      <p>Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry cotton candy oat cake fruitcake jelly chupa chups. Pudding caramels pastry powder cake soufflé wafer caramels. Jelly-o pie cupcake.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      <Chat />
      </div>
    )
  }
}
export default SignalRoom