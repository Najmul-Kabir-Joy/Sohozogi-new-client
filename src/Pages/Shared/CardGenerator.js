import React from 'react';
import { Col } from 'react-bootstrap';
import './CardGenerator.css';

const CardGenerator = ({ item }) => {
    const { title, price, seller, discount, productImage1, productImage2, sellerA } = item;
    return (
        <Col>
            <div class="card">
                <div class="imgBx">
                    <img src={productImage1} alt="prd" />
                    <ul class="action">
                        <li>
                            <i class="fas fa-heart"></i>
                            <span>Add to wishlist</span>
                        </li>
                        <li>
                            <i class="fas fa-eye"></i>
                            <span>View Details</span>
                        </li>
                        <li>
                            <i class="fas fa-shopping-cart"></i>
                            <span>Add to cart</span>
                        </li>
                    </ul>
                    {
                        discount > 0 && <div className='discount_view'>
                            <span>- {discount}%</span>
                        </div>
                    }
                </div>
                <div class="content">
                    <div class="productName">
                        <h3>{title}</h3>
                        <small>Shop: {sellerA.shopname || 'not given'}</small>
                    </div>
                    <div class="price_rating">
                        <h2>${price}</h2>
                        <div class="rating">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star grey" aria-hidden="true"></i>
                            <i class="fa fa-star grey" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default CardGenerator;