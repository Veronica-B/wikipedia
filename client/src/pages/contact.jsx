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
   <form method="POST" action="/api/contact">
       <label htmlFor="first_name">First Name:</label>
       <input name="first_name" type="text"/>
       <label htmlFor="last_name">Last Name:</label>
       <input name="last_name" type="text"/>
       <label htmlFor="email">E-mail:</label>
       <input name="email" type="email"/>
       <label htmlFor="message">Message:</label>
       <textarea name="message"/>
       <button>Submit</button>
    </form> 
</div>
    )
} }

export default Contact;