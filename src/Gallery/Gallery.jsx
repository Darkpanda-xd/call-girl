import React from 'react'
import "./gallery.css"
const Gallery = () => {
    const image = [{
      src:"/call-girl-21.jpg",
      alt:"call-girl",
      key:1
    },{
      src:"/call-girl-3.jpg",
      alt:"call-girl",
      key:2
    },{
      src:"/call-girl-7.jpg",
      alt:"call-girl",
      key:4
    },{
      src:"/call-girl-8.jpg",
      alt:"call-girl",
      key:5
    },{
      src:"/call-girl-10.jpg",
      alt:"call-girl",
      key:6
    },{
      src:"/call-girl-11.jpg",
      alt:"call-girl",
      key:7
    },{
      src:"/call-girl-12.jpg",
      alt:"call-girl",
      key:8
    },{
      src:"/call-girl-13.jpg",
      alt:"call-girl",
      key:9
    },{
      src:"/call-girl-14.jpg",
      alt:"call-girl",
      key:10
    },{
      src:"/call-girl-15.jpg",
      alt:"call-girl",
      key:11
    },{
      src:"/call-girl-16.jpg",
      alt:"call-girl",
      key:12
    },{
      src:"/call-girl-18.jpg",
      alt:"call-girl",
      key:13
    },{
      src:"/call-girl-19.jpg",
      alt:"call-girl",
      key:14
    },{
      src:"/call-girl-20.jpg",
      alt:"call-girl",
      key:15
    },{
      src:"/call-girl-22.jpg",
      alt:"call-girl",
      key:16
    },{
      src:"/call-girl-23.jpg",
      alt:"call-girl",
      key:17
    }
  ]
  return (
    <div id='gallery'>
      <div className='gallery-header'>
        <h1>Our Profiles</h1>
        <div className='gallery-line'></div>
      </div>
    <div className='gallery-wrapper'>

      {image.map(x=>{
        return(
          <img className="gallery-call-girl" src={x.src} alt={x.alt} key={x.key}/>
        )
      })}
      </div>
    </div>
  )
}

export default Gallery