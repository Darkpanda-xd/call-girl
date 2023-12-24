import React from "react";
import "./banner.style.css";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import BeenhereIcon from '@mui/icons-material/Beenhere';
const Banner = () => {
  return (
    
    <div className="banner-wrapper">
      <div className="border">
      <div className="banner-head">
          <SupportAgentIcon sx={{fontSize:"60px",color:"rgb(180 24 24 / 87%)"}}/>
          <div className="banner-text">
            <h2>Customer Service</h2>
          <p>Contract to our Customer Service <br/>
          for Best Price
          </p>
          </div>
      </div>
      <div className="banner-head">
          <MoneyOffIcon sx={{fontSize:"60px",color:"rgb(180 24 24 / 87%)"}}/>
          <div className="banner-text">
            <h2>COD</h2>
          <p>   No Advance <br />
            Pay on spot 
          </p>
          </div>
      </div>
      <div className="banner-head">
          <PriceCheckIcon sx={{fontSize:"60px",color:"rgb(180 24 24 / 87%)"}}/>
          <div className="banner-text">
            <h2>Best Price</h2>
          <p>  We Offer the Best Price <br />
              in GUWHATI
          </p>
          </div>
      </div>
      <div className="banner-head">
          <BeenhereIcon sx={{fontSize:"60px",color:"rgb(180 24 24 / 87%)"}}/>
          <div className="banner-text">
            <h2>Genuine</h2>
          <p>  We are 100% Genuine <br /> Escort Service
          provider in GUWAHATI 
          </p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
