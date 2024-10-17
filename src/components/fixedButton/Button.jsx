import React from 'react'
import { Button } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import "./button.css"
const FixButton = () => {

  return (
    <div className='button-wrapper'>
      <Button variant="contained">
        <a href="tel:+917980376638">
            <CallIcon className='icon'/> 
        </a>
        </Button>
        <Button variant="contained">
        <a href="https://wa.me/+917980376638">
        <WhatsAppIcon className='icon'/> 
        </a>
        </Button>
       
    </div>
  )
}

export default FixButton