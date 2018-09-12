import React from 'react'

const Notification = () => {
  return (
    <aside id="notification-sidebar" className="notification-sidebar d-none d-sm-none d-md-block"><a className="notification-sidebar-close"><i className="ft-x font-medium-3" /></a>
        <div className="side-nav notification-sidebar-content">
            <div className="row">
            <div className="col-12 mt-1">
                <ul className="nav nav-tabs">
                <li className="nav-item"><a id="base-tab1" data-toggle="tab" aria-controls="tab1" href="#activity-tab" aria-expanded="true" className="nav-link active">Activity</a></li>
                <li className="nav-item"><a id="base-tab2" data-toggle="tab" aria-controls="tab2" href="#chat-tab" aria-expanded="false" className="nav-link">Chat</a></li>
                <li className="nav-item"><a id="base-tab3" data-toggle="tab" aria-controls="tab3" href="#settings-tab" aria-expanded="false" className="nav-link">Settings</a></li>
                </ul>
                <div className="tab-content px-1 pt-1">
                <div id="activity-tab" role="tabpanel" aria-expanded="true" aria-labelledby="base-tab1" className="tab-pane active">
                    <div id="activity" className="col-12 timeline-left">
                    <h6 className="mt-1 mb-3 text-bold-400">RECENT ACTIVITY</h6>
                    <div id="timeline" className="timeline-left timeline-wrapper">
                        <ul className="timeline">
                        <li className="timeline-line" />
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-purple bg-lighten-1"><i className="ft-shopping-cart" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="deep-purple-text medium-small">just now</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jim Doe Purchased new equipments for zonal office.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-info bg-lighten-1"><i className="fa fa-plane" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="cyan-text medium-small">Yesterday</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Your Next flight for USA will be on 15th August 2015.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-success bg-lighten-1"><i className="ft-mic" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="green-text medium-small">5 Days Ago</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-warning bg-lighten-1"><i className="ft-map-pin" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="amber-text medium-small">1 Week Ago</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-red bg-lighten-1"><i className="ft-inbox" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="deep-orange-text medium-small">2 Week Ago</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-cyan bg-lighten-1"><i className="ft-mic" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="brown-text medium-small">1 Month Ago</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-amber bg-lighten-1"><i className="ft-map-pin" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="deep-purple-text medium-small">3 Month Ago</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-badge"><span data-toggle="tooltip" data-placement="right" title="Portfolio project work" className="bg-grey bg-lighten-1"><i className="ft-inbox" /></span></div>
                            <div className="col s9 recent-activity-list-text"><a href="#" className="grey-text medium-small">1 Year Ago</a>
                            <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div id="chat-tab" aria-labelledby="base-tab2" className="tab-pane">
                    <div id="chatapp" className="col-12">
                    <h6 className="mt-1 mb-3 text-bold-400">RECENT CHAT</h6>
                    <div className="collection border-none">
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-12.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Elizabeth Elliott </h4><span className="medium-small float-right blue-grey-text text-lighten-3">5.00 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Thank you </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-6.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Mary Adams </h4><span className="medium-small float-right blue-grey-text text-lighten-3">4.14 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Hello Boo </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-11.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Caleb Richards </h4><span className="medium-small float-right blue-grey-text text-lighten-3">9.00 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Keny ! </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-18.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">June Lane </h4><span className="medium-small float-right blue-grey-text text-lighten-3">4.14 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Ohh God </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-1.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Edward Fletcher </h4><span className="medium-small float-right blue-grey-text text-lighten-3">5.15 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Love you </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-2.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Crystal Bates </h4><span className="medium-small float-right blue-grey-text text-lighten-3">8.00 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Can we </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-3.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Nathan Watts </h4><span className="medium-small float-right blue-grey-text text-lighten-3">9.53 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Great! </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-15.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Willard Wood </h4><span className="medium-small float-right blue-grey-text text-lighten-3">4.20 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Do it </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-19.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Ronnie Ellis </h4><span className="medium-small float-right blue-grey-text text-lighten-3">5.30 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Got that </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-14.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Gwendolyn Wood </h4><span className="medium-small float-right blue-grey-text text-lighten-3">4.34 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Like you </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-13.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Daniel Russell </h4><span className="medium-small float-right blue-grey-text text-lighten-3">12.00 AM</span>
                            </div>
                            <p className="text-muted font-small-3">Thank you </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-22.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Sarah Graves </h4><span className="medium-small float-right blue-grey-text text-lighten-3">11.14 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Okay you </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-9.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Andrew Hoffman </h4><span className="medium-small float-right blue-grey-text text-lighten-3">7.30 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Can do </p>
                        </div>
                        </div>
                        <div className="media mb-1"><a><img alt="96x96" src="../app-assets/img/portrait/small/avatar-s-20.png" className="media-object d-flex mr-3 bg-primary height-50 rounded-circle" /></a>
                        <div className="media-body">
                            <div className="clearfix">
                            <h4 className="font-medium-1 primary mt-1 mb-0 mr-auto float-left">Camila Lynch </h4><span className="medium-small float-right blue-grey-text text-lighten-3">2.00 PM</span>
                            </div>
                            <p className="text-muted font-small-3">Leave it </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="settings-tab" aria-labelledby="base-tab3" className="tab-pane">
                    <div id="settings" className="col-12">
                    <h6 className="mt-1 mb-3 text-bold-400">GENERAL SETTINGS</h6>
                    <ul className="list-unstyled">
                        <li>
                        <div className="togglebutton">
                            <div className="switch"><span className="text-bold-500">Notifications</span>
                            <div className="float-right">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                <input id="notifications1" defaultChecked="checked" type="checkbox" className="custom-control-input cz-bg-image-display" />
                                <label htmlFor="notifications1" className="custom-control-label" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <p>Use checkboxes when looking for yes or no answers.</p>
                        </li>
                        <li>
                        <div className="togglebutton">
                            <div className="switch"><span className="text-bold-500">Show recent activity</span>
                            <div className="float-right">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                <input id="recent-activity1" defaultChecked="checked" type="checkbox" className="custom-control-input cz-bg-image-display" />
                                <label htmlFor="recent-activity1" className="custom-control-label" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                        </li>
                        <li>
                        <div className="togglebutton">
                            <div className="switch"><span className="text-bold-500">Notifications</span>
                            <div className="float-right">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                <input id="notifications2" type="checkbox" className="custom-control-input cz-bg-image-display" />
                                <label htmlFor="notifications2" className="custom-control-label" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <p>Use checkboxes when looking for yes or no answers.</p>
                        </li>
                        <li>
                        <div className="togglebutton">
                            <div className="switch"><span className="text-bold-500">Show recent activity</span>
                            <div className="float-right">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                <input id="recent-activity2" type="checkbox" className="custom-control-input cz-bg-image-display" />
                                <label htmlFor="recent-activity2" className="custom-control-label" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                        </li>
                        <li>
                        <div className="togglebutton">
                            <div className="switch"><span className="text-bold-500">Show your emails</span>
                            <div className="float-right">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                <input id="show-emails" type="checkbox" className="custom-control-input cz-bg-image-display" />
                                <label htmlFor="show-emails" className="custom-control-label" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <p>Use checkboxes when looking for yes or no answers.</p>
                        </li>
                        <li>
                        <div className="togglebutton">
                            <div className="switch"><span className="text-bold-500">Show Task statistics</span>
                            <div className="float-right">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                <input id="show-stats" type="checkbox" className="custom-control-input cz-bg-image-display" />
                                <label htmlFor="show-stats" className="custom-control-label" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </aside>

  )
}

export default Notification
