import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Dropdown from '@/Components/Dropdown';
import { Head } from '@inertiajs/react';


const ShoppingCard = ({ auth, cart }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const count = cart ? Object.keys(cart).length : 0;
    const [totalCost, setTotalCost] = useState(0);
    const [shippingCost, setShippingCost] = useState(100);


    // console.log(cart)
    // console.log(count)

    const handleShippingChange = (event) => {
        setShippingCost(parseFloat(event.target.value));
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        if (cart) {
            let cost = 0;
            Object.values(cart).forEach((item) => {
                cost += item.price * item.quantity;
            });
            setTotalCost(cost);
        }
    }, [cart]);

    const goBack = () => {
        window.history.back();
    };


    // console.log(shippingCost)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">ShoppingCart</h2>}
        >
            <Head title="ShoppingCart" />
            <div className="bg-gray-100">
                <div className="container mx-auto mt-10">
                    <div style={{ display: screenWidth < 770 ? 'block' : 'flex' }} className="shadow-md my-10">
                        <div className={`${screenWidth < 770 ? 'w-4/4' : 'w-3/4'} bg-white px-10 py-10`}>
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Cart</h1>
                                <h2 className="font-semibold text-2xl">{count} Items</h2>

                                <Dropdown.Link
                                    href={route('cart.clear')}
                                    className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                                    method="post" as="button" type="button">
                                    clear
                                </Dropdown.Link>


                            </div>

                            <div className="flex mt-10 mb-5">
                                <h3 className={` ${screenWidth > 540 ? 'w-2/5' : 'w-2/5'} font-semibold text-gray-600 text-xs uppercase `}>Product Details</h3>
                                <h3 className={` ${screenWidth > 540 ? 'w-1/5' : 'w-2/5'} font-semibold text-center text-gray-600 text-xs uppercase text-center`}>Quantity</h3>
                                <h3 className={` ${screenWidth > 540 ? 'w-1/5' : 'w-1/4'} font-semibold text-center text-gray-600 text-xs uppercase  text-center`}>Price</h3>
                                {screenWidth > 540 &&
                                    <h3 className={` ${screenWidth > 540 ? 'w-1/5' : 'w-1/4'} font-semibold text-center text-gray-600 text-xs uppercase  text-center`}>Total</h3>
                                }
                            </div>
                            {/* cart items */}


                            {count > 0 ? (
                                Object.values(cart).map((item, index) => (
                                    <div key={index} className={` ${screenWidth < 540 ? 'border-b-2 border-gray-300' : 'border-b-2 border-gray-300'} flex items-center hover:bg-gray-100 -mx-8 px-6 py-5`}>


                                        <div className={` ${screenWidth > 540 ? 'w-2/5 flex' : 'w-2/5 block'} `}>
                                            <div className="w-25">
                                                {item.attributes.image && (
                                                    <img src={item.attributes.image} className='w-20' alt="Product Image" />
                                                )}
                                            </div>
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className={` ${screenWidth < 770 ? 'mt-14' : ''} font-bold text-sm`}>{item.name}</span>

                                                {screenWidth < 770 ?
                                                    (<></>)
                                                    :
                                                    (<span className="font-small text-sm">{item.attributes.description}</span>)
                                                }

                                                <Dropdown.Link
                                                    href={route('cart.remove', item.id)}
                                                    className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                                                    method="post" as="button" type="button">
                                                    remove
                                                </Dropdown.Link>

                                            </div>
                                        </div>


                                        <div className={` ${screenWidth > 540 ? 'w-1/5' : 'w-2/5'} flex justify-center `}>
                                            {/* Decrease quantity */}
                                            <Dropdown.Link
                                                method="post" as="button" type="button"
                                                href={route('cart.Decrease', item.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>

                                            </Dropdown.Link>
                                            <input className="w-11 mx-2 border border-gray-900 rounded-md    focus:outline-none focus:border-transparent text-center w-11 bg-transparent"
                                                type="text" value={item.quantity} readOnly />
                                            {/* Increase quantity */}
                                            <Dropdown.Link
                                                method="post" as="button" type="button"
                                                href={route('cart.Increase', item.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>

                                            </Dropdown.Link>
                                        </div>
                                        {screenWidth > 540 &&
                                            <span className={` ${screenWidth > 540 ? 'w-1/5' : 'w-1/5'} text-center  font-semibold text-sm`}>{(item.price * 1).toFixed(2)} DH</span>
                                        }
                                        <span className={` ${screenWidth > 540 ? 'w-1/5' : 'w-1/5'} text-center font-semibold text-sm`}>{(item.price * item.quantity).toFixed(2)} DH</span>
                                    </div>
                                )))
                                :
                                (
                                    <div className="text-center text-gray-500 text-lg mt-4">the shopping cart is empty</div>
                                )
                            }


                            <a onClick={goBack}
                                className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer">
                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                </svg>
                                Continue Shopping
                            </a>
                        </div>

                        <div className={`${screenWidth < 770 ? 'w-4/4' : 'w-1/4'} px-8 py-10`} style={{ backgroundColor: '#f6f6f6' }}>
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items {count} </span>
                                <span className="font-semibold text-sm">{totalCost.toFixed(2)} DH</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select onChange={handleShippingChange} className="block p-2 text-gray-600 w-full text-sm">
                                    <option value={100.00}>Standard shipping - 100.00 DH</option>
                                    <option value={200.00}>Express shipping - 200.00 DH</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    {totalCost > 0 ? (
                                        <span>{(totalCost + shippingCost).toFixed(2)} DH</span>
                                    ) : (
                                        <span>0 DH</span>
                                    )}
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ShoppingCard;
