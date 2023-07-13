import React, { useState } from 'react'

import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/footer'
import banner from '../../Image/banner.png'
import Products from '../components/products/products';
import Categories from '../components/categories/categories';


type Props = {}

const Collections = (props: Props) => {
    
    return <>
        <Navbar />
        {/* Banner */}
        <div className=" py-4 text-white">
            <div className="container max-w-7xl mx-auto ">
                <img src={banner} alt="" className='max-w-7xl text-center' />
            </div>
        </div>
        {/* body*/}
        <div className="container max-w-7xl mx-auto flex" >
            {/* sidebar */}
            
            <Categories/>

            {/* products */}
            
            <Products/>
        </div>






        <Footer />
    </>
}

export default Collections