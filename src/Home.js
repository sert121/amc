import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <img className="home_img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"/>
            {/* Create a product */}
            


            <div className="home_row">

                <Product
                    id='121212'
                    title='Animal Farm'
                    image="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SY500_.jpg"   
                    price={11.96}
                    rating={4} 
                />

                <Product
                    id='121212'
                    title='AAA batteries'
                    image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SL1348_.jpg"   
                    price={5}
                    rating={5} 
                />

                <Product
                    id='121212'
                    title='Ryzen 7 3700X '
                    image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SX679_.jpg"
                    price={11.96}
                    rating={5} 
                />


            </div>
            <div className="home_row">

                <Product
                        id='121212'
                        title='Game 1'
                        image="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SY500_.jpg"   
                        price={11.96}
                        rating={5} 
                    />



            </div>
        </div>
    )
}

export default Home
