import React from 'react'
import MainMenu from 'Components/Shared/MainMenu';
import Navbar from 'Components/Shared/Navbar';
import Footer from 'Components/Shared/Footer';
import Notification from 'Components/Shared/Notification';
import ListExperts from 'Components/Shared/ListExperts';

const PagesTemplate = ({children}) => {
  return (
    <div className="wrapper nav-collapsed menu-collapsed">
 
        <div className="main-panel">
            <div className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PagesTemplate
