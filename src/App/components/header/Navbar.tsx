import React, { useState } from 'react';
import { MenuOutlined, UserOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <a href="#" className="text-black text-2xl font-semibold">
              Logo
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
            <a href="/" className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                HOME
              </a>
              <a href='/products' className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                TEA COLLETIONS
              </a>
              <a href="#" className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                BLOG
              </a>
              <a href="#" className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                CONTACT US
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex relative">
            {isSearchOpen && (
                <div className="absolute top-0 right-0 mt-14 ">
                  <input
                    type="text"
                    className="px-2 py-2  bg-gray-100 text-gray-800 focus:outline-none focus:border-yellow-500 border-2 border-black"
                    placeholder="Search..."
                  />
                </div>
              )}
              <div className="flex items-center space-x-4">
                <button type="button" className="text-black hover:text-gray-500 focus:outline-none" onClick={toggleSearch}>
                  <SearchOutlined className="h-6 w-6" />
                </button>
                <button type="button" className="text-black hover:text-gray-500 focus:outline-none">
                  <UserOutlined className="h-6 w-6" />
                </button>
                <button type="button" className="text-black hover:text-gray-500 focus:outline-none">
                  <ShoppingCartOutlined className="h-6 w-6" />
                </button>
              </div>
            </div>


            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none transition-transform duration-300 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                onClick={toggleNavbar}
              >
                <MenuOutlined className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden transform origin-top transition duration-1000 ease-in-out " >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a href="#" className="text-black hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
              TEA COLLETIONS
            </a>
            <a href="#" className="text-black hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
              ACCESSORIES
            </a>
            <a href="#" className="text-black hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
              BLOG
            </a>
            <a href="#" className="text-black hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium">
              CONTACT US
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <SearchOutlined className="h-6 w-6 mr-3 text-black" />
                <input
                  type="text"
                  className=" px-2 py-2  bg-gray-100 text-gray-800 focus:outline-none focus:border-yellow-500 border-2 border-black"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="flex items-center mt-3 px-5">
              <button className="flex-shrink-0">
                <UserOutlined className="h-6 w-6 text-black hover:text-gray-500 focus:outline-none "  />
              </button>
              <div className="ml-3">
                <p className="text-sm font-medium text-black hover:text-gray-500 ">User</p>
              </div>
            </div>
            <div className="flex items-center mt-3 px-5">
              <button className="flex-shrink-0">
                <ShoppingCartOutlined className="h-6 w-6 text-black hover:text-gray-500 focus:outline-none" />
              </button>
              <div className="ml-3">
                <p className="text-sm font-medium text-black hover:text-gray-500 ">Cart</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
