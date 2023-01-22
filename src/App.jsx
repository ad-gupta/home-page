import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import MainBody from './components/mainbody'
// import Foot from './components/footer'




export default function App() {
  return(
    <div className='bodies'>
      <Navbar/>
      <MainBody/>
      <footer style={{backgroundColor: "green", height: "5vh"}}>
        <div style={{display : "flex", alignItems: "center", alignContent: "space-between", color: "white", justifyContent: "space-around"}}>
            <a style= {{alignContent: "center"}} href="https://support.google.com/pay/india/?hl=en&visit_id=638099620724089257-1458615385&rd=1#topic=10094979">Click Here to know more..</a>
            <p>☎️ +91 92622 93423    📧 xyz.gmail.com</p>
        </div>
      </footer>
    </div>
  )
}