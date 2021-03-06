import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ourservices.css'
const OurServices = () => {
    return (
        <section className='py-5'>
            <div className='services-title'>
                <h1 className='services-title-text'>OUR SERVICES</h1>
            </div>
            <div className='services-container'>
                <Container>
                    <Row xs={1} md={4} className='services-items g-5 py-3 mx-2'>
                        <Col className='services-item  mx-auto py-4'>
                            <div className="service-item-icon-container">
                                <i className="fas fa-utensils service-item-icon"></i>
                            </div>
                            <div className="servive-item-text-container">
                                <p className='service-item-text'>ORDER FOODS</p>
                            </div>
                        </Col>
                        <Col className='services-item  mx-auto py-4'>
                            <div className="service-item-icon-container">
                                <i className="fas fa-utensils service-item-icon"></i>
                            </div>
                            <div className="servive-item-text-container">
                                <p className='service-item-text'>ORDER FOODS</p>
                            </div>
                        </Col>
                        <Col className='services-item  mx-auto py-4'>
                            <div className="service-item-icon-container">
                                <i className="fas fa-utensils service-item-icon"></i>
                            </div>
                            <div className="servive-item-text-container">
                                <p className='service-item-text'>ORDER FOODS</p>
                            </div>
                        </Col>
                    </Row>
                    <Row xs={1} md={4} className='services-items g-5 py-3 mx-2'>
                        <Col className='services-item py-4  mx-auto'>
                            <div className="service-item-icon-container">
                                <i className="fas fa-utensils service-item-icon"></i>
                            </div>
                            <div className="servive-item-text-container">
                                <p className='service-item-text'>ORDER FOODS</p>
                            </div>
                        </Col>
                        <Col className='services-item  py-4  mx-auto'>
                            <div className="service-item-icon-container">
                                <i className="fas fa-utensils service-item-icon"></i>
                            </div>
                            <div className="servive-item-text-container">
                                <p className='service-item-text'>ORDER FOODS</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default OurServices;