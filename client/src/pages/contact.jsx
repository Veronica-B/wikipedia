import React from 'react';
import './contact.css' ; 
import envelope from './imgs/envelope-img.png'
import envelope2 from './imgs/envelope2.jpg'


class Contact extends React.Component {
        // const [users, setMessage]= useState({customers: [] });
        
        constructor(props){
          super(props)
          this.state = {
            contact: [],
            error : false
          }
        }
            componentDidMount(){
              fetch('http://localhost:8080/api/contact')
              .then((res)=> res.json())
              .then(
                (data) => {
                  this.setState({
                    contact: data
                  })
                }
              )
            }
            render(){
              // const {contact} = this.state;
              // console.log(contact);
          return (
            <div className="App">

            <div className="hero-image">
      <div className = "container">
        <h1><span>CONTACT US </span></h1>
    
      </div>
     
     
      
    </div>
    <i className="fa fa-arrow-circle-down drop-down-arrow" />
    <div className = "contact-info-style">
    <h2>TELL US !</h2>
    <p>phone Number: (123)-456-789  | email: info-en@wikimedia.org </p>
    </div>

   <div >
   <form method="POST" action="/api/contact" className= "contact-form" >
     <label htmlFor="first_name" className ="label-design" >First Name:</label>
       <input name="first_name" type="text" className="contact-form-text" placeholder="First Name:"></input>
       <label htmlFor="last_name" className ="label-design" >Last Name:</label>
       <input name="last_name" type="text" className="contact-form-text" placeholder="Last Name:"/>
       <label htmlFor="email" className ="label-design" >E-mail:</label>
       <input name="email" type="email" className="contact-form-text" placeholder="Email:"/>
       <label htmlFor="message" className ="label-design">Message:</label>
       <textarea name="message" className="contact-form-text" placeholder="Message:"/>
       

       <button className="contact-form-btn btn-setting">Submit</button>
    </form> 

   
    </div>
</div>
    )
} }

export default Contact;
/*<img  className = "evelope-img"src = {envelope2} />*/