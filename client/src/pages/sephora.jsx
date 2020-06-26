import React from 'react';



function Sephora (){
    return (
        
    <React.Fragment>

        <main>
        <article className="grid-container">

        <section className="info-text-card">
            <div className="slogo-container"><img className="sephora-logo" src="./assets/Sephora_logo.png" alt="sephora logo" /></div>
            <div className="sephora-info">
                <h3>OVERVIEW</h3>
                <p>Sephora is a French multinational chain of personal care and beauty stores. Featuring nearly 3,000 brands,
                along with its own private label, Sephora offers beauty products including cosmetics, skincare, body, fragrance, 
                nail color, beauty tools, and haircare.</p>
                <p>The company was founded in Limoges in 1970 and is currently based in Paris. Sephora is owned by luxury conglomerate
                 LVMH as of 1997. The name comes from the Greek spelling of Zipporah (Greek: Σεπφώρα, Sepphōra), wife of Moses.</p>
            </div>
        </section>

        <section className="feat-text-card">

        <h3 className="sephora-heroText">SEPHORA</h3>
        <div className="feat-text-container">
            <table className="feat-text-desc">
                <tbody>
                {/* <tr><td className="sephora-heroText"></td></tr> */}
                <tr>
                    <th>Type</th>
                    <td>Subsidiary</td>
                </tr>
                <tr>
                    <th>Industry</th>
                    <td>Consumer goods</td>
                </tr>
                <tr>
                    <th>Founded</th>
                    <td>1970</td>
                </tr>
                <tr>
                    <th>Founder</th>
                    <td>Dominique Mandonnaud</td>
                </tr>
                <tr>
                    <th>Headquarters</th>
                    <td>Paris, France</td>
                </tr>
                <tr>
                    <th>Number of locations</th>
                    <td>over 2,600 stores</td>
                </tr>
                <tr>
                    <th>Areas served</th>
                    <td>34 countries worldwide</td>
                </tr>
                <tr>
                    <th>Key people</th>
                    <td>Chris de Lapuente (CEO & Global president)</td>
                </tr>
                <tr>
                    <th>Products</th>
                    <td>Beauty & wellness</td>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <td>over $10 billion USD (2019) (estimated)</td>
                </tr>
                <tr>
                    <th>Parent</th>
                    <td>LVMH</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>www.sephora.com</td>
                </tr>
                
                </tbody>
            </table>
        </div>
        </section>
        </article>


        </main>
        
    </React.Fragment>

    )
} 

export default Sephora;