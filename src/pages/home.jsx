import React from 'react';
// import '../css/home.css';




function Home() {
    return (
        <React.Fragment>
            <div>
                <div className="initial_container">
                    <h1 className="logo_firstname">WIKIPEDIA</h1>
                    <h4 className="wk_name">The Free Encyclopedia</h4>

                    <img className="wikipedia_logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png" alt="wiki-hero"/>
                    <div className="ui action input">
                    <form action="http://localhost:3000/sephora" target= "_blank" method="GET">
                        <input type="text" placeholder="Search Wikipedia.org" className="search" id="input-search" />
                        <button className="search ui button btn-wiki" id="button-search">Search</button>
                        </form>
                    </div>
                </div>
                 <section className="history_container">

                        <iframe width="2900" height="355" title="history-of-wiki" src="https://www.youtube.com/embed/oVFPW0r4jWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        <p className="info_hist"><h3 className="video_title">The History of Wikipedia</h3>
                            Jimmy Wales and Larry Sanger co-founded Wikipedia as an offshoot of an earlier 
                            encyclopedia project, Nupedia, in January 2001. Originally, Wikipedia was 
                            created to provide content for Nupedia. However, as the wiki site became 
                            established it soon grew beyond the scope of the earlier project. As of 
                            January 2015, the website provided well over five million articles in English 
                            and more than that number in all other languages combined. At that same time, 
                            Alexa ranked Wikipedia as the seventh-most popular site on the Internet. Wikipedia 
                            was the only non-commercial site of the top ten.</p>
                    </section>



            </div>

        </React.Fragment>
    )
}

export default Home;