import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/footer'
import image2 from '../../Image/image2.jpg'
import Visa from '../../Image/Visa.jpg'
import advance from '../../Image/Advance.jpg'
import ideal from '../../Image/ideal.jpg'
import maestro from '../../Image/Maestro.jpg'
import mastercard from '../../Image/MasterCard.jpg'
import img4 from '../../Image/img4.jpg'


type Props = {}

const CheckOutPage = (props: Props) => {
    return (
        <>
            <Navbar />
            <div className='container max-w-7xl mx-auto my-10'>
                <div className='flex justify-between'>
                    {/* left */}
                    <div className='w-[45%] '>
                        {/* 1 */}
                        <div className=' my-5'>
                            <div className='flex '>
                                <div className='flex items-center'>
                                    <div className='w-[25%]'>
                                        <img src={image2} alt="" />
                                    </div>
                                    <div className='px-6 mr-2'>
                                        <p>Ceylon Ginger Cinnamon chai tea - 50 g</p>
                                        <button className=''>Remove</button>
                                    </div>
                                </div>
                                <div className=' grid justify-items-end'>
                                    <div className='flex items-center'>
                                        <span
                                            className="text-3xl w-10    flex items-center justify-center hover:bg-gray-300"
                                        >
                                            -
                                        </span>
                                        <input
                                            type="text"
                                            value={1}
                                            className="w-10 px-4 py-2 border border-gray-400 focus:outline-none outline-none border-none  "
                                        />
                                        <span
                                            className="text-3xl w-10 flex  items-center  justify-center hover:bg-gray-300"
                                        >
                                            +
                                        </span>

                                    </div>
                                    <p className='px-2'>€3.90</p>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className=' my-5'>
                            <div className='flex '>
                                <div className='flex items-center'>
                                    <div className='w-[25%]'>
                                        <img src={image2} alt="" />
                                    </div>
                                    <div className='px-6 mr-2'>
                                        <p>Ceylon Ginger Cinnamon chai tea - 50 g</p>
                                        <button className=''>Remove</button>
                                    </div>
                                </div>
                                <div className=' grid justify-items-end'>
                                    <div className='flex items-center'>
                                        <span
                                            className="text-3xl w-10    flex items-center justify-center hover:bg-gray-300"
                                        >
                                            -
                                        </span>
                                        <input
                                            type="text"
                                            value={1}
                                            className="w-10 px-4 py-2 border border-gray-400 focus:outline-none outline-none border-none  "
                                        />
                                        <span
                                            className="text-3xl w-10 flex  items-center  justify-center hover:bg-gray-300"
                                        >
                                            +
                                        </span>

                                    </div>
                                    <p className='px-2'>€3.90</p>
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className=' my-5'>
                            <div className='flex '>
                                <div className='flex items-center'>
                                    <div className='w-[25%]'>
                                        <img src={image2} alt="" />
                                    </div>
                                    <div className='px-6 mr-2'>
                                        <p>Ceylon Ginger Cinnamon chai tea - 50 g</p>
                                        <button className=''>Remove</button>
                                    </div>
                                </div>
                                <div className=' grid justify-items-end'>
                                    <div className='flex items-center'>
                                        <span
                                            className="text-3xl w-10    flex items-center justify-center hover:bg-gray-300"
                                        >
                                            -
                                        </span>
                                        <input
                                            type="text"
                                            value={1}
                                            className="w-10 px-4 py-2 border border-gray-400 focus:outline-none outline-none border-none  "
                                        />
                                        <span
                                            className="text-3xl w-10 flex  items-center  justify-center hover:bg-gray-300"
                                        >
                                            +
                                        </span>

                                    </div>
                                    <p className='px-2'>€3.90</p>
                                </div>
                            </div>
                        </div>
                        <hr className='mx-10 ' />
                        <div className='flex justify-between py-5'>
                            <p>Subtotal</p>
                            <p className='px-2'>€3.90</p>
                        </div>
                        <div className='text-center'>
                            <button className='uppercase border border-gray-500 px-6 py-3'>Back to shopping</button>
                        </div>
                    </div>


                    {/* right */}
                    <div className='w-[40%] '>
                        {/*  */}
                        <div className='px-5 py-3 bg-[#F4F4F4]'>
                            <div className=''>
                                <h1 className='text-[25px] my-4'>Order summery</h1>
                                <div className='flex justify-between my-2'>

                                    <p>Subtotal</p>

                                    <p className='px-2'>€3.90</p>

                                </div>
                                <div className='flex justify-between my-2'>

                                    <p>Deleivery</p>

                                    <p className='px-2'>€3.95</p>

                                </div>
                            </div>

                            <hr className='mx-10 my-5 ' />
                            <div className='flex justify-between items-center'>

                                <p>Total</p>

                                <p className='px-2 text-[20px]'>€7.85</p>

                            </div>
                            <p className='opacity-50 py-4'>Estimated shipping time: 2 days</p>
                            <div className='text-center  bg-[#282828] py-3'>
                                <button className='text-[20px] text-white'>Check Out</button>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='px-5 py-3 bg-[#F4F4F4] my-5'>
                            <p className='text-[22px] py-3'>Payment type</p>
                            <div className='flex justify-between'>
                                <img src={Visa} alt="" />
                                <img src={mastercard} alt="" />
                                <img src={maestro} alt="" />
                                <img src={ideal} alt="" />
                                <img src={advance} alt="" />
                            </div>
                        </div>
                        {/* 3 */}
                        <div className='px-5 py-3 bg-[#F4F4F4]'>
                            <h2 className='text-[22px] my-4'>Delivery and retour</h2>
                            <ul className='list-disc px-5 leading-8'>
                                <li>Order before 12:00 and we will ship the same day.

                                </li>
                                <li>Orders made after Friday 12:00 are processed on Monday.

                                </li>
                                <li>To return your articles, please contact us first.</li>
                                <li>Postal charges for retour are not reimbursed.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' my-12'>
                    <h1 className='text-[32px] text-center font-bold'>Popular this season</h1>
                    <div className='flex justify-center gap-24'>
                        <div className=' '>
                            <img src={img4} className='mx-auto' alt="" />
                            <div className='text-center'>
                                <p>Ceylon Ginger Cinnamon chai tea</p>
                                <p>€4.85 / 50 g</p>
                            </div>
                        </div>
                        <div className=' '>
                            <img src={img4} className='mx-auto' alt="" />
                            <div className='text-center'>
                                <p>Ceylon Ginger Cinnamon chai tea</p>
                                <p>€4.85 / 50 g</p>
                            </div>
                        </div>
                        <div className=' '>
                            <img src={img4} className='mx-auto' alt="" />
                            <div className='text-center'>
                                <p>Ceylon Ginger Cinnamon chai tea</p>
                                <p>€4.85 / 50 g</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CheckOutPage