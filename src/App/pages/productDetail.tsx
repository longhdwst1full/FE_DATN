import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/footer'
import image1 from '../../Image/image3.jpg'
import { TagOutlined, GiftOutlined, CarOutlined } from '@ant-design/icons'
import { SmileOutlined, MehOutlined, FrownOutlined, MehTwoTone } from '@ant-design/icons';
import { Radio } from 'antd';
import img4 from '../../Image/img4.jpg'


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;




type Props = {}

const ProductDetail = (props: Props) => {
  return <>
    <Navbar />
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-7">
      <section className="flex items-center py-8">
        <div className="w-1/2">
          <img src={image1} alt="Left Image" className="w-full" />
        </div>

        <div className="w-1/2 px-8">
          <h2 className="text-3xl font-bold mb-4">Every day is unique, just like our tea hshdad</h2>

          <p className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur. </p>

          <div className="container mx-auto flex flex-row justify-between">
            <div className="w-1/4 flex items-center justify-center">
              <div className="flex items-center">
                <GiftOutlined className="text-1xl" />
                <p className="text-sm ml-2">Branding </p>
              </div>
            </div>
            <div className="w-1/4 flex items-center justify-center">
              <div className="flex items-center">
                <CarOutlined className="text-1xl" />
                <p className="text-sm ml-2">Branding </p>
              </div>
            </div>
            <div className="w-1/4 flex items-center justify-center">
              <div className="flex items-center">
                <TagOutlined className="text-1xl" />
                <p className="text-sm ml-2">Branding </p>
              </div>
            </div>
          </div>

          <h3 className="text-[36px] font-bold mt-4">2$</h3>

          <div className="container mx-auto  mt-4">
            <form action="">
              <p className="text-lg mb-1 mt-7">Variants</p>
              <div className="flex items-center justify-start mt-2 mb-5">
                <RadioGroup defaultValue="M" size="large">
                  <RadioButton value="M">
                    <div className="flex items-center">
                      <SmileOutlined className="text-xl mr-2" />
                      <span>M</span>
                    </div>
                  </RadioButton>
                  <RadioButton value="L">
                    <div className="flex items-center">
                      <MehOutlined className="text-xl mr-2" />
                      <span>L</span>
                    </div>
                  </RadioButton>
                  <RadioButton value="X">
                    <div className="flex items-center">
                      <FrownOutlined className="text-xl mr-2" />
                      <span>X</span>
                    </div>
                  </RadioButton>
                  <RadioButton value="XL">
                    <div className="flex items-center">
                      <MehTwoTone twoToneColor="#eb2f96" className="text-xl mr-2" />
                      <span>XL</span>
                    </div>
                  </RadioButton>
                </RadioGroup>
              </div>
              <div className="flex items-center">
                <span
                  className="text-3xl w-10 h-10   flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </span>
                <input
                  type="text"
                  value={1}
                  className="w-10 px-3 py-2 border border-gray-400 focus:outline-none outline-none border-none  "
                />
                <span
                  className="text-3xl w-10 h-10   flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </span>
                <button className="ml-4 w-48 bg-black text-white px-4 py-2 border border-gray-500 rounded hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                  Add to Cart
                </button>
              </div>


            </form>

          </div>
        </div>
      </section>
    </div>
    <section className="w-full  container max-w-7xl mx-auto p-7">

      <div className="flex h-full  bg-[#F4F4F4] px-6 py-2">
        {/* LEFT */}
        <div className=" w-[15%] flex-grow leading-10">
          <p className='text-3xl mb-4'>Steeping instructions</p>
          <div className=''>
            <p>SERVING SIZE: 2 tsp per cup, 6 tsp per pot</p>
            <hr className='mx-5 w-[70%] h-[1px]' />
          </div>

          <div className='' >
            <p>WATER TEMPERATURE:  100°C</p>
            <hr className='mx-5 w-[70%] h-[1px]' />
          </div>
          <div className='' >
            <p>STEEPING TIME: 3 - 5 minutes</p>
            <hr className='mx-5 w-[70%] h-[1px]' />
          </div>
          <div className='' >
            <p>COLOR AFTER 3 MINUTES</p>

          </div>
        </div>
        {/* right */}
        <div className="w-1/2 flex-grow mx-5">
          <h2 className='text-3xl mb-5'>About this tea</h2>
          <div className='flex justify-between'>
            <div>
              <p className='font-bold'>FLAVOR</p>
              <p>spicy</p>
            </div>
            <div>
              <p className='font-bold'>FLAVOR</p>
              <p>spicy</p>
            </div><div>
              <p className='font-bold'>FLAVOR</p>
              <p>spicy</p>
            </div><div>
              <p className='font-bold'>FLAVOR</p>
              <p>spicy</p>
            </div>
          </div>
          <h2 className='text-[32px]'>Ingredient</h2>
          Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, Cinnamon sticks, Cardamom, Cinnamon pieces.
        </div>
      </div>
      {/* bot */}
      <div className=' my-12 '>
        <h1 className='text-[32px] text-center font-bold my-8'>You may also like</h1>
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
    </section>

    <Footer />
  </>
}

export default ProductDetail