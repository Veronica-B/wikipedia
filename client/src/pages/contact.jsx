import React from 'react';

class Contact extends React.Component {
        // const [users, setMessage]= useState({customers: [] });
        
        constructor(props){
          super(props)
          this.state = {
            contact: [],
            error : false
          }
        }
        
          //this is the functional version of componenetDidMount
            //fetches my api
            // React.useEffect(() => {
            //   fetch('http://localhost:8080/api/contact')
            //   .then (console.log())
            //   .then(res => res.json())
            //   .then(data => setMessage({customers:[data]}))
            //   .then( console.log(users))
            // })
        
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
            //   .then( console.log( typeof data))
            }
            render(){
              const {contact} = this.state;
              console.log(contact);
          return (
            <div className="App">
            {contact.map(data=> <div>{data.first_name}</div>)} 
    This is our contact form
   <form method="POST">
       <label htmlFor="Firstname">First Name:</label>
       <input id="Firstname" type="text"/>
       <label htmlFor="Lastname">Last Name:</label>
       <input id="Lastname" type="text"/>
       <label htmlFor="email">E-mail:</label>
       <input id="email" type="email"/>
       <label htmlFor="message">Message:</label>
       <textarea id="message"/>
       <button>Submit</button>
    </form> 
</div>
    )
} }

export default Contact;