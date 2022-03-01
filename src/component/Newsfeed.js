import React from 'react'
import { Container,Row,Col,Card} from 'react-bootstrap'
import { FaExclamationCircle, FaDollarSign,FaSyncAlt,FaHeart } from "react-icons/fa";
import img2 from "./image/img2.jpg"
import men1 from "./image/men1.jpg"

function Newsfeed() {
  return (
    <div>

<Container className="mt-3">

  <Row >
    <Col>


    <Card style={{ width: '18rem' }}>
    <div style={{

display:"flex"


}}>

<img src={men1} style={{

width:"50px",
height:"50px",
marginTop:"10px",
marginLeft:"10px",
marginBottom:"10px",
borderRadius:"50px"


}} />

<p style={{

marginTop:"20px",
marginLeft:"20px"

}}>jone Smith</p>

</div>


  <Card.Img variant="top" src={img2} />
  <Card.Body>
    
    <div style={{

    display:"flex"


    }}>


<FaDollarSign/>
<p  style={{
marginTop:"-5px",
marginLeft:"5px",
marginRight:"5px",
fontWeight:"500"


}}> 5.26</p>
<FaExclamationCircle/>


<FaHeart style={{

marginLeft:"130px"

}}/>
<p  style={{

marginTop:"-3px",
marginLeft:"5px"

}}>5</p>
    </div>

    14/L
Pink

  </Card.Body>
</Card>



    </Col>
    <Col>
    
    
    <Card style={{ width: '18rem' }}>
    <div style={{

display:"flex"


}}>

<img src={men1} style={{

width:"50px",
height:"50px",
marginTop:"10px",
marginLeft:"10px",
marginBottom:"10px",
borderRadius:"50px"


}} />

<p style={{

marginTop:"20px",
marginLeft:"20px"

}}>jone Smith</p>

</div>


  <Card.Img variant="top" src={img2} />
  <Card.Body>
    
    <div style={{

    display:"flex"


    }}>


<FaDollarSign/>
<p  style={{
marginTop:"-5px",
marginLeft:"5px",
marginRight:"5px",
fontWeight:"500"


}}> 5.26</p>
<FaExclamationCircle/>


<FaHeart style={{

marginLeft:"130px"

}}/>
<p  style={{

marginTop:"-3px",
marginLeft:"5px"

}}>5</p>
    </div>
    14/L
Pink


  </Card.Body>
</Card>

    
    
    </Col>

    <Col>


<Card style={{ width: '18rem' }}>
<div style={{

display:"flex"


}}>

<img src={men1} style={{

width:"50px",
height:"50px",
marginTop:"10px",
marginLeft:"10px",
marginBottom:"10px",
borderRadius:"50px"


}} />

<p style={{

marginTop:"20px",
marginLeft:"20px"

}}>jone Smith</p>

</div>


<Card.Img variant="top" src={img2} />
<Card.Body>

<div style={{

display:"flex"


}}>


<FaDollarSign/>
<p  style={{
marginTop:"-5px",
marginLeft:"5px",
marginRight:"5px",
fontWeight:"500"


}}> 5.26</p>
<FaExclamationCircle/>


<FaHeart style={{

marginLeft:"130px"

}}/>
<p  style={{

marginTop:"-3px",
marginLeft:"5px"

}}>5</p>
</div>
14/L
Pink


</Card.Body>
</Card>



</Col>






















  </Row>

  </Container>
    </div>
  )
}

export default Newsfeed