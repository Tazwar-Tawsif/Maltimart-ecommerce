import React from 'react'

import './footer.css'
import logo from '../../assets/images/eco-logo.png'

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()
const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4' md='6' className='mb-4'>
                    <div className='logo'>
                        <div>
                            <h1 className='text-white'>Generic E-commerce</h1>
                        </div>
                    </div>
                    <p className='footer-text mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique velit sint tenetur, autem id.</p>
                    </Col>
                    <Col lg='3' md='3' className='mb-4'>
                        <div className="footer-quick-links">
                            <h4 className="footer-links-title">Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='#'>Arm Chairs</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' md='3' className='mb-4'>
                    <div className="footer-quick-links">
                            <h4 className="footer-links-title">Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                    <div className="footer-quick-links">
                            <h4 className="footer-links-title">Contacts</h4>
                            <ListGroup className='footer-contact mb-3'>
                                <ListGroupItem className='ps-0  border-0 d-flex align-item-center gap-2'>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>23/U, Ayyoo, Wassup</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0 d-flex align-item-center gap-2'>
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>+88016624459</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0  border-0 d-flex align-item-center gap-2'>
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>idk@why.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12' >
                        <p className="footer-copyright">Copyright {year}. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer