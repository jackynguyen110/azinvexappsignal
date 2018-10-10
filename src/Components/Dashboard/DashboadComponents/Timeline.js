import React, { Component } from 'react'
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';

class Timeline extends Component {

    render() {
        const { timelineContent, getNextEvents, loading, moreEvents  } = this.props
        return (
            <section id="timeline" className="timeline-center timeline-wrapper">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="content-header">THÔNG BÁO</div>
                        <p className="content-sub-header">Những cập nhật mới nhất từ các chuyên gia bạn đang theo dõi.</p>
                    </div>
                </div>
                <h3 className="page-title text-center">Timeline</h3>
                {/* <ul className="timeline">
                    <li className="timeline-line" />
                    <li className="timeline-group">
                        <a className="btn btn-raised btn-primary">
                            <i className="fa fa-calendar-o" /> Today</a>
                    </li>
                </ul> */}
                {timelineContent && timelineContent.length !== 0 && (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={getNextEvents}
                        hasMore={!loading && moreEvents}
                        initialLoad={false}
                    >
                <ul className="timeline">
                    <li className="timeline-line" />
                  
                            {timelineContent && timelineContent.map((item, index) => {

                                if (!index % 2) {
                                    return (
                                        <li key={index} className="timeline-item">
                                            <div className="timeline-badge">
                                                <span className="avatar avatar-online" data-toggle="tooltip" data-placement="left" title={"Expert: " + item.expert.displayName}>
                                                    <img src={item.expert.photoURL} className="rounded-circle" alt="avatar" width={40} />
                                                </span>
                                            </div>
                                            <div className="timeline-card card border-grey border-lighten-2">
                                                <div className="card-header">
                                                    <span className="badge badge-primary mr-1 mb-1">Ticket : {item.ticket}</span>
                                                    <span className="badge badge-info mr-1 mb-1">{item.expert.displayName}</span><br></br>
                                                    {item.type === 1 && <span className="badge badge-success mr-1 mb-1">Mở lệnh</span>}
                                                    {item.type === 2 && <span className="badge badge-info mr-1 mb-1">Thay đổi lệnh</span>}
                                                    {item.type === 3 && <span className="badge badge-danger mr-1 mb-1">Đóng lệnh</span>}
                                                   
                                                    {item.typeSignal ? <span className="badge badge-danger mr-1 mb-1"> SELL </span> : <span className="badge badge-success mr-1 mb-1"> BUY </span>}
                                                    <span className="badge badge-warning mr-1 mb-1">{item.symbol}</span><br></br>
                                                    {item.type === 1 && <span className="badge badge-success mr-1 mb-1">Open Price : {item.openPrice}</span>}
                                                    {item.type === 3 && <span className="badge badge-danger mr-1 mb-1">Close Price : {item.closePrice}</span>}
                                                    <span className="badge badge-dark mr-1 mb-1">{moment(item.createdAt.seconds * 1000).format('HH:mm DD/MM/YYYY')}</span>
                                                    {item.type === 3 && (item.profit >= 0 ? <span className="badge badge-success mr-1 mb-1">Profit : +{item.profit} pips</span> : <span className="badge badge-danger mr-1 mb-1">Profit : {item.profit} pips</span>)}
                                                    {item.type === 2 ? <div className="card-subtitle text-muted">
                                                        <button className="btn btn-white btn-raised  mr-1 mb-1" type="button">
                                                            Stoploss <span className="badge badge-danger">{item.stoploss}</span>
                                                        </button>
                                                        <button className="btn btn-white btn-raised mr-1 mb-1" type="button">
                                                            TakeProfit <span className="badge badge-danger">{item.takeprofit} </span>
                                                        </button>
                                                    </div> : <div className="card-subtitle text-muted">
                                                            <button className="btn btn-white btn-raised  mr-1 mb-1" type="button">
                                                                Stoploss <span className="badge badge-light">{item.stoploss}</span>
                                                            </button>
                                                            <button className="btn btn-white btn-raised mr-1 mb-1" type="button">
                                                                TakeProfit <span className="badge badge-light">{item.takeprofit} </span>
                                                            </button>
                                                        </div>}

                                                </div>
                                            </div>
                                        </li>)
                                } else {
                                    return (<li key={index} className="timeline-item mt-5">
                                        <div className="timeline-badge">
                                            <span className="avatar avatar-online" data-toggle="tooltip" data-placement="left" title={"Expert: " + item.expert.displayName}>
                                                <img src="http://demo.powowbox.com/powowbox/avatar_demo/Jane_0001.png" className="rounded-circle" alt="avatar" width={40} />
                                            </span>
                                        </div>
                                        <div className="timeline-card card border-grey border-lighten-2">
                                            <div className="card-header">
                                                <span className="badge badge-primary mr-1 mb-1">Ticket : {item.ticket}</span>
                                                <span className="badge badge-info mr-1 mb-1">{item.expert.displayName}</span><br></br>
                                                {item.type === 1 && <span className="badge badge-success mr-1 mb-1">Mở lệnh</span>}
                                                {item.type === 2 && <span className="badge badge-info mr-1 mb-1">Thay đổi lệnh</span>}
                                                {item.type === 3 && <span className="badge badge-danger mr-1 mb-1">Đóng lệnh</span>}

                                                
                                                {item.typeSignal ? <span className="badge badge-danger mr-1 mb-1"> SELL </span> : <span className="badge badge-success mr-1 mb-1"> BUY </span>}
                                                <span className="badge badge-warning mr-1 mb-1">{item.symbol}</span><br></br>
                                                {item.type === 1 && <span className="badge badge-success mr-1 mb-1">Open Price : {item.openPrice}</span>}
                                                {item.type === 3 && <span className="badge badge-danger mr-1 mb-1">Close Price : {item.closePrice}</span>}
                                                <span className="badge badge-dark mr-1 mb-1">{moment(item.createdAt.seconds * 1000).format('HH:mm DD/MM/YYYY')}</span><br></br>
                                                {item.type === 3 && (item.profit >= 0 ? <span className="badge badge-success mr-1 mb-1">Profit : +{item.profit} pips</span> : <span className="badge badge-danger mr-1 mb-1">Profit : {item.profit} pips</span>)}
                                                {item.type === 2 ? <div className="card-subtitle text-muted">
                                                    <button className="btn btn-white btn-raised  mr-1 mb-1" type="button">
                                                        Stoploss <span className="badge badge-danger">{item.stoploss}</span>
                                                    </button>
                                                    <button className="btn btn-white btn-raised mr-1 mb-1" type="button">
                                                        TakeProfit <span className="badge badge-danger">{item.takeprofit} </span>
                                                    </button>
                                                </div> : <div className="card-subtitle text-muted">
                                                        <button className="btn btn-white btn-raised  mr-1 mb-1" type="button">
                                                            Stoploss <span className="badge badge-light">{item.stoploss}</span>
                                                        </button>
                                                        <button className="btn btn-white btn-raised mr-1 mb-1" type="button">
                                                            TakeProfit <span className="badge badge-light">{item.takeprofit} </span>
                                                        </button>
                                                    </div>}
                                            </div>
                                        </div>
                                    </li>)
                                }
                            })}
                        </ul>
                            </InfiniteScroll>
                    )}
                   
               

                {/* <ul className="timeline">
                    <li className="timeline-line" />
                    <li className="timeline-group">
                        <a className="btn btn-raised btn-primary">
                            <i className="fa fa-calendar-o" /> Founded in 2013</a>
                    </li>
                </ul> */}
            </section>

        )
    }
}

export default Timeline
