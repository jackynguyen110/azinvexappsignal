import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase'
import { connect } from 'react-redux';
import moment from 'moment'
import { getSignalHistoryForDashboard } from './expertHistoryActions';
import InfiniteScroll from 'react-infinite-scroller';
class expertHistory extends Component {
    state = {
        moreEvents: false,
        loadingInitial: true,
        loadedEvents: [],
        contextRef: {}
    }

    async componentDidMount() {

        const { expertDetail } = this.props
        let next = await this.props.getSignalHistoryForDashboard(null, expertDetail.id);
        if (next && next.docs && next.docs.length > 1) {
            this.setState({
                moreEvents: true,
                loadingInitial: false
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.closedSignals !== nextProps.closedSignals) {
            this.setState({
                loadedEvents: [...this.state.loadedEvents, ...nextProps.closedSignals]
            });
        }
    }
    getNextEvents = async () => {
        const { closedSignals, expertDetail } = this.props;
        let lastEvent = closedSignals && closedSignals[closedSignals.length - 1];
        let next = await this.props.getSignalHistoryForDashboard(lastEvent, expertDetail.id);
        if (next && next.docs && next.docs.length <= 1) {
            this.setState({
                moreEvents: false
            });
        }
    };
    render() {
        const { expertDetail, loading } = this.props;
        const { moreEvents, loadedEvents } = this.state;
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
                                    <span className="text-bold-500 primary"><a><i className="ft-user font-small-3" /> Tổng Số Pips: </a></span>
                                    <span className="overflow-hidden">{expertDetail.totalpips}</span>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a><i className="ft-mail font-small-3" /> Số lệnh Thắng: </a></span>
                                    <a className="overflow-hidden">{expertDetail.signalWin}</a>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a><i className="ft-monitor font-small-3" /> Số Lệnh Thua: </a></span>
                                    <a className="overflow-hidden">{expertDetail.signalLoss}</a>
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
                                                <input type="text" id="issueinput4" className="form-control" name="datefixed" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" />
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
                                        <th>Ticket</th>
                                        <th>Cặp Tiền</th>
                                        <th>Giá mở cửa</th>
                                        <th>Stoploss</th>
                                        <th>Takeprofit</th>
                                        <th>Thời gian mở</th>
                                        <th>Giá đóng cửa</th>
                                        <th>Thời gian đóng</th>
                                        <th>Kết Quả</th>
                                    </tr>
                                </thead>
                                {loadedEvents && loadedEvents.length !== 0 && (
                                    <InfiniteScroll
                                        pageStart={0}
                                        loadMore={this.getNextEvents}
                                        hasMore={!loading && moreEvents}
                                        initialLoad={false}
                                    >
                                        <tbody>

                                            {loadedEvents && loadedEvents.map((e, i) =>
                                                <tr key={i}>
                                                    <td>{e.ticket}</td>
                                                    <td>{e.symbol}</td>
                                                    <td>{e.openPrice}</td>
                                                    <td>{e.stoploss}</td>
                                                    <td>{e.takeprofit}</td>
                                                    <td>{moment(e.startAt.seconds * 1000).format('HH:mm DD/MM/YY')}</td>
                                                    <td>{e.closePrice}</td>
                                                    <td>{moment(e.closeAt).format('HH:mm DD/MM/YY')}</td>
                                                    <td>
                                                        {e.profit >= 0 ? <button type="button" className="btn btn-raised btn-success btn-min-width mr-1 mb-1">+{e.profit} pips</button> : <button type="button" className="btn btn-raised btn-danger btn-min-width mr-1 mb-1">{e.profit} pips</button>}

                                                    </td>
                                                </tr>
                                            )}

                                        </tbody>
                                    </InfiniteScroll>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapState = (state) => ({
    closedSignals: state.expertHistory,
    loading: state.async.loading,
})
const actions = {
    getSignalHistoryForDashboard
};
export default connect(mapState, actions)(withFirestore(expertHistory));