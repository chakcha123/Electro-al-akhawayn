import React from 'react'
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



const EditService = ({ service ,auth }) => {
    const { data, setData, put, errors } = useForm({
        name: service.name || '',
        sid: service.sid || '',
        description: service.description || '',
        price: service.price || 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('service.update', service.id));
        // console.log(data)
    };

    // const handleChange = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };
3
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit service</h2>}
        >
            <Head title="Edit Service" />

                    <div className="max-w-md mx-auto p-6 bg-gray-300 shadow-md rounded-md my-10">
                        <h2 className="text-xl font-semibold mb-4">Edit Service</h2>
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-200 shadow-md rounded-md my-10">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    // onChange={handleChange}
                                    onChange={(e)=>setData('name',e.target.value)}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    id="description"
                                    value={data.description}
                                    // onChange={handleChange}
                                    onChange={(e)=>setData('description',e.target.value)}

                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    rows="3"
                                    
                                ></textarea>
                                <InputError message={errors.description} className="mt-2" />
                            </div>
                            <div className="mb-4  ">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    value={data.price}
                                    // onChange={handleChange}
                                    onChange={(e)=>setData('price',e.target.value)}
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-6/13"
                                    min="0"
                                    step="0.01"
                                    
                                />
                                <InputError message={errors.price} className="mt-2" />
                            </div>

                            <div className="flex justify-between ">
                                <button type="submit"
                                    className="w-5/12 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-center">
                                    Edit
                                </button>
                                <a href={route('dashboard.services')}
                                    className="w-5/12 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-center">
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
        </AuthenticatedLayout>

    )
}

export default EditService
