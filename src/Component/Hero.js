import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Navi from './Navi';

function Hero () {
    return (
        <Jumbotron fluid className="hero">
            <Navi/>
            <Container>
                    <h1 className='dpt' >Digital</h1>
                    <h1 className='dpt'>Marketing</h1>
                    <Button variant='light' size='lg' href='#About' >READ MORE</Button>
            </Container>
        </Jumbotron>
    )
}
export default Hero;