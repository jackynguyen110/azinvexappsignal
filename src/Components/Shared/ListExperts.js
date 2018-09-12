import React from 'react'

const ListExperts = () => {
  return (
    <div className="customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block"><a className="customizer-close"><i className="ft-x font-medium-3" /></a><a id="customizer-toggle-icon" className="customizer-toggle bg-danger"><i className="ft-settings font-medium-4 fa fa-spin white align-middle" /></a>
        <div data-ps-id="df6a5ce4-a175-9172-4402-dabd98fc9c0a" className="customizer-content p-3 ps-container ps-theme-dark">
        <h4 className="text-uppercase mb-0 text-bold-400">Theme Customizer</h4>
        <p>Customize Preview in Real Time</p>
        <hr />
        {/* Sidebar Options Starts*/}
        <h6 className="text-center text-bold-500 mb-3 text-uppercase">Sidebar Color Options</h6>
        <div className="cz-bg-color">
            <div className="row p-1">
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="pomegranate" className="gradient-pomegranate d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="king-yna" className="gradient-king-yna d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="ibiza-sunset" className="gradient-ibiza-sunset d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="flickr" className="gradient-flickr d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="purple-bliss" className="gradient-purple-bliss d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="man-of-steel" className="gradient-man-of-steel d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="purple-love" className="gradient-purple-love d-block rounded-circle" /></div>
            </div>
            <div className="row p-1">
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="black" className="bg-black d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="white" className="bg-grey d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="primary" className="bg-primary d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="success" className="bg-success d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="warning" className="bg-warning d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="info" className="bg-info d-block rounded-circle" /></div>
            <div className="col"><span style={{width: 20, height: 20}} data-bg-color="danger" className="bg-danger d-block rounded-circle" /></div>
            </div>
        </div>
        {/* Sidebar Options Ends*/}
        <hr />
        {/* Sidebar BG Image Starts*/}
        <h6 className="text-center text-bold-500 mb-3 text-uppercase">Sidebar Bg Image</h6>
        <div className="cz-bg-image row">
            <div className="col mb-3"><img src="../app-assets/img/sidebar-bg/01.jpg" width={90} className="rounded" /></div>
            <div className="col mb-3"><img src="../app-assets/img/sidebar-bg/02.jpg" width={90} className="rounded" /></div>
            <div className="col mb-3"><img src="../app-assets/img/sidebar-bg/03.jpg" width={90} className="rounded" /></div>
            <div className="col mb-3"><img src="../app-assets/img/sidebar-bg/04.jpg" width={90} className="rounded" /></div>
            <div className="col mb-3"><img src="../app-assets/img/sidebar-bg/05.jpg" width={90} className="rounded" /></div>
            <div className="col mb-3"><img src="../app-assets/img/sidebar-bg/06.jpg" width={90} className="rounded" /></div>
        </div>
        {/* Sidebar BG Image Ends*/}
        <hr />
        {/* Sidebar BG Image Toggle Starts*/}
        <div className="togglebutton">
            <div className="switch"><span>Sidebar Bg Image</span>
            <div className="float-right">
                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                <input id="sidebar-bg-img" type="checkbox" defaultChecked className="custom-control-input cz-bg-image-display" />
                <label htmlFor="sidebar-bg-img" className="custom-control-label" />
                </div>
            </div>
            </div>
        </div>
        {/* Sidebar BG Image Toggle Ends*/}
        <hr />
        {/* Compact Menu Starts*/}
        <div className="togglebutton">
            <div className="switch"><span>Compact Menu</span>
            <div className="float-right">
                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                <input id="cz-compact-menu" type="checkbox" className="custom-control-input cz-compact-menu" />
                <label htmlFor="cz-compact-menu" className="custom-control-label" />
                </div>
            </div>
            </div>
        </div>
        {/* Compact Menu Ends*/}
        <hr />
        {/* Sidebar Width Starts*/}
        <div>
            <label htmlFor="cz-sidebar-width">Sidebar Width</label>
            <select id="cz-sidebar-width" className="custom-select cz-sidebar-width float-right">
            <option value="small">Small</option>
            <option value="medium" selected>Medium</option>
            <option value="large">Large</option>
            </select>
        </div>
        {/* Sidebar Width Ends*/}
        </div>
    </div>
  
  
  )
}

export default ListExperts
