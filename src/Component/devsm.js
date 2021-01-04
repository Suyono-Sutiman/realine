import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {MdSettingsInputComponent} from 'react-icons/md'
import {MdThumbUp} from 'react-icons/md'
import {MdFindInPage} from 'react-icons/md'

function Devsm () {
    return (
        <Jumbotron fluid className='devsm' >
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Row>
                        <Col xs={1} >
                        <MdSettingsInputComponent/>
                        </Col>
                        <Col>
                        <h5 style={{color:'#ffba00'}} >Web Development & Design</h5>
                        <p>Websites are the essence of your online presence. 
                            We will create a functional website that is 
                            customized for your business and drives results. 
                            All of our websites include SEO, and lead generation tools.
                        </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <Col xs={1}>
                            <MdThumbUp/>
                        </Col>
                        <Col>
                        <h5 style={{color:'#ffba00'}}>Social Media Marketing</h5>
                        <p>
                        We help you with social media management and advertising 
                        to help you grow your business and reach new clients.
                        </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <Col xs={1}>
                            <MdFindInPage/>
                        </Col>
                        <Col>
                        <h5 style={{color:'#ffba00'}}>Search Engine Optimization</h5>
                        <p>
                        We help you improve your Google ranking and increase your organic 
                        (non-paid) website traffic. SEO is more than just incorporating 
                        keywords and we can help to optimize all elements.
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    )
}
export default Devsm;