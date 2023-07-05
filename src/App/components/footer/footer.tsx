import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
    return (
        <footer className=" py-4">
            <div className="container max-w-7xl mx-auto px-4 py-7 sm:px-6 lg:px-8 bg-gray-200">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg font-bold mb-2">COLLECTIONS</h4>
                        <ul className="list-none">
                            <li className="flex items-start mb-2">Black teas</li>
                            <li className="flex items-start mb-2">Green teas</li>
                            <li className="flex items-start mb-2">White teas</li>
                            <li className="flex items-start mb-2">Herbal teas</li>
                            <li className="flex items-start mb-2">Matcha</li>
                            <li className="flex items-start mb-2">Chai</li>
                            <li className="flex items-start mb-2">Oolong</li>
                            <li className="flex items-start mb-2">Rooibos</li>
                            <li className="flex items-start mb-2">Teaware</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg font-bold mb-2">LEARN</h4>
                        <ul className="list-none">
                            <li className="flex items-start mb-2">About us</li>
                            <li className="flex items-start mb-2">About our teas</li>
                            <li className="flex items-start mb-2">Tea academy</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h4>
                        <ul className="list-none">
                            <li className="flex items-start mb-2">Ordering and payment</li>
                            <li className="flex items-start mb-2">Delivery</li>
                            <li className="flex items-start mb-2">Privacy and policy</li>
                            <li className="flex items-start mb-2">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg font-bold mb-2">CONTACT US</h4>
                        <ul className="list-none">
                            <li className="flex items-start mb-2">
                                <WhatsAppOutlined className="mr-2 mt-1" />
                                <span>
                                    Address: 3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Province, Iran
                                </span>
                            </li>
                            <li className="flex items-start mb-2">
                                <WhatsAppOutlined className="mr-2 mt-1" />
                                <span>Email: amoopur@gmail.com</span>
                            </li>
                            <li className="flex items-start mb-2">
                                <WhatsAppOutlined className="mr-2 mt-1" />
                                <span>Tel: +98 9173038406</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
