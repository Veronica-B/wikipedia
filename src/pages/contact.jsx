import React from 'react';
import '../css/contact.css' ; 



class Contact extends React.Component {
        // const [users, setMessage]= useState({customers: [] });
        
        constructor(props){
          super(props)
          this.state = {
            contact: [],
            error : false
          }
        }
            render(){
          return (
            <div className="App">

            <div className="hero-image">
      <div className = "container">
        <h1><span>CONTACT US </span></h1>
    
      </div>    
    </div>
  
    <i class="fas fa-chevron-circle-down drop-down-arrow"></i>
    <div className = "contact-info-style">
    <h2>TELL US!</h2>
    <p>Phone Number: (123)-456-789  | email: info-en@wikimedia.org </p>
    </div>

   <div >
   <form method="POST" action="/api/contact" className= "contact-form" >
     <label htmlFor="first_name" className ="label-design" >First Name:</label>
       <input name="first_name" type="text" className="contact-form-text" placeholder="First Name"></input>
       <label htmlFor="last_name" className ="label-design" >Last Name:</label>
       <input name="last_name" type="text" className="contact-form-text" placeholder="Last Name"/>
       <label htmlFor="email" className ="label-design" >E-mail:</label>
       <input name="email" type="email" className="contact-form-text" placeholder="Email"/>
       <label htmlFor="message" className ="label-design">Message:</label>
       <textarea name="message" className="contact-form-text" placeholder="Message"/>
       <button className="contact-form-btn btn-setting">Submit</button>
    </form> 

   
    </div>
</div>
    )
} }

export default Contact;
