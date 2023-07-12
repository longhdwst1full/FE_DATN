import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';

import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/footer'
import banner from '../../Image/banner.png'
import image from '../../Image/image1.jpg'


type Props = {}

const Collections = (props: Props) => {
    const [dropdownStates, setDropdownStates] = useState<boolean[]>([false, false, false]);

    const toggleDropdown = (index: number) => {
        const updatedDropdownStates = [...dropdownStates];
        updatedDropdownStates[index] = !updatedDropdownStates[index];
        setDropdownStates(updatedDropdownStates);
    };

    const sidebarData = [
        { label: 'Button 1', icon: <PlusOutlined /> },
        { label: 'Button 2', icon: <PlusOutlined /> },
        { label: 'Button 3', icon: <PlusOutlined /> },
    ];
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
            <div className=" h-full w-60 flex flex-col  justify-start ml-4">
                <div className="mt-4 ">
                    {sidebarData.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className='relative '>
                                <button
                                    className="py-2 px-1 mb-2 mt-3 w-full   relative border-black text-gray-700 hover:bg-gray-300 hover:text-gray-900 flex items-center justify-between "
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <span className=''>{item.label}</span>
                                    <span
                                        className={`transform transition-transform ${dropdownStates[index] ? 'rotate-45' : ''
                                            }`}
                                    >
                                        {item.icon}
                                    </span>

                                </button>
                                {dropdownStates[index] && (
                                    <ul className="w-full text-gray-700 shadow-lg  py-2 mb-5 ">
                                        <li className="px-4 py-2  hover:bg-gray-300 ">
                                            <input type="checkbox" className="mr-7" />
                                            Action 1
                                        </li>
                                        <li className="px-4 py-2  hover:bg-gray-300 hover:text-gray-900">
                                            <input type="checkbox" className="mr-7" />
                                            Action 2
                                        </li>
                                        <li className="px-4 py-2  hover:bg-gray-300 hover:text-gray-900">
                                            <input type="checkbox" className="mr-7" />
                                            Action 3
                                        </li>
                                    </ul>
                                )}
                                <div className="h-0.5 bg-black absolute bottom-0 left-1/4 right-1/4"></div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>
            {/* products */}
            <div className="flex-grow h-full flex flex-col justify-end ml-4">
                <div className="mb-4 flex justify-end border-transparent focus:outline-none focus:shadow-none">
                    <select className="px-4 py-2  rounded ml-auto mr-4">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold"><a href="/productsDetail">Product 3</a></span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="Product 3" className="w-full h-64 mr-2" />
                        <div className="flex flex-col items-center">
                            <div className="mb-2">
                                <span className="font-bold">Product 3</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="ml-2">- $20</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>






        <Footer />
    </>
}

export default Collections