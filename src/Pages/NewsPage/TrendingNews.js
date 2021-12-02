import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TrendingNews.css';
const TrendingNews = () => {
    return (
        <Container className='mb-5'>
            <h1 className='mx-3 mb-4'>TRENDING NOW</h1>
            <Row lg={2} md={2} sm={1}>
                <Col>
                    <div className="trendNewsContent mb-3">
                        <img src="https://img.thedailystar.net/sites/default/files/styles/big_201/public/images/2021/12/02/zahid_malek.jpg?itok=nCh6Fmd5&timestamp=1638445923" alt="" width='100%' height='100%' />
                        <p className='trendNewsTitle'>More covid labs if numbers of passenger up at Dhaka airport :Health Minister</p>
                        <i className="fas fa-eye"> 10</i>
                    </div>
                </Col>
                <Col>
                    <Row lg={2} md={2} sm={1}>
                        <Col>
                            <div className="trendNewsContent mb-3">
                                <img src="https://img.thedailystar.net/sites/default/files/styles/medium_202/public/feature/images/dse_12.jpg?itok=cU8tM8ip&timestamp=1636628279" alt="" width='100%' height='100%' />
                                <p className='trendNewsTitlesm'>Stocks continues to rise</p>
                                <i className="fas fa-eye"> 10</i>
                            </div>

                        </Col>
                        <Col>
                            <div className="trendNewsContent mb-3">
                                <img src="https://img.thedailystar.net/sites/default/files/styles/big_201/public/images/2021/12/02/zahid_malek.jpg?itok=nCh6Fmd5&timestamp=1638445923" alt="" width='100%' height='100%' />
                                <p className='trendNewsTitlesm'>More covid labs if numbers of passenger up at Dhaka airport :Health Minister</p>
                                <i className="fas fa-eye"> 10</i>
                            </div>
                        </Col>
                        <Col>
                            <div className="trendNewsContent mb-3">
                                <img src="https://img.thedailystar.net/sites/default/files/styles/big_201/public/images/2021/12/02/zahid_malek.jpg?itok=nCh6Fmd5&timestamp=1638445923" alt="" width='100%' height='100%' />
                                <p className='trendNewsTitlesm'>More covid labs if numbers of passenger up at Dhaka airport :Health Minister</p>
                                <i className="fas fa-eye"> 10</i>
                            </div>

                        </Col>
                        <Col>
                            <div className="trendNewsContent mb-3">
                                <img src="https://img.thedailystar.net/sites/default/files/styles/big_201/public/images/2021/12/02/zahid_malek.jpg?itok=nCh6Fmd5&timestamp=1638445923" alt="" width='100%' height='100%' />
                                <p className='trendNewsTitlesm'>More covid labs if numbers of passenger up at Dhaka airport :Health Minister</p>
                                <i className="fas fa-eye"> 10</i>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default TrendingNews;