import React from 'react';

let count =1;

class Sephora extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          article: [],
          i:[],
          error : false
        }
      }

    componentDidMount(){
        fetch('http://localhost:8080/api/article/1')
        .then((res)=> res.json())
        .then(
          (data) => {
            this.setState({
              article: data
            })
          }
        )
    }
    handleSelect = (event) =>{
        this.setState({i: event.target.value})
        count= event.target.value
        // console.log(event.target.value)
    };


    render()
    {  
        const {article} = this.state;
    return (

    <React.Fragment>
        <main>
        <article className="grid-container">

        <section className="info-text-card">
            <div className="slogo-container"></div>
            <div className="jump-to-sec"> 
            
                <label for="subject">JUMP TO:</label>
                    <select id="subject" name="subject" class="jumpTo-btn" value="i" onChange= {this.handleSelect} >
                        <option value="selectSection">Select section..</option>
                        <option value="1">Overview</option>
                        <option value="2"> History</option>
                        <option value="3">Operations</option>
                        <option value="4">Applications</option>
                        <option value="5">Acquisitions</option>
                        <option value="6">Controversies</option>
                        <option value="7">Lawsuits</option>
                        <option value="8">Environmental Record</option>
                        <option value="9">Awards & Honors</option>
                    </select>
            </div>                
           
            {article.map((data, index) => {
                let section_headers= `data.section_header`.concat([count])
                let sections= `data.section`.concat([count])
                return(
                    <div className="sephora-info">
                         <h3>{Object.values(eval(section_headers))}</h3>
                        <div className="check-container"><i class="far fa-check-circle fa-lg"></i></div>
                                <div className="edit-text"> [ edit ]</div>
                                    <p>{Object.values(eval(sections))}</p>
                    </div>
                )}
            )}

        </section>

        <div className="vline"></div>

        <section className="feat-text-card">

        {/* <h3 className="sephora-heroText">SEPHORA</h3> */}
        <div className="slogo-containertwo"></div>
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

    )}
} 

export default Sephora;