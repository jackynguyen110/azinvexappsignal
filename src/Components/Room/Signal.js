import React from 'react'
const Signal = () => {
  return (
    <section id="outline-variants">
        <div className="row">
            <div className="col-12 mt-3 mb-1">
            <div className="content-header">Outline variants</div>
            <p className="content-sub-header">In need of a colored card, but not the hefty background colors they bring? Replace the default modifier classes
                with the <code>.card-outline-*</code> ones to style just the <code>border-color</code> of a card.</p>
            </div>
        </div>
        <div className="row match-height">
            
            <div className="col-md-6 col-sm-12">
            <div className="card card-outline-primary box-shadow-0 text-center">
                <div className="card-body">
                    <div className="card-block  pt-3">
                    <div className="row d-flex">
                        <div className="col align-self-center">
                            <img src="https://orojackson.com/data/avatars/l/19/19617.jpg?1469067956" alt="element 05" width={250} className="mb-1" />
                            
                        </div>
                        <div className="col align-self-center">
                            <h4 class="card-title mt-3">Nguyễn Nhật Trung</h4>
                            <p class="card-text">Expert với 4 năm kinh nghiệm giao dịch, phương pháp sử dụng chủ yếu là sóng</p>
                            <button type="button" class="btn btn-raised btn-secondary btn-min-width mr-1 mb-1">Chi Tiết</button>
                            <button type="button" class="btn btn-raised btn-primary btn-min-width mr-1 mb-1">Follow</button>
                            <ul class="no-list-style">
                                <li class="mb-2">
                                    <span class="text-bold-500 primary"><a><i class="icon-present font-small-3"></i> Tỉ lệ Thắng : </a></span>
                                    <span class="overflow-hidden"> 100%</span>
                                </li>
                                <li class="mb-2">
                                    <span class="text-bold-500 primary"><a><i class="ft-map-pin font-small-3"></i> Số Pips đạt : </a></span>
                                    <span class="overflow-hidden"> 2.300 pips</span>
                                </li>
                            </ul>
                        </div>
                        <table className="table table-responsive-sm text-center">
                            <thead>
                                <tr>
                                <th>Cặp Tiền</th>
                                <th>Ngày</th>
                                <th>Stoploss</th>
                                <th>Takeprofit</th>
                                <th>pips</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <a className="btn white btn-round btn-success">EURUSD</a></td>
                                    <td>21/1/2012</td>
                                    <td>1.222112</td>
                                    <td>1.222112</td>
                                    <td>+5 pips</td>
                                </tr>
                                <tr>
                                    <td> <a className="btn white btn-round btn-success">EURUSD</a></td>
                                    <td>21/1/2012</td>
                                    <td>1.222112</td>
                                    <td>1.222112</td>
                                    <td>+5 pips</td>
                                </tr>
                                <tr>
                                    <td> <a className="btn white btn-round btn-success">EURUSD</a></td>
                                    <td>21/1/2012</td>
                                    <td>1.222112</td>
                                    <td>1.222112</td>
                                    <td>+5 pips</td>
                                </tr>
                                <tr>
                                    <td> <a className="btn white btn-round btn-success">EURUSD</a></td>
                                    <td>21/1/2012</td>
                                    <td>1.222112</td>
                                    <td>1.222112</td>
                                    <td>+5 pips</td>
                                </tr>
                                <tr>
                                    <td> <a className="btn white btn-round btn-success">EURUSD</a></td>
                                    <td>21/1/2012</td>
                                    <td>1.222112</td>
                                    <td>1.222112</td>
                                    <td>+5 pips</td>
                                </tr>
                            </tbody>
                            </table>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

  )
}

export default Signal
