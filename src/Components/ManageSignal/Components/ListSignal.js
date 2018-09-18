import React from 'react';
import moment from 'moment';
class ListSignals extends React.Component {
 
  render() {
    const { myActiveSignals, close } = this.props
    console.log(myActiveSignals)
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
                  {myActiveSignals && myActiveSignals.map( e =>
                    <tr key={e.id}>
                      <td>
                        {e.typeSignal ? <span className="badge badge-danger">SELL</span> : <span className="badge badge-success">BUY</span>}
                        <br />
                          <b>Open Price :</b>{e.openPrice}
                      </td>
                      <td> {e.symbol.toUpperCase()}</td>
                      <td>
                        <b>Stoploss : </b> {e.stoploss} <br /><b>Takeprofit : </b>{e.takeprofit}
                        </td>
                      <td>{moment(e.startAt).format('HH:mm DD/MM/YY')}</td>
                      <td><img src="https://thumbs.gfycat.com/ImmaculateUnacceptableArizonaalligatorlizard-size_restricted.gif" alt="" height="40px" width="40px" /></td>
                      <td><a className="btn btn-raised btn-warning mr-1" type="button"> <i className="ft-edit" /> Sửa Lệnh </a>
                        <a onClick={() => close(e.id)} className="btn btn-raised btn-danger mr-1" type="button"> <i className="ft-x" /> Tắt Lệnh </a>
                      </td>
                    </tr>
                    )}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ListSignals;