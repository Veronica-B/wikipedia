import React from 'react';
import '../../src/App.css';



function Verification() {
    return (

        <React.Fragment>
   
                <section className="ver-container">
                    <div className="editVer-section">

                        <div className="ver-slogo-container" ></div>
                        <form method="POST" action="/api/verification" >
                        <h3>SECTION HEADER:</h3>
                        <input type="text" placeholder="Overview" class="ver-text-field" name="section_header"/>

                        <div className="textaera_info">
                            <h3>SECTION BODY:</h3>
                            <textarea className="txtcontain" cols="100" rows="20" name="section">
                                Sephora is a French multinational chain of personal care and beauty stores. Featuring nearly 3,000 brands,
                                along with its own private label, Sephora offers beauty products including cosmetics, skincare, body, fragrance,
                                nail color, beauty tools, and haircare. The company was founded in Limoges in 1970 and is currently based in Paris. Sephora is owned by luxury conglomerate
                                LVMH as of 1997. The name comes from the Greek spelling of Zipporah (Greek: Σεπφώρα, Sepphōra), wife of Moses.
                            </textarea>
                            <button className="publishhhhh_btn" >PUBLISH</button>
                        </div>
                        </form>
                        <button className="showpreview_btn">SHOW PREVIEW </button>
                        <button className="cancel_btn" >CANCEL</button>
                    </div>
                </section>






        </React.Fragment>
    )
}

export default Verification;