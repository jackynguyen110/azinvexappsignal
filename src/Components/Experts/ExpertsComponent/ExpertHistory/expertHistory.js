import React, { Component } from 'react';
import { withFirestore } from 'react-redux-firebase'
import { connect } from 'react-redux';
import moment from 'moment'
import { getSignalHistoryForDashboard } from './expertHistoryActions';
import InfiniteScroll from 'react-infinite-scroller';
class expertHistory extends Component {
    constructor(props) {
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { firestore, expertDetail } = this.props
        let start, end;
        start = new Date(this.state.dateopened);
        end = new Date(this.state.datefixed);
        if (!this.state.dateopened) start = new Date('1980-01-01');
        if (!this.state.datefixed) end = new Date(Date.now());
        if (this.state.symbol){
      
            const signalHistoryRef = firestore.collection('signals');
            const query = signalHistoryRef
                .where('expert.id', '==', expertDetail.id)
                .where('status', '==', 'closed')
                .where('symbol', '==', this.state.symbol)
                .where('startAt', '>', start)
                .where('startAt', '<', end)
            let querySnap = await query.get();
            let signalHistory = [];
            for (let i = 0; i < querySnap.docs.length; i++) {
                let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
                signalHistory.push(evt);
            }
            this.setState({ isFilter: true, filterSignals: signalHistory })
        }
        else{
            const signalHistoryRef = firestore.collection('signals');
            const query = signalHistoryRef
                .where('expert.id', '==', expertDetail.id)
                .where('status', '==', 'closed')
                .where('startAt', '>', start)
                .where('startAt', '<', end)
            let querySnap = await query.get();
            let signalHistory = [];
            for (let i = 0; i < querySnap.docs.length; i++) {
                let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
                signalHistory.push(evt);
            }
            this.setState({ isFilter: true, filterSignals: signalHistory })
        }

    }

    state = {
        isFilter:false,
        filterSignals: [],
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
    cancelFilter = () => {
        this.setState({ isFilter: false, filterSignals: [] })
    }
    render() {
        const { expertDetail, loading } = this.props;
        const { moreEvents, loadedEvents, filterSignals } = this.state;
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
                                    <span className="overflow-hidden">{expertDetail.totalpips.toFixed(2)}</span>
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
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <div className="form-body">

                                        <div className="row">
                                            <div className="form-group col-md-6 mb-2">
                                                <label htmlFor="issueinput3">From</label>
                                                <input type="date" id="issueinput4" className="form-control" name="dateopened" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" value={this.state.dateopened}
                                                    onChange={this.handleInputChange} />
                                            </div>
                                            <div className="form-group col-md-6 mb-2">
                                                <label htmlFor="issueinput4">To</label>
                                                <input type="date" id="issueinput4" className="form-control" name="datefixed" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" value={this.state.datefixed}
                                                    onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 mb-2">
                                                <label htmlFor="issueinput5">Cặp Tiền</label>
                                                <input type="text" id="issueinput4" className="form-control" name="symbol" data-toggle="tooltip" data-trigger="hover" data-placement="top" data-title="Date Fixed" value={this.state.symbol}
                                                    onChange={this.handleInputChange} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-actions">
                                        <button onClick={() => this.cancelFilter()} type="button" className="btn btn-raised btn-warning mr-1">
                                            <i className="ft-x" /> Reset
                                        </button>
                                        <button type="button" type="submit" className="btn btn-raised btn-primary">
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
                            {!this.state.isFilter ? (loadedEvents && loadedEvents.length !== 0 && (
                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={this.getNextEvents}
                                    hasMore={!loading && moreEvents}
                                    initialLoad={false}
                                ><table className="table table-responsive-md text-center">
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


                                        <tbody>  {loadedEvents && loadedEvents.map((e, i) =>
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


                                    </table>
                                </InfiniteScroll>
                            )
                            ) : (<table className="table table-responsive-md text-center">
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


                                    <tbody>  {filterSignals && filterSignals.map((e, i) =>
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


                            </table>)}
                        
                            
                            

                                          
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