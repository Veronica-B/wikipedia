import React from 'react';
import Footer from '../components/footer';
import '../css/home.css'


function Home() {
    return (
        <React.Fragment>
            <div>
                <div className="initial_container">
                    <h1 className="logo_firstname">WIKIPEDIA<br /><h4>The Free Encyclopedia</h4></h1>

                    <img className="wikipedia_logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" />
                </div>
                <section>
    <div className="ui action input">
    <form action="http://localhost:3000/sephora" target= "_blank" method="GET">
      <input type="text" placeholder="Search Wikipedia..." class="search" id="input-search" />
     
      <button className="search ui button btn-wiki" id="button-search">Search</button>
      </form>
      </div>
  
  </section>
                    
                    
                   
            </div>

        </React.Fragment>
    )
}

export default Home;