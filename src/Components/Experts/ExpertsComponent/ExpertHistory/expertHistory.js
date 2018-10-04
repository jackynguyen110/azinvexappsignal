import React, { Component } from 'react';

class expertHistory extends Component {
    render() {
        return (
            <div className="row match-height">
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-header">
                        <h4 className="card-title" id="from-actions-top-bottom-left">Filter Lệnh</h4>
                        <div className="alert alert-info" role="alert">
                        <strong>Chi Tiết Lệnh</strong>
                        </div>
                        <ul className="no-list-style">
                            <li className="mb-2">
                                <span className="text-bold-500 primary"><a><i className="ft-user font-small-3" /> Tổng Số Lệnh:</a></span>
                                <span className="overflow-hidden"> ssssss</span>
                            </li>
                            <li className="mb-2">
                                <span className="text-bold-500 primary"><a><i className="ft-mail font-small-3" /> Số lệnh Thắng:</a></span>
                                <a className="overflow-hidden">sssss</a>
                            </li>
                            <li className="mb-2">
                                <span className="text-bold-500 primary"><a><i className="ft-monitor font-small-3" /> Số Lệnh Thua:</a></span>
                                <a className="overflow-hidden">123</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="px-3">
                        <form className="form">
                            <div className="form-body">
                            
                            <div className="row">
                                <div className="form-group col-md-6 mb-2">
                                <label htmlFor="issueinput3">Date Opened</label>
                                <input type="date" id="issueinput3" className="form-control" name="dateopened" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Opened" />
                                </div>
                                <div className="form-group col-md-6 mb-2">
                                <label htmlFor="issueinput4">Date Fixed</label>
                                <input type="date" id="issueinput4" className="form-control" name="datefixed" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 mb-2">
                                <label htmlFor="issueinput5">Cặp Tiền</label>
                                <select id="issueinput5" name="priority" className="form-control" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Priority">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                                </div>
                            </div>
                            
                            </div>
                            <div className="form-actions">
                            <button type="button" className="btn btn-raised btn-warning mr-1">
                                <i className="ft-x" /> Reset
                            </button>
                            <button type="button" className="btn btn-raised btn-primary">
                                <i className="fa fa-check-square-o" /> Tìm Kiếm
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                    <div className="card-header">
                        <h4 className="card-title" id="from-actions-top-bottom-right">Timesheet</h4>
                        <div className="alert alert-info" role="alert">
                        <strong>Form Actions On Top And Bottom Right.</strong>
                        </div>
                        <p className="mb-0">To add form actions on top and bottom of the form add a div with
                        <code>.form-actions</code> class to start and end the form. Add
                        <code>.right</code> class to align the form action buttons to right.</p>
                    </div>
                    <div className="card-body">
                    <table className="table table-responsive-md text-center">
                          <thead>
                            <tr>
                              
                              <th>Cặp Tiền</th>
                              <th>Stoploss</th>
                              <th>TakeProfit</th>
                              <th>Thời Gian mở</th>
                              <th>Giá mở cửa</th>
                              <th>Kết Quả</th>
                            </tr>
                          </thead>
                          <tbody>
                                <tr key=''> 
                                    <td>EURUSD</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>
                                    0
                                    </td>
                                    <td> 0 </td>
                                    <td>
                                    <button type="button" className="btn btn-raised btn-success btn-min-width mr-1 mb-1">WIN</button>
                                    </td>
                              </tr>
                              <tr key=''> 
                                    <td>EURUSD</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>
                                    0
                                    </td>
                                    <td> 0 </td>
                                    <td>
                                    <button type="button" className="btn btn-raised btn-danger btn-min-width mr-1 mb-1">LOSE</button>
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

export default expertHistory;