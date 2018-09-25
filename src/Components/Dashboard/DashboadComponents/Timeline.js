import React, { Component } from 'react'

 class Timeline extends Component {
 
  render() {
      const { timelineContent } = this.props
    return (
        <section id="timeline" className="timeline-center timeline-wrapper">
            <div className="row">
                <div className="col-sm-12">
                <div className="content-header">Vertical Timeline</div>
                <p className="content-sub-header">This vertical timeline contain post with photos, videos, charts and map to make timeline more effective.</p>
                </div>
            </div>
            <h3 className="page-title text-center">Timeline</h3>
            <ul className="timeline">
                <li className="timeline-line" />
                <li className="timeline-group">
                <a className="btn btn-raised btn-primary">
                    <i className="fa fa-calendar-o" /> Today</a>
                </li>
            </ul>
            <ul className="timeline">
                <li className="timeline-line" />
                {timelineContent && timelineContent.map((item,index)=>{
               
                    if(!index%2){
                        return(
                        <li key={index} className="timeline-item">
                            <div className="timeline-badge">
                                    <span className="avatar avatar-online" data-toggle="tooltip" data-placement="left" title={"Expert: "+item.expert.username}>
                                    <img src="http://demo.powowbox.com/powowbox/avatar_demo/Jane_0001.png" className="rounded-circle" alt="avatar" width={40} />
                                </span>
                            </div>
                            <div className="timeline-card card border-grey border-lighten-2">
                                <div className="card-header">
                                        <span className="badge badge-primary mr-1 mb-1">Ticket : {item.ticket}</span>
                                        <span className="badge badge-info mr-1 mb-1">{item.expert.username}</span>
                                        <span className="badge badge-success mr-1 mb-1">{item.type == 1 ? "Mở lệnh" : (item.type == 2 ? "Thay đổi lệnh" : "Đóng lệnh")}</span>
                                        <span className="badge badge-dark mr-1 mb-1">{item.createdAt.seconds}</span>
                                        {item.typeSignal ? <span className="badge badge-danger mr-1 mb-1"> SELL </span> : <span className="badge badge-success mr-1 mb-1"> BUY </span>}
                                       <span className="badge badge-warning mr-1 mb-1">{item.symbol}</span>


                                    <div className="card-subtitle text-muted">
                                        <button className="btn btn-white btn-raised  mr-1 mb-1" type="button">
                                                Stoploss <span className="badge badge-light">{item.stoploss}</span>
                                        </button>
                                        <button className="btn btn-white btn-raised mr-1 mb-1" type="button">
                                                TakeProfit <span className="badge badge-light">{item.takeprofit} </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }else{
                        return (<li key={index}  className="timeline-item mt-5">
                            <div className="timeline-badge">
                                <span className="avatar avatar-online" data-toggle="tooltip" data-placement="left" title="Expert : Nguyễn Nhật Trung">
                                    <img src="http://demo.powowbox.com/powowbox/avatar_demo/Jane_0001.png" className="rounded-circle" alt="avatar" width={40} />
                                </span>
                            </div>
                            <div className="timeline-card card border-grey border-lighten-2">
                                <div className="card-header">
                                    <span className="badge badge-primary mr-1 mb-1">Ticket : {item.ticket}</span>
                                    <span className="badge badge-info mr-1 mb-1">{item.expert.username}</span>
                                    <span className="badge badge-success mr-1 mb-1">{item.type == 1 ? "Mở lệnh" : (item.type == 2 ? "Thay đổi lệnh" : "Đóng lệnh")}</span>
                                    <span className="badge badge-dark mr-1 mb-1">{item.createdAt.seconds}</span>
                                    {item.typeSignal ? <span className="badge badge-danger mr-1 mb-1"> SELL </span> : <span className="badge badge-success mr-1 mb-1"> BUY </span>}
                                    <span className="badge badge-warning mr-1 mb-1">{item.symbol}</span>


                                    <div className="card-subtitle text-muted">
                                        <button className="btn btn-white btn-raised  mr-1 mb-1" type="button">
                                            Stoploss <span className="badge badge-light">{item.stoploss}</span>
                                        </button>
                                        <button className="btn btn-white btn-raised mr-1 mb-1" type="button">
                                            TakeProfit <span className="badge badge-light">{item.takeprofit} </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                })}
                
            </ul>
            
            <ul className="timeline">
                <li className="timeline-line" />
                <li className="timeline-group">
                <a className="btn btn-raised btn-primary">
                    <i className="fa fa-calendar-o" /> Founded in 2013</a>
                </li>
            </ul>
        </section>

    )
  }
}

export default Timeline
