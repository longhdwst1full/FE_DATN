import React from 'react';
import Navbar from '../components/header/Navbar';
import image1 from '../../Image/image1.jpg'
import image2 from '../../Image/image2.jpg'
import image3 from '../../Image/image3.jpg'
import { TagOutlined, GiftOutlined, CarOutlined } from '@ant-design/icons'


const Home: React.FC = () => {
    return <>
        <Navbar />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* Section 1 */}
            <section className="flex items-center py-8">
                <div className="w-1/2">
                    <img src={image1} alt="Left Image" className="w-full" />
                </div>
                <div className="w-1/2 px-8">
                    <h2 className="text-3xl font-bold mb-4">Every day is unique, just like our tea</h2>
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.</p>
                    <div className="container mx-auto  mt-4">
                        <button className="w-36 bg-black text-white px-4 py-4  border border-gray-500 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                            BROWES TEA
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="bg-gray-200 py-8">
                <div className="container mx-auto flex flex-row justify-between">
                    <div className="w-1/4 flex items-center justify-center">
                        <div className="flex items-center">
                            <TagOutlined className="text-2xl" />
                            <p className="text-sm ml-2">Branding Section Description</p>
                        </div>
                    </div>
                    <div className="w-1/4 flex items-center justify-center">
                        <div className="flex items-center">
                            <GiftOutlined className="text-2xl" />
                            <p className="text-sm ml-2">Branding Section Description</p>
                        </div>
                    </div>
                    <div className="w-1/4 flex items-center justify-center">
                        <div className="flex items-center">
                            <CarOutlined className="text-2xl" />
                            <p className="text-sm ml-2">Branding Section Description</p>
                        </div>
                    </div>
                    <div className="w-1/4 flex items-center justify-center">
                        <div className="flex items-center">
                            <TagOutlined className="text-2xl" />
                            <p className="text-sm ml-2">Branding Section Description</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex justify-center mt-4">
                    <button className="w-52 bg-gray-200 text-black px-4 py-4  border border-gray-500 hover:bg-black hover:text-white transition duration-300 ease-in-out">
                        LEARN MORE
                    </button>
                </div>
            </section>




            {/* Section 3 */}
            <section className="py-8">
                <h2 className="text-2xl font-bold mb-4 text-center">OUR COLLECTIONS</h2>
                <div className="container mx-auto grid grid-cols-3 gap-4 gap-y-8 ">
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">BLACK TEA</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">GREEN TEA</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">WHITE TEA</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">MATCHA</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">HERBAL TEA</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">CHAI</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">OOLONG</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2">ROOIBOS</p>
                    </div>
                    <div className="w-full">
                        <img src={image2} alt="Image 1" className="w-full" />
                        <p className="text-sm ml-2 text-center mt-2 ">TEAWARE</p>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="bg-gray-200 py-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center ">LAST BLOG POST</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center mb-4 ml-5">
                                <div className="w-1/2">
                                    <img src={image3} alt="Blog Image 1" className="w-72 h-96" />
                                </div>
                                <div className="w-1/2 px-8">
                                    <h2 className="text-3xl font-bold mb-10">Every day is unique, just like our tea</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero consectetur optio ratione voluptatibus praesentium quibusdam modi dolores harum, eaque consequatur voluptatum a quis laudantium alias? Voluptas tempora odit sunt exercitationem?</p>
                                    <p className='mt-2 font-black'>READ MORE</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-4 ml-5">
                                <div className="w-1/2">
                                    <img src={image3} alt="Blog Image 1" className="w-72 h-96" />
                                </div>
                                <div className="w-1/2 px-8">
                                    <h2 className="text-3xl font-bold mb-10">Every day is unique, just like our tea</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur harum provident magnam excepturi accusantium cum, inventore, optio aliquam cupiditate at, laudantium sed eligendi. Fugit ducimus labore impedit libero provident.</p>
                                    <p className='mt-2 font-black'>READ MORE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 5 */}
            <section className="flex items-center py-8">
                <div className="w-1/2 px-8">
                    <h2 className="text-3xl font-bold mb-4">Every day is unique, just like our tea</h2>
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.</p>
                    <div className="container mx-auto  mt-4">
                        <button className="w-36 bg-black text-white px-4 py-4  border border-gray-500 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                            BROWES TEA
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={image1} alt="Left Image" className="w-full" />
                </div>
            </section>
        </div>
    </>;
};

export default Home;
