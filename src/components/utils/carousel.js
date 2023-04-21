import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const NewsCarousel = ({ item }) => {
    return (
        <div >
            <h2 className="m-w-900 novedades mb-5 text-2xl mt-5">Novedades destacadas</h2>
            <Carousel indicators={false} controls={false} className='mb-10 d-flex self-center m-w-900'>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={item.photo}
                        alt={item.name}
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
}