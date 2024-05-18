import React, { useState, useEffect } from "react";
// import logo from '../../../images/logo.jpeg'
import logo from '../../../images/logoo.png'
import Dropdown from '@/Components/Dropdown';



const Header = ({ isauth, isadmin }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobil, setMobil] = useState(true);


    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        const handleResize = () => {
            setMobil(window.innerWidth >= 1024);
            setScreenWidth(window.innerWidth);

        };

        window.addEventListener('resize', handleResize);


        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);

        };
    }, []);

    return (
        <>
            <div>
                <header>
                    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <a href={route('home')} className="flex items-center">
                                <img src={logo} className="mr-3 h-10 " alt="Flowbite Logo" />
                                {screenWidth > 510 &&
                                    <div className="flex">
                                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">E-Akhawayn</span>
                                        {isadmin ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                            </svg>)
                                            : (<></>)
                                        }
                                    </div>
                                }

                            </a>


                            <div className="flex items-center lg:order-2">

                                {isauth ?
                                    (
                                        <div className="flex items-center">
                                            <div className=" bg-gray-200 flex justify-center items-center dark:bg-gray-500">
                                                <div className="bg-white dark:bg-gray-800 w-50 shadow flex justify-center items-center">
                                                    <div onClick={toggleDropdown} className={`relative border-b-4 py-3 cursor-pointer ${isOpen ? 'border-indigo-700' : 'border-transparent'}`}>
                                                        <div className="flex justify-center items-center space-x-3 cursor-pointer">
                                                            <a className="h-6 w-6 hover:text-gray-200 text-gray-300 mr-3" >
                                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                            </a>
                                                        </div>


                                                        {isOpen && (
                                                            <div className="absolute w-38 px-2 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-2 " style={{ zIndex: 9 }}>
                                                                <ul className="space-y-2 dark:text-white">

                                                                    <li className="font-medium">
                                                                        <a href={route('profile.edit')} className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                                                                            <div className="mr-3">
                                                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                                            </div>
                                                                            Account
                                                                        </a>
                                                                    </li>


                                                                    <hr className="dark:border-gray-500" />

                                                                    <li className="font-medium">
                                                                        <div>

                                                                            <Dropdown.Link href={route('logout')} method="post" as="button" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">

                                                                                <div className="mr-3 text-red-600">
                                                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                Log Out
                                                                            </Dropdown.Link>
                                                                        </div>

                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <a href={route('cart.view')} className={isMobil ? 'mr-6 ml-3' : ''}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </a> </div>
                                    )
                                    :
                                    (
                                        <div className="flex">
                                            <a href={route('login')} className="h-6 w-6 hover:text-gray-200 text-gray-300 mx-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                                </svg>

                                            </a>
                                            <a href={route('register')} className="h-6 w-6 hover:text-gray-200 text-gray-300 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                </svg>

                                            </a>
                                        </div>
                                    )
                                }

                                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded={isMobileMenuOpen}
                                    onClick={handleMobileMenuToggle}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>


                            <div className={`${isMobileMenuOpen ? '' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                                    {
                                        isauth && isadmin ? (
                                            <li>
                                                <a href={route('dashboard.products')} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
                                            </li>
                                        )
                                            :
                                            (<></>)
                                    }

                                    <li>
                                        <a href={route('home')} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                                    </li>
                                    <li>
                                        <a href={route('store')} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Store</a>
                                    </li>
                                    <li>
                                        <a href={route('services')} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                    </li>
                                    <li>
                                        <a href={route('about')} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                                    </li>
                                    <li>
                                        <a href={route('contact.view')} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>


            </div>

        </>
    )


}

export default Header;
