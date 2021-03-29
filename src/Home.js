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
                </div>
            </div>
        </div>
    )
}

export default Home
