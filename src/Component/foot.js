import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaWhatsappSquare,} from 'react-icons/fa'
import {FaCopyright} from 'react-icons/fa'

function Foot (){
    return (
            <Container style={{marginTop:'2rem'}} >
            <Row>
                <Col xs={1} md={1} style={{background:'#ffba00'}} ></Col>
                <Col >
                    <Row>
                        <Col xs={12} md={6}>
                            <h5>Address</h5>
                            <p>
                                Perumahan Mediterania<br/>
                                Blok F3/24, Sukamulya<br/>
                                Cikupa, Tangerang<br/>
                                Banten<br/>
                                Phone: 021-5964 5635
                            </p>
                        </Col>
                        <Col >
                            <Row>
                                <Col>
                                | Find Us Here<br/>
                                <Row>
                                    <Col xs={2}>
                                    <FaInstagramSquare/></Col>
                                    <Col xs={2}>
                                    <FaFacebookSquare/></Col>
                                    <Col xs={2}>
                                    <FaTwitterSquare/></Col>
                                    <Col xs={2}>
                                    <FaWhatsappSquare/></Col>
                                </Row>
                                </Col>
                                <Col>
                                | Ask As Here<br/>
                                <a href='#About' style={{color:'#ffba00'}}>WWW.REALINE.MY.ID</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <p style={{fontSize:'14px', textAlign:'center'}} >
                Copyright<FaCopyright/>2021. Realine. All Rights Reserved
            </p>
            </Container>
    )
}
export default Foot;