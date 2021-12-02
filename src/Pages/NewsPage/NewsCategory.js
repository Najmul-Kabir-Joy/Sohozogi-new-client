import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './NewsCategory.css';
const NewsCategory = () => {
    return (
        <div className='container my-3'>
            <Row lg={4} md={3} sm={2} xs={1}>
                <Col>
                    <div className="newsCategoryPolitial">
                        <p className='newsCategoryTitle catpol text-primary'>POLITICAL</p>
                    </div>
                </Col>
                <Col>
                    <div className="newsCategorySports">
                        <p className='newsCategoryTitle text-primary'>SPORTS</p>
                    </div>
                </Col>

                <Col>
                    <div className="newsCategoryFashion">
                        <p className='newsCategoryTitle text-primary'>FASHION</p>
                    </div>
                </Col>
                <Col>
                    <div className="newsCategoryEnter">
                        <p className='newsCategoryTitle text-primary'>CELEBRITY</p>
                    </div>
                </Col>


            </Row>
        </div >
    );
};

export default NewsCategory;