import React from 'react';
import '../css/footer.css'

function Footer() {
  return (
    <React.Fragment>

      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Wikipedia</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Wikipedia</li>
              <li>Wikibooks</li>
              <li>Wikiversityh</li>
            </ul>
          </div>
          <div className="col">
            <h1>Wikinews</h1>
            <ul>
              <li>Wiktionary</li>
              <li>Wikisource</li>
              <li>Wikiquote</li>
              <li>Wikivoyage</li>
              <li>Wikimedia Commons</li>
            </ul>
          </div>
          <div className="col">
            <h1>Wikidata</h1>
            <ul>
              <li>Wikispecies</li>
              <li>MediaWiki</li>
              <li>Wikimedia</li>
              <li>Chapters</li>
              <li>Get Chapters</li>
            </ul>
          </div>
          <div className="col">
            <h1>Organizations</h1>
            <ul>
              <li>Wikimedia</li>
              <li>Thematic</li>
              <li>Wikimedia User</li>
              <li>Site map</li>
              <li>Groups</li>

            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Open Wikipedia</li>
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul>


              <a href="https://twitter.com/explore" className="fa fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
              <a href="" className="fa fa-wikipedia-w" aria-hidden="true"></a>
              <a href="https://mtouch.facebook.com/reg/?ref=dblsoft=hjk" className="fa fa-facebook-official" aria-hidden="true"></a>

            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Footer;