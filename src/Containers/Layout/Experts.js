import React from 'react'
import MainMenu from '../../Components/Shared/MainMenu';
import Navbar from '../../Components/Shared/Navbar';
import Signal from '../../Components/Room/Signal';
import Footer from '../../Components/Shared/Footer';
import Notification from '../../Components/Shared/Notification';
import ListExperts from '../../Components/Shared/ListExperts';

const Experts = () => {
  return (
    <div>
        <div className="wrapper nav-collapsed menu-collapsed">
        
        <MainMenu/>
        <Navbar/>
        <div className="main-panel">
            <div className="main-content">
                <div className="content-wrapper">
                    <Signal/>

                </div>
            </div>
           <Footer/>
        </div>
        <Notification/>
        <ListExperts/>
        </div>

    </div>
  )
}

export default Experts
