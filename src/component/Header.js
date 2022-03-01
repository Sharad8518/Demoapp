import React from 'react'
import {Carousel,Button } from 'react-bootstrap';
import Imgone from './image/imgone.jpg'
import Imgtwo from './image/imgtwo.jpg'
import './css/header.css'


function header() {
    


  return (
    
<div>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{
        
            height:"400px"


          }}
          src={Imgone}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{
         height:"400px"
          }}
          src={Imgtwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height:"400px"
             }}


          src={Imgone}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<div className='boxtxt'>


<h2>Ready to declutter your closet?</h2>

<div className="d-grid gap-2"  style={{

marginLeft:"30px",
marginRight:"30px",
marginTop:"70px"

}}>
  <Button variant="primary" size="lg">
    Sell Now
  </Button>

  <p  style={{

  color:"#00a8f"

  }}>Learn How It Work</p>
  </div>
</div>



</div>


  )
}

export default header