import { Button } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './home.css'
import About from '../About/About';
import Banner from '../banner/Banner';
import Gallery from '../Gallery/Gallery';
import FixButton from '../components/fixedButton/Button';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  const callPhone =()=>{
    window.location.href = `tel:+917980376638`
  }
  return (
    <>
    <Helmet>
    <title>Call Girl in Guwahati | Best Escort Service - Mahi Oboroi</title>
    
    <meta name="description" content="Looking for a call girl service in Guwahati? Mahi Oboroi offers the most trusted and discreet escort services. Call now for 100% genuine service with no advance required!" />
    <meta name="keywords" content="call girl in Guwahati, call girl service in Guwahati, escort service Guwahati, best escort service Guwahati, Mahi Oboroi, Guwahati call girls, Kolkata escort service" />

    <link rel="canonical" href="https://www.mahioboroi.com/" />

    
    <meta property="og:title" content="Best Escort and Call Girl Service in Guwahati - Mahi Oboroi" />
    <meta property="og:description" content="Explore Mahi Oboroi's trusted escort and call girl services in Guwahati. No advance payment, only 100% genuine companionship." />
    <meta property="og:image" content="https://mahiobori.s3.us-east-1.amazonaws.com/logo.png" />
    <meta property="og:url" content="https://www.mahiobori.com/" />

    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Best Escort Service in Guwahati - Mahi Oboroi" />
    <meta name="twitter:description" content="Looking for call girls in Guwahati? Mahi Oboroi offers the most reliable and discreet services with no advance payment." />
    <meta name="twitter:image" content="https://mahiobori.s3.us-east-1.amazonaws.com/logo.png" />
        </Helmet>
      <Navbar/>

    <div className='home-wrapper' id='home'>
      <div className='home-text'>
      <h1  className="home-header">
             MAKE YOUR DREAM COME TRUE
             <br/>
             WITH <span style={{color:"rgb(231 199 29)"}}>MAHI OBOROI</span> 
             <br/>
             BEST ESCORT SERVICE IN GUWAHATI INDIA
             <br/> 
             TO GET YOUR DREAM GIRL CALL US NOW 
             <br/>
             <span style={{color:"rgb(231 199 29)"}}> *100% GENUINE,NO ADVANCE NEEDED!!</span>
        
        </h1>
        
      </div>
      <div className='home-button'>
      <Button variant='outlined' onClick={callPhone} sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <a href ="tel:+917980376638" style={{textDecoration: 'none'}}>
          <CallIcon sx={{color:'#28b726'}}/>
        </a>
        </Button>
        <Button  variant='outlined'  sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <a href ="https://wa.me/+917980376638" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon sx={{color:'#28b726'}}/>
        </a>
        </Button>
      </div>
   
    </div>
      <About/>
      <Banner/>
      <Gallery/>
      <FixButton/>
      <Contact/>
      </>
  )
}

export default Home