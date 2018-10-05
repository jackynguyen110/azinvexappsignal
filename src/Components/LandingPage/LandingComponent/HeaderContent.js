import React  from 'react';
import landingBG from '../../../assets/landingImages/landingBG.jpg';

const HeaderContent = () => {
  return (
    <div className="page-header header-filter" data-parallax="true"
         style={{ backgroundImage: `url(${landingBG})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title">Your Story Starts With Us.</h1>
            <h4>Every landing page needs a small description after the big bold title, that&apos;s why we added this
              text here. Add here all the information that can make you or your product create the first
              impression.</h4>
            <br />
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                 className="btn btn-danger btn-raised btn-lg">
                <i className="fa fa-play" /> Watch video
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderContent;
