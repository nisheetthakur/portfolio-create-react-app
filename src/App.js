import React,{useState,useEffect} from'react';
import './App.css';
import Pages from "./pages/index.js"

function App() {

  const[user,setUser] =useState(null);
  useEffect(()=>{
  fetch('https://gitconnected.com/v1/portfolio/nisheetthakur')
  .then(res=>res.json())
  .then(user=>{setUser(user);});
  },[] );

  if(!user){
    return <div/>
  }

return <Pages user={user}/>
  
  
}

export default App;
