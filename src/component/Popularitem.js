import React from 'react'
import { Container,Row,Col,Button,Card,Navbar,Nav} from 'react-bootstrap'
import img1 from './image/img1.jpg'
import './css/Popularitem.css'
import { FaExclamationCircle, FaDollarSign,FaSyncAlt,FaHeart } from "react-icons/fa";
function Popularitem() {
  return (

<div>
<Container>
  <Row className="justify-content-md-center" >
    <Col xs={12}   md={8} className="mt-3"><h2 style={{

    fontSize:"20px"

    }} >Popular item</h2> </Col>
    <Col sm={4} className='mt-3 '><Button variant="outline-primary" className='ml-5' >See All</Button></Col>
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





<h3 style={{

marginLeft:"120px",
marginTop:"20px",
magrinBottom:"10px",
fontSize:"20px"

}}> Shop by brand</h3>


  <Navbar bg="light" variant="light">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link href="#home">Jurdan</Nav.Link>
      <Nav.Link href="#features">Zara</Nav.Link>
      <Nav.Link href="#pricing">Burberry</Nav.Link>

      <Nav.Link href="#pricing">Burberry</Nav.Link>
      <Nav.Link href="#pricing">Vans</Nav.Link>
      <Nav.Link href="#pricing">Tommy</Nav.Link>
      <Nav.Link href="#pricing">Lacoste</Nav.Link>
      <Nav.Link href="#pricing">Converse</Nav.Link>
      <Nav.Link href="#pricing">Mango</Nav.Link>
      <Nav.Link href="#pricing">Pandore</Nav.Link>

      <Nav.Link href="#pricing">Levi's</Nav.Link>
      <Nav.Link href="#pricing">Pandore</Nav.Link>

    </Nav>
    </Container>
  </Navbar>




<h2 style={{

marginLeft:"110px",
fontSize:"20px"
}}>Suggested searches</h2>

<Container>
<Row xs={2} md={4} lg={6}>
    <Col   >
    
    <Card style={{ width: '10rem' }}>
  
  <Card.Body>
    <Card.Title style={{

fontSize:"15px"}}   >Nike clothes</Card.Title>
    <Card.Text>
     18.39k views
    </Card.Text>
    
  </Card.Body>
</Card>
    
    </Col>
    <Col>
    
    <Card style={{ width: '10rem' }}>
  
  <Card.Body>
    <Card.Title  style={{

fontSize:"15px"}}   >Nike Shoes</Card.Title>
    <Card.Text>
     12.39k views
    </Card.Text>
    
  </Card.Body>
</Card>
    
    </Col>
    <Col>
    
    <Card style={{ width: '10rem' }} >
  
  <Card.Body>
    <Card.Title  style={{

   fontSize:"15px"

    }}>Victoria's Secret</Card.Title>
    <Card.Text>
     2.39k views
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>



    <Col>
    
    <Card style={{ width: '10rem' }}>
  
  <Card.Body>
    <Card.Title  style={{

fontSize:"15px"}} >Zara</Card.Title>
    <Card.Text>
     10.09k views
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>

    <Col>
    
    <Card style={{ width: '10rem' }}>
  
  <Card.Body>
    <Card.Title  style={{

fontSize:"15px"}}  >The North Face</Card.Title>
    <Card.Text>
     20.39k views
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>



    <Col>
    
    <Card style={{ width: '10rem' }}>
  
  <Card.Body>
    <Card.Title   style={{

fontSize:"15px"}}    >Nike clothes</Card.Title>
    <Card.Text>
     18.39k views
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>












  </Row>
</Container>


</div>
  )
}

export default Popularitem