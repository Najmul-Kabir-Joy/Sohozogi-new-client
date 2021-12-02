import React, { useEffect, useState } from 'react';
import './HomePharmacy.css';
import Slider from 'react-slick';
import { Container, Row } from 'react-bootstrap';
import CardGenerator from '../Shared/CardGenerator';

const HomePharmacy = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/product/all')
            .then(res => res.json())
            .then(data => setItems(data.products))
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            }
        ]
    };
    return (
        <section>
            <h1>MEDICS</h1>
            <Container className='mx-auto'>
                <Slider {...settings}>
                    {
                        items.map(item => {
                            if (item.sellerA.catagory === 'Pharmacy') {
                                return (
                                    <CardGenerator item={item} />
                                )
                            }
                        })
                    }

                </Slider>
            </Container>
        </section>
    );
};

export default HomePharmacy;