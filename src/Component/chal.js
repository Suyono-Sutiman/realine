import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'

function Chal () {
    return (
        <Container>
        <Row>
            <Col 
            xs={12}
            md={12}
            style={{background:'#ffba00',
                    color:'#fff',
                    padding:'1rem',
                    textAlign:'center'}}>
            <p>READY TO GROW YOUR DIGITAL PRESENCE?</p>
            </Col>
            <Col
            xs={12}
            md={12}
            style={{marginTop:'-1.5rem', textAlign:'center'}}>
                <Button variant="warning" style={{border:'3px solid #fff'}} >CONTACT US</Button>
            </Col>
        </Row>
        </Container>
    )
}
export default Chal;