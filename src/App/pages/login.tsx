import Footer from '../components/footer/footer';
import React, { useState } from 'react'
import Navbar from '../components/header/Navbar'
import { MailOutlined, RightOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import { type } from 'os';

type Props = {}
const Login = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(email, password)
        // axios.post('/api/register', {
        //     username: username,
        //     email: email,
        //     password: password
        // })
        //     .then(response => {
        //         // Xử lý phản hồi từ server khi đăng ký thành công
        //     })
        //     .catch(error => {
        //         // Xử lý lỗi nếu có
        //     });
    }
    return <>
        <Navbar />
        <div className="container max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pt-5 lg:gap-8">
                <div className="h-full w-[552px]  bg-[#F4F4F4] py-6 px-12 mr-10">
                    <div>
                        <h3 className='text-[22px] font-[400] text-[#282828]'>Already a customer?</h3>
                        <p className='text-[16px] font-[400] text-[#282828]'>Welcome back! Sign in for faster checkout.</p>
                    </div>

                    <div className="">
                        <form className='py-4 grid gap-y-7' onSubmit={handleSubmit}>

                            <div className="relative">
                                <span className="absolute inset-y-0  grid w-10 place-content-center">
                                    <MailOutlined />
                                </span>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Email address  "
                                    className="w-full w-full px-10 py-2 text-[16px] leading-6 text-[#282828]"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="relative">

                                <span className="absolute inset-y-0  grid w-10 place-content-center">
                                    <MailOutlined />
                                </span>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Enter your password "
                                    className="w-full w-full px-10 py-2 text-[16px] leading-6 text-[#282828]"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className=" w-[454px] flex items-center justify-between">
                                <div className="">
                                    <input
                                        className="w-[15px] h-[15px] "
                                    />

                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer text-[16px] font-[400] text-[#282828] leading-6 "
                                    >
                                        Please remember me
                                    </label>
                                </div>


                                <a
                                    href="#!"
                                    className="ext-[16px] font-[400] text-[#282828] leading-6 text-[#C3B212]"
                                >Forget password?
                                </a>
                            </div>


                            <button
                                type="submit"
                                className="bg-[#282828] px-[24px] py-[10px] font-[500] text-[14px] leading-5 text-[#FFFFFF]"
                            >
                                SIGN IN
                            </button>

                            <div
                                className="py-1 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                    OR
                                </p>
                            </div>


                            <a
                                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-2 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#3b5998]"
                                // style="background-color: #3b5998"
                                href="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">

                                <FacebookOutlined className='mr-2 h-3.5 w-3.5 fill-white' />
                                Continue with Facebook
                            </a>
                            <a
                                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-2 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] bg-[#55acee]"
                                // style="background-color: #55acee"
                                href="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <GoogleOutlined className='mr-2 h-3.5 w-3.5 fill-white' />
                                Continue with Google
                            </a>
                        </form>
                    </div>
                </div>

                <div className=" mr-10 grid gap-y-10">
                    <div className=' py-6 px-12 bg-[#F4F4F4] grid gap-y-1'>
                        <div>
                            <h3 className='text-[22px] font-[400] text-[#282828]'>New to our company?</h3>
                            <p className='text-[16px] font-[400] text-[#282828]'>Create an account for the best experience</p>
                        </div>
                        <div className='w-376px pl-11 '>
                            <ul className='grid gap-y-6'>
                                <li><span><RightOutlined /><a href="#" className='text-[14px] pl-8'>Modify and track your orders</a></span></li>
                                <li><span><RightOutlined /><a href="#" className='text-[14px] pl-8'>Faster checkout</a></span></li>
                                <li><span><RightOutlined /><a href="#" className='text-[14px] pl-8'>Get a 10% discount for new customer</a></span></li>
                            </ul>
                        </div>


                        <button className="w-full border border-solid border-black px-[24px] py-[10px] font-[500] text-[14px] leading-5 text-[#282828] mt-10 uppercase">create an account</button>

                    </div>

                    <div className='py-6 px-12 bg-[#F4F4F4]'>
                        <div>
                            <h3 className='text-[22px] font-[400] text-[#282828]'>Guest checkout</h3>
                            <p className='text-[16px] font-[400] text-[#282828]'>No ready to become a customer?</p>
                        </div>

                        <button className="w-full border border-solid border-black px-[24px] py-[10px] font-[500] text-[14px] leading-5 text-[#282828] mt-7 uppercase">checkout as a guest</button>
                    </div>


                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Login
