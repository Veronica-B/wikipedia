import React, {useState} from 'react';
import Navbar from './components/navbar'
import './App.css';
function App() {
const [users, setMessage]= useState({customers: [] });

  //this is the functional version of componenetDidMount
    //fetches my api
    // React.useEffect(() => {
    //   fetch('http://localhost:8080/api/contact')
    //   .then (console.log())
    //   .then(res => res.json())
    //   .then(data => setMessage({customers:[]}))
    //   .then( console.log(users))
    // })
  return (
    <div className="App">
    <Navbar />
    {/* {users.customers.map(user => <div>{user.first_name}</div>)} */}
    </div>
  );
}

export default App;
