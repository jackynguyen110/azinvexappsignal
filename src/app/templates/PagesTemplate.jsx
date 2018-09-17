import React from 'react'

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
