import React from 'react';
import Dropdown from '@/Components/Dropdown';


const Card = ({ name, img, price, description, id, quantity }) => {
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80  hover:scale-105 transition duration-500">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
                    <img
                        src={img}
                        alt="card-image" className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900  w-6/12">
                            {name}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900  w-4/12">
                            {price} DH
                        </p>
                    </div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 mt-4 w-6/12 float-right ">
                        Quantity :{quantity}
                    </p>
                </div>

                <div className="p-6 pt-0 ">

                    <div className="p-6 pt-0">
                        <Dropdown.Link href={route('cart.add.product', id)} method="post" as="button"
                            className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-300 transition-all hover:scale-105 focus:scale-105 focus:opacity-85 active:scale-100 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            sh

                        </Dropdown.Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
