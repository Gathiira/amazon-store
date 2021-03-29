import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="banner" />
                <div className="home__row">
                    <Product 
                    id= {1}
                    title="Macbook pro Air max 13.3 inches. Very clean" 
                    price={1200} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Product 
                    id= {123}
                    title="Macbook pro Air max 13.3 inches. Very clean" 
                    price={1000} 
                    rating={2} 
                    image="https://images.unsplash.com/photo-1617002875212-2d64c72ea93b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="home__row">
                    <Product 
                    id= {45}
                    title="Macbook pro Air max 13.3 inches. Very clean" 
                    price={1020} 
                    rating={1} 
                    image="https://images.unsplash.com/photo-1612831819448-f6cae53d3dcf?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80" />
                    <Product 
                    id= {13434}
                    title="Macbook pro Air max 13.3 inches. Very clean" 
                    price={1199} 
                    rating={5} 
                    image="https://images.unsplash.com/photo-1616702299123-352d5d6c9511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <Product 
                    id= {454}
                    title="Macbook pro Air max 13.3 inches. Very clean" 
                    price={999} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1606127195437-d12564b184e9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="home__row">
                    <Product 
                    id= {4545}
                    title="Macbook pro Air max 13.3 inches. Very clean" 
                    price={1000} 
                    rating={3} 
                    image="https://images.unsplash.com/photo-1594612129860-adc86a289eaf?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
        </div>
    )
}

export default Home
