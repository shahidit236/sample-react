import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div style={{backgroundColor:"wheat"}}>
       <Link to="/"> <img src="./logo192.png" alt="" style={{width:"50px"}}/> </Link>
       <Link to="/home"> <a style={{padding:"10px"}} href="/home">Home</a></Link>
       <Link to="/about">  <a style={{padding:"10px"}}  href="/about">About</a></Link>
       <Link to="/services"> <a style={{padding:"10px"}}  href="/services">Services</a></Link>
       <Link to="/contacts"> <a style={{padding:"10px"}}  href="/contacts">Contacts</a></Link>
       <Link to="/login"><a style={{padding:"10px"}}  href="/login">Login</a></Link>
        
    </div>
    </>
  )
}

export default Header