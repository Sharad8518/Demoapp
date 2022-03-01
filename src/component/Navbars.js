import React from 'react'
import { Button,Container,Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import './css/navbar.css'

function Navbars() {
  return (
    <div>



<Navbar    style={{

background:"#fff"

}}>
  <Container>
    <h2 className=' textcol'>Vinted</h2>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown title="Catalog" id="basic-nav-dropdown" className='.ml-3'>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <input type="text" className='inbox' placeholder='Search item' />

        <Button variant="outline-primary">Sign Up | Login In</Button>
        <Button variant="primary" style={{
          
          marginLeft:"20px"


        }}>Sell Now</Button>


<NavDropdown title="En" id="basic-nav-dropdown" className="ml-2">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>






      </Nav>
   
      


    </Navbar.Collapse>
  </Container>
</Navbar>

<Navbar bg="light" variant="light">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link href="#home">Women</Nav.Link>
      <Nav.Link href="#features">Men</Nav.Link>
      <Nav.Link href="#pricing">Kids</Nav.Link>
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>



    </div>





  )
}

export default Navbars