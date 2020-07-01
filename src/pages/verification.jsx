import React from 'react';
import '../css/verify.css';



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
                        <form method="POST" action="/api/verification" className="ver-form">
                        <h3>Article Name:</h3>
                        <input type="text" placeholder="Sephora" class="ver-text-field" name="article_name"/>
                        <h3>Section Header:</h3>
                        <input type="text" placeholder="Overview" class="ver-text-field" name="section_header"/>

                        <div className="textarea_info">
                            <h3>Section Body:</h3>
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
                        <div className="bottom disclaimer">
                            <h3>Disclaimer:</h3>
                            <p>Content that violates any copyrights will be deleted. 
                            Encyclopedic content must be verifiable. Work submitted to Wikipedia can be used and
                            edistributed—by anyone—subject to certain terms and conditions. By publishing changes to be reviewed, 
                            you agree to the Terms of Use, and you irrevocably agree to release your contribution under 
                            the CC BY-SA 3.0 License and the GFDL.</p>
                            </div>
                    </div>
                </section>


        </React.Fragment>
    )
}

export default Verification;