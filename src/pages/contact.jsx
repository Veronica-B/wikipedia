import React from 'react';



function Contact (){
    return (
<div> 
    This is our contact form
   <form method="POST">
       <label for="name">Name:</label>
       <input id="name" type="text"/>
       <label for="email">E-mail:</label>
       <input id="email" type="email"/>
       <label for="message">Message:</label>
       <textarea id="message"/>
       <button>Submit</button>
    </form> 
</div>
    )
} 

export default Contact;