import React from 'react';
import Footer from '../components/footer'


function Sephora (){
    return (
        
    <React.Fragment>

        <main>
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

        <section className="info-text-card">
            
        </section>




        </main>
        
    </React.Fragment>

    )
} 

export default Sephora;