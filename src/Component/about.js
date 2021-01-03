import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About () {
    return (
        <Container style={{textAlign:'center'}} id='About' className='bts' >
            <Row>
                <Col xs={{span: 8, offset: 2}} className='tp' >
                <h4>
                   DIGITAL MARKETING & WEB DEVELOPMENT AGENCY
                </h4>
                </Col>
                <Col xs={{span:10,offset:1}} className='bw' >
                <p>Worldwide we help businesses gain more leads and brand awareness 
                    by reassessing and improving their online presence. We provide 
                    unique web design combined with an extensive search engine optimization, 
                    online advertising and content strategy to ensure business growth.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default About;