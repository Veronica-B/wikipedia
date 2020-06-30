import React from 'react';
import '../App.css';



function Verification() {
    return (

        <React.Fragment>
   
                <section className="ver-container">
                    <div className="editVer-section">

                        <div className="ver-slogo-container"></div>
                        <div className="top disclaimer">
                        <p>Content that violates any copyrights will be deleted. 
                            Encyclopedic content must be verifiable. Work submitted to Wikipedia can be used and
                            edistributed—by anyone—subject to certain terms and conditions. By publishing changes to be reviewed, 
                            you agree to the Terms of Use, and you irrevocably agree to release your contribution under 
                            the CC BY-SA 3.0 License and the GFDL.</p>
                            </div>
                        <form method="POST" action="/api/verification" >
<<<<<<< HEAD
                        <h3>ARTICLE NAME:</h3>
                        <input type="text" placeholder="Sephora" class="ver-text-field" name="article_name"/>
                        <h3>SECTION HEADER:</h3>
=======
                        <h3>Section Header:</h3>
>>>>>>> 36d7e3ee76ac89fc3ef8e27eb4bdc022dea5b767
                        <input type="text" placeholder="Overview" class="ver-text-field" name="section_header"/>

                        <div className="textarea_info">
                            <h3>Section Body:</h3>
                            <textarea className="txtcontain" cols="100" rows="20" name="section">
                                Sephora is a French multinational chain of personal care and beauty stores. Featuring nearly 3,000 brands,
                                along with its own private label, Sephora offers beauty products including cosmetics, skincare, body, fragrance,
                                nail color, beauty tools, and haircare. The company was founded in Limoges in 1970 and is currently based in Paris. Sephora is owned by luxury conglomerate
                                LVMH as of 1997. The name comes from the Greek spelling of Zipporah (Greek: Σεπφώρα, Sepphōra), wife of Moses.
                            </textarea>
                            <button className="publishhhhh" >PUBLISH</button>
                        </div>
                        </form>
                        <div className="bottom disclaimer">
                            <h3>Disclaimer:</h3>
                            <p>Content that violates any copyrights will be deleted. 
                            Encyclopedic content must be verifiable. Work submitted to Wikipedia can be used and
                            edistributed—by anyone—subject to certain terms and conditions. By publishing changes to be reviewed, 
                            you agree to the Terms of Use, and you irrevocably agree to release your contribution under 
                            the CC BY-SA 3.0 License and the GFDL.</p>
                            </div>
                        <button className="showpreview_btn">SHOW PREVIEW </button>
                        <button className="cancel" >CANCEL</button>
                    </div>
                </section>






        </React.Fragment>
    )
}

export default Verification;