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
                    price={1200.67} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Product 
                    id= {2}
                    title="Nike plan plus. Great on your feet" 
                    price={1070.99} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    <Product 
                    id= {3}
                    title="Nike. Air Force. Why worry with such a protection" 
                    price={1000.78} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1617695103171-8f9c25f014c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" />
                </div>
                <div className="home__row">
                    <Product 
                    id= {4}
                    title="Dior. Make Tarmac a path to success" 
                    price={1100.50} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1617603280856-0ecabba82e09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Product 
                    id= {6}
                    title="Nike laces. Tie harder than most of the relationships" 
                    price={1199} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1577990780770-3676301d8760?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
                    <Product 
                    id= {6}
                    title="Iphone 11 max. 256GB 64MP. Nice on face, pocket and ears" 
                    price={1199} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                </div>
                <div className="home__row">
                    <Product 
                    id= {8}
                    title="Nikon 1ps3. Capture memories in a shoot" 
                    price={1201} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1481923387198-050ac1a2896e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbWVyYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    <Product 
                    id= {9}
                    title="Niken Er3454. Slow motion pictures are also possible" 
                    price={999} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    <Product 
                    id= {10}
                    title="Niken Drtr3343. Configure autoshoot and relax to smile." 
                    price={2011} 
                    rating={4} 
                    image="https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" />
                </div>
            </div>
        </div>
    )
}

export default Home
