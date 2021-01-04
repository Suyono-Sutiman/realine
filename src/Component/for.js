import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Mess () {
    return (
        <Container style={{marginTop:'2rem'}} >
            <Row>
                <Col xs={12} md={{span:6, offset:3}}>
                <h4>LET’S START A CONVERSATION</h4>
                    <Form >
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Someone@example.com" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="081234567890" />
                    </Form.Group>
                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="warning" type="submit" href='https:wa.me/6281219013721' >
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Mess;