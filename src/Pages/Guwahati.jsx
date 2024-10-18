import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import "./guwahati.style.css"
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import FixButton from '../components/fixedButton/Button';
import Navbar from '../Navbar/Navbar';
import GuwahatiNavbar from '../Components/guwahatiNavbar/GuwahatiNavbar';


  

const Guwahati = () => {
    const callPhone =()=>{
        window.location.href = `tel:+917980376638`
      }
      const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        
      }));
      const itemValues = ["High-Profile Escorts: Bollywood models, air hostesses, and celebrities.", "Independent Escorts: Book an independent <strong>Guwahati call girl</strong> for a personalized experience.", "Russian Escorts: Experience sophisticated and alluring Russian companions.", "Housewife Escorts: Enjoy the authenticity and intimacy of discreet housewife escorts.","Desi Call Girls: Connect with local <strong>call girl in Guwahati</strong> for a traditional experience."]; // Values for the primary text
      const additionalValues = ["<strong>Massage Services:</strong> Relax with rejuvenating professional massage therapy.","<strong>Event Hosting:</strong> Our escorts are trained to host and serve elegantly at private events."," <strong>In-Call & Out-Call Services:</strong> Enjoy the company of a <strong>Guwahati call girl</strong> at your home or a luxury hotel."]
      const keyBenifitValues = ["24/7 Availability: We provide escort services to suit your schedule.","Authenticity Guaranteed: The service you book is the service you get—no false promises.","Privacy & Discretion: All interactions are handled with complete confidentiality."]
      function generate(values) {
        return values.map((value, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar style={{background:"green"}}>
                <CheckIcon style={{color:"#FFF"}}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
          primary={<span class = "values"style={{fontSize:"24px",color:"#e5e0e0fa"}} dangerouslySetInnerHTML={{ __html: value }} />} 
        /> {/* Populate primary with the value and render HTML */}
          </ListItem>
        ));
      }

      useEffect(() => {
        document.documentElement.style.setProperty('--contact-bg', '#a29499 ');
      }, []);
  return (
    <div className='container'>
        <Helmet>
        <title>Call Girl in Guwahati | Guwahati Call Girl | Guwahati Escort Service</title>
        <meta 
          name="description" 
          content="Explore the finest call girl in Guwahati services with Mahi Oboroi. Book independent escorts, Russian models, and enjoy premium Guwahati escort service." 
        />
        <meta 
          name="keywords" 
          content="Call Girl in Guwahati, Guwahati Call Girl, Guwahati Escort Service" 
        />
        <meta property="og:title" content="Call Girl in Guwahati | Guwahati Call Girl | Guwahati Escort Service" />
        <meta 
          property="og:description" 
          content="Book the best call girl in Guwahati and enjoy unmatched luxury with Mahi Oboroi's Guwahati escort service." 
        />
        <link rel="canonical" href="https://www.mahioboroi.com/guwahati" />

        <meta property="og:url" content="https://www.mahioboroi.com/guwahati" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mahiobori.s3.us-east-1.amazonaws.com/logo.png" />
        </Helmet>
      <FixButton/>
        
      {/* <Navbar/> */}
      <GuwahatiNavbar/>

      <div className='header-wrapper'>
      <header>
          
          <h1>Call Girl in Guwahati | Guwahati Call Girl | Guwahati Escort Service – Mahi Oboroi</h1>
        </header>
        <section>
          <p>
            Welcome to <strong>Mahi Oboroi</strong>, the leading <strong>Guwahati escort service</strong> provider offering
            top-tier companionship and premium experiences. Whether you are looking for elegance, charm, or intimacy, we
            provide elite services with the finest <strong>call girl in Guwahati</strong> to meet your every need.
          </p>
  
          <p>
            At Mahi Oboroi, our reputation as the most trusted <strong>Guwahati call girl</strong> agency ensures that
            your experience will be memorable, discreet, and professional. We specialize in providing Russian escorts,
            independent companions, and other luxurious services for discerning clients.
          </p>
          <div className='home-button'>
        <a href ="tel:+917980376638" style={{textDecoration: 'none'}}>
      <Button variant='outlined' onClick={callPhone} sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CallIcon sx={{color:'#e5e0e0fa'}}/>
        </Button>
        </a>
        <a href ="https://wa.me/+917980376638" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
        <Button  variant='outlined'  sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <WhatsAppIcon sx={{color:'#e5e0e0fa'}}/>
        </Button>
        </a>
      </div>
        </section>
                
    </div>

      <section className='content-wrapper-1'>
    
        <h2>Why Choose Mahi Oboroi for Guwahati Escort Service?</h2>
        <div>
    <img src="/call-girl-13.jpg" alt="guwahati-call-girl" />
        <div className='content-sub-wrapper-1'>
        <p>
          Mahi Oboroi offers the highest standard of <strong>Guwahati escort service</strong>, blending sophistication
          with exclusivity. Whether you're booking an in-call or out-call service, our escorts ensure luxury and
          authenticity. We deliver precisely what we promise — every service is tailored to exceed your expectations
          without delays or false commitments.
        </p>
        {/* <div className='home-button'>
        <a href ="tel:+917980376638" style={{textDecoration: 'none'}}>
      <Button variant='outlined' onClick={callPhone} sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CallIcon sx={{color:'#e5e0e0fa'}}/>
        </Button>
        </a>
        <a href ="https://wa.me/+917980376638" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
        <Button  variant='outlined'  sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <WhatsAppIcon sx={{color:'#e5e0e0fa'}}/>
        </Button>
        </a>
      </div> */}
        </div>
        
        </div>
    
      </section>

      <section className='content-wrapper-2'>
        <h2>Services</h2>
        <div className='content-sub-wrapper-3'>

        {/* <ul>
          <li></li>
          <li>Independent Escorts: Book an independent <strong>Guwahati call girl</strong> for a personalized experience.</li>
          <li>Russian Escorts: Experience sophisticated and alluring Russian companions.</li>
          <li>Housewife Escorts: Enjoy the authenticity and intimacy of discreet housewife escorts.</li>
          <li>Desi Call Girls: Connect with local <strong>call girl in Guwahati</strong> for a traditional experience.</li>
        </ul> */}
        {/* <Grid container spacing={2} style={{justifyContent:"center"}}> */}
        {/* <Grid item xs={12} md={6} > */}
          {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography> */}
          <Demo style={{borderRadius:"10px",background:"#d56565"}}>
          <h2>Our Premium Escort Services in Guwahati</h2>

            <List  className='content-sub-wrapper-2' >
  {generate(itemValues)}
            </List>
          </Demo>
        {/* </Grid> */}
        {/* </Grid> */}
        {/* <Grid container spacing={2} style={{justifyContent:"center"}}> */}
        {/* <Grid item xs={12} md={6} > */}
          {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography> */}
          <Demo style={{borderRadius:"10px",background:"#d56565"}}>
        <h2 style={{padding:"37px"}}>Additional Services</h2>

            <List  className='content-sub-wrapper-2' >
  {generate(additionalValues)}
            </List>
          </Demo>
          <Demo style={{borderRadius:"10px",background:"#d56565"}}>
          <h2>Key Benefits of Our Guwahati Escort Service</h2>


            <List  className='content-sub-wrapper-2' >
  {generate(keyBenifitValues)}
            </List>
          </Demo>
        {/* </Grid> */}
        {/* </Grid> */}
        </div>


      </section>

      {/* <section>
        <ul>
          <li><strong>Massage Services:</strong> Relax with rejuvenating professional massage therapy.</li>
          <li><strong>Event Hosting:</strong> Our escorts are trained to host and serve elegantly at private events.</li>
          <li>
            <strong>In-Call & Out-Call Services:</strong> Enjoy the company of a <strong>Guwahati call girl</strong> at
            your home or a luxury hotel.
          </li>
        </ul>
      </section> */}
{/* 
      <section>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section> */}
      <Gallery/>

      <section className='content-sub-wrapper-4'>
        <h2>How to Book Your Call Girl in Guwahati</h2>
       <div className='content-wrapper-4'>
       <p>
          Booking with Mahi Oboroi is simple and hassle-free. Browse through our curated selection of{' '}
          <strong>Guwahati call girl</strong> options on our website to choose the perfect companion. Whether you need a
          short-term companion or a hostess for a private event, we offer personalized{' '}
          <strong>Guwahati escort service</strong> to make your experience exceptional.Just click on button below and get your service.
        </p>
        <div className='home-button'>
        <a href ="tel:+917980376638" style={{textDecoration: 'none'}}>
      <Button variant='outlined' onClick={callPhone} sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CallIcon sx={{color:'#e5e0e0fa'}}/>
        </Button>
        </a>
        <a href ="https://wa.me/+917980376638" style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
        <Button  variant='outlined'  sx={{width:"150px",borderColor:"#28b726",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <WhatsAppIcon sx={{color:'#e5e0e0fa'}}/>
        </Button>
        </a>
      </div>
       </div>
      </section>
        {/* <Gallery className="gallery"/> */}
      <footer >
        <h2>Contact Us</h2>
        <p>
          Explore premium <strong>Guwahati escort service</strong> now with Mahi Oboroi and enjoy a world of luxury,
          privacy, and unforgettable experiences.
        </p>
        <Contact/>
      </footer>
    </div>
  )
}

export default Guwahati