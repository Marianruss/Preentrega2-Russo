import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const NewsCarousel = () => {
    return (
        <div >
            <h2 className="m-w-900 novedades mb-5 text-2xl mt-5">Novedades destacadas</h2>
            <Carousel indicators={false} className='mb-10 d-flex self-center m-w-900'>
                <Carousel.Item interval={2000}>
                    <img
                        className="mb-20d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                        alt="Image One"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                        alt="Image Two"
                    />

                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                        alt="Image Two"
                    />

                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}