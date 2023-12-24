import { Button } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './home.css'
const Home = () => {
  const callPhone =()=>{
    window.location.href = `tel:+919999999999`
  }
  return (
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
        <a href ="tel:+916291029174" style={{textDecoration: 'none'}}>
          <CallIcon sx={{color:'#28b726'}}/>
        </a>
        </Button>
        <Button  variant='outlined'  sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <a href ="https://wa.me/+916291029174" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon sx={{color:'#28b726'}}/>
        </a>
        </Button>
      </div>
   
    </div>
  )
}

export default Home