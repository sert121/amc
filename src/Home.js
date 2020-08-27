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
                    id='1064866'
                    title='Animal Farm'
                    image="https://images-na.ssl-images-amazon.com/images/I/710JXdscVsL._SY500_.jpg"   
                    price={11.96}
                    rating={3} 
                />

                <Product
                    id='1556488'
                    title='AAA batteries'
                    image="https://images-na.ssl-images-amazon.com/images/I/71UyNLSv2mL._AC_SL1348_.jpg"   
                    price={5}
                    rating={2} 
                />

                <Product
                    id='65849911'
                    title='Ryzen 7 3700X '
                    image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SX679_.jpg"
                    price={700.99}
                    rating={4} 
                />


            </div>
            <div className="home_row">

                <Product
                        id='1001561'
                        title='Horizon Zero Dawn'
                        image="https://m.media-amazon.com/images/I/81ED9VvfBwL._AC_UY327_QL65_.jpg"
                        price={20.99}
                        rating={5} 
                    />

                <Product
                        id='4896665'
                        title='VR toolkit'
                        image="https://m.media-amazon.com/images/I/71yuVpvcoEL._AC_UY327_FMwebp_QL65_.jpg"
                        price={555.99}
                        rating={5} 
                    />

                <Product
                        id='5889482'
                        title='PS4 Original Controller : Purple'
                        image="https://m.media-amazon.com/images/I/6119pRvfmDL._AC_UY327_FMwebp_QL65_.jpg"
                        price={30.00}
                        rating={4} 
                    />


            </div>

                        <div className="home_row">

                    <Product
                            id='995822'
                            title='PS4 Controller'
                            image="https://m.media-amazon.com/images/I/6119pRvfmDL._AC_UY327_FMwebp_QL65_.jpg"
                            price={11.96}
                            rating={4} 
                        />

                    <Product
                            id='100005'
                            title='Ghost of Tsushima'
                            image="https://m.media-amazon.com/images/I/81Bzm37TIaL._AC_UY327_FMwebp_QL65_.jpg"
                            price={31.96}
                            rating={3} 
                        />

                    <Product
                            id='1000123'
                            title='Death Stranding'
                            image="https://m.media-amazon.com/images/I/710CxMVpKiL._AC_UY327_FMwebp_QL65_.jpg"
                            price={40.99}
                            rating={3} 
                        />


                </div>


                <div className="home_row">

                    <Product
                            id='121212'
                            title='God of War'
                            image="https://m.media-amazon.com/images/I/813xlI-NGpL._AC_UY327_FMwebp_QL65_.jpg"
                            price={23.99}
                            rating={5} 
                        />

                    <Product
                            id='121212'
                            title='Nioh'
                            image="https://m.media-amazon.com/images/I/81ycPlWtyAL._AC_UY327_FMwebp_QL65_.jpg"
                            price={11.96}
                            rating={5} 
                        />

                    <Product
                            id='121212'
                            title='Iron Man'
                            image="https://m.media-amazon.com/images/I/71Ujzg47ogL._AC_UY327_FMwebp_QL65_.jpg"
                            price={11.96}
                            rating={5} 
                        />


                </div>


                <div className="home_row">

                    <Product
                            id='100010'
                            title="No Man's Sky PS4"
                            image="https://m.media-amazon.com/images/I/81sfDjl-+bL._AC_UY327_FMwebp_QL65_.jpg"
                            price={11.96}
                            rating={5} 
                        />

                    <Product
                            id='100011'
                            title='God of War '
                            image="https://m.media-amazon.com/images/I/813xlI-NGpL._AC_UY327_FMwebp_QL65_.jpg"
                            price={11.96}
                            rating={5} 
                        />

                    <Product
                            id='121212'
                            title='DualShock Accessory'
                            image="https://m.media-amazon.com/images/I/711LqqGZtEL._AC_UY327_FMwebp_QL65_.jpg"
                            price={11.96}
                            rating={5} 
                        />


                </div>




        </div>
    )
}

export default Home
