import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {

    return (
        <div>
            <Form className='wea_content__form'>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Name' />
                        </Col>
                        <Col>
                            <Form.Label>Company</Form.Label>
                            <Form.Control placeholder='Company' />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder='Email' type='email' />
                        </Col>
                        <Col>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder='____-____-____-____' />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as='textarea' rows='3' />
                        </Col>
                    </Row>
                </Form.Group>
                <Button type='submit'>SUBMIT</Button>
            </Form>
        </div>
    )
}

export default ContactForm