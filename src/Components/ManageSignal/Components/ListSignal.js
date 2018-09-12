import React from 'react';
import { connect } from 'react-redux';

class ListSignals extends React.Component {
 
  render() {
   
    return (
      <div className="col-md-12 col-lg-8">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Các Lệnh Đang Chạy</h4>
          </div>
          <div className="card-body">
            <div className="card-block">
              <table className="table table-responsive-md-md table-striped table-bordered compact text-center table-hover">
                <thead>
                  <tr>
                    <th>Lệnh</th>
                    <th>Cặp Tiền</th>
                    <th>TL/TP</th>
                    <th>Thời Gian Vào</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className="badge badge-danger">SELL</span><br /><span>
                                <b>Open Price :</b>1.23233</span>
                        </td>
                        <td> EURUSD</td>
                        <td>
                            <b>Stoploss : </b> 1.23232 <br /><b>Takeprofit : </b>3.23222
                        </td>
                        <td>1/2/2012</td>
                        <td><img src="https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif" alt="" height="40px" width="40px" /></td>
                        <td><a className="btn btn-raised btn-warning mr-1" type="button"> <i className="ft-edit" /> Sửa Lệnh </a>
                        <a className="btn btn-raised btn-danger mr-1" type="button"> <i className="ft-x" /> Tắt Lệnh </a>
                        </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
   
  };
};


export default connect(null, null)(ListSignals);