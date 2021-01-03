import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button  from 'react-bootstrap/Button'

function Serv () {
    return (
        <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
        <Container>
            <h4 style={{textAlign:'center', marginBottom:'2rem', color:'#ffba00'}} >
                Industries we’re serving
            </h4>
            <Row>
                <Col xs={12} md={6} >
                <h5>Real Estate</h5>
                <p>We work with real estate agents/brokers to help them broaden 
                    their reach and get better quality leads and offers on real estate.
                </p>
                </Col>
                <Col xs={12} md={6} >
                    <h5>Health Care</h5>
                    <p>We work with healthcare professionals such as health coaches, 
                        personal trainers and physical therapists to position themselves 
                        as leading experts in their field.
                    </p>
                </Col>
                <Col xs={12} md={6} >
                <h5>B2B</h5>
                <p>We help B2B companies by creating valuable content, consistent 
                    branding and an optimal online presence for maximum lead generation. 
                </p>
                </Col>
                <Col xs={12} md={6} >
                    <h5>Tourism</h5>
                    <p>We work with touring companies, dive centers, and more. We help 
                        them to grow their online visibilty, optimize their brand value 
                        and attract more clients by means of digital marketing.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={{span:10,offset:2}}
                md={{span:6, offset:4}}
                style={{background:'#242424',
                        color:'#fff',
                        padding:'1rem'}}
                >
                    <p>If you don’t see your industry listed, do not worry. We believe that 
                        building a strong foundation and developing a solid online presence can 
                        take any business to the next level.
                    </p>
                </Col>
                <Col
                xs={12}
                md={10}
                style={{marginTop:'-1.5rem', textAlign:'right'}}>
                    <Button variant="warning" style={{border:'3px solid #fff'}} >LEARN HOW</Button>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    )
}

export default Serv;