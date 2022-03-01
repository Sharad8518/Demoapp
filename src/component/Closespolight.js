import React from 'react'
import { Container,Row,Col,Button,Card } from 'react-bootstrap'
import { FaStar,FaStarHalfAlt,FaHeart,FaSyncAlt,FaDollarSign } from "react-icons/fa";
import img1 from "./image/img2.jpg"
import men from "./image/men1.jpg"

function Closespolight() {
  return (
    <div>

<Container>
<Row>
    <Col>
    <h2 style={{

    fontSize:"20px"


    }}>Closet Splotlight</h2>
    
    
    
    </Col>
    <Col></Col>
    <Col><Button variant="outline-primary" style={{

  marginLeft:"200px"


    }} >See All</Button></Col>
  </Row>
</Container>




<Container className='mt-3'>
<Row>
    <Col>
    <div style={{

     display:"flex"

    }} >

<img src={men}   style={{

 width:"50px",
 height:"50px",
 borderRadius:"50px"


}}/>

<p  style={{

 marginTop:"5px",
 marginLeft:"5px"

}}>Jone Boker</p>


<div  style={{


display:'flex',
marginLeft:"-70px",
marginTop:"30px"



}}>


<FaStar style={{

    color:"yellow"
}} /> <FaStar

style={{

    color:"yellow"
}}


/><FaStar
style={{

    color:"yellow"
}}



/><FaStar

style={{

    color:"yellow"
}}


/>

</div>



    </div>
    
    
    </Col>
    <Col></Col>
    <Col><Button variant="primary" style={{

  marginLeft:"200px"


    }} >+ Follow</Button></Col>
  </Row>
</Container>

<Container>
<Row className="justify-content-md-center mt-5">
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1}/>
  <Card.Body>
    <div className='detailbx'>

     <p><FaDollarSign/></p>
   <p>10.00</p>

   <FaSyncAlt className='icon1'/>

<FaHeart className='icon2'/>
<p>8</p>
    </div>
  </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={4}>

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1}/>
  <Card.Body>
    <div className='detailbx'>

     <p><FaDollarSign/></p>
   <p>10.00</p>

   <FaSyncAlt className='icon1'/>

<FaHeart className='icon2'/>
<p>8</p>
    </div>
  </Card.Body>
</Card>





    </Col>
    <Col xs={6} md={4}>
      

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1}/>
  <Card.Body>
    <div className='detailbx'>

     <p><FaDollarSign/></p>
   <p>10.00</p>

   <FaSyncAlt className='icon1'/>

<FaHeart className='icon2'/>
<p>8</p>
    </div>
  </Card.Body>
</Card>







    </Col>
  </Row>

  </Container>












    </div>
  )
}

export default Closespolight