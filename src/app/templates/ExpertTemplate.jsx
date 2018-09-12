import React from 'react'
import MainMenu from 'Components/Shared/MainMenu';
import Navbar from 'Components/Shared/Navbar';
import Footer from 'Components/Shared/Footer';
import Notification from 'Components/Shared/Notification';
import ListExperts from 'Components/Shared/ListExperts';

const state = {
    role: 'ADMIN'
}


const ExpertTemplate = ({children}) => {
  return (
    <div className="wrapper nav-collapsed menu-collapsed">
        <MainMenu/>
        <Navbar/>
        <div className="main-panel">
            <div className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
        <Notification/>
        <ListExperts/>
    </div>
  )
}

export default ExpertTemplate
