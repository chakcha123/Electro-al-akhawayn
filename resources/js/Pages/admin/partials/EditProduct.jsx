import React from 'react'
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const EditProduct = ({ product, auth }) => {

    const { data, setData, post, errors } = useForm({
        name: product.name || '',
        id: product.id || '',
        image: product.image || '',
        description: product.description || '',
        price: product.price || 0,
        quantity_in_stock: product.quantity_in_stock || 0,
        // previewImage: product.image ? `../../${product.image}` : '',
    });

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       // Update the form data
    //       setData('image', file);
    //       // Log the type of 'data.image' to verify it's a File object
    //       console.log('Type of data.image:', typeof data.image);
    //       // Create a URL for the file and update the image preview
    //       const imageUrl = URL.createObjectURL(file);
    //       setData('previewImage', imageUrl);
    //     }
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('product.update', data));
    };

    React.useEffect(() => {
        console.log('Updated image file:', data.image);
        console.log('preview image file:', data.previewImage);
    }, [data.previewImage]);


    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit product</h2>}
            >
                <Head title="Edit product" />

                <div className="max-w-md mx-auto p-6 bg-gray-300 shadow-md rounded-md my-10">
                    <h2 className="text-xl font-semibold mb-4">Edit product</h2>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-200 shadow-md rounded-md my-10" encType="multipart/form-data">
                        <div className="mb-4">
                            <input
                                type="file"
                                id="image"
                                name='image'
                                className="sr-only"
                                accept="image/*"
                                // onChange={handleImageChange}
                                onChange={(e) => setData('image', e.target.files[0])}
                            />
                            <InputError message={errors.image} className="mt-2" />
                            <label htmlFor="image" className="cursor-pointer my-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                            </label>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={data.name}
                                name='name'

                                onChange={(e) => setData('name', e.target.value)}
                                className="w-44 mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                name='description'

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
                                name='price'
                                value={data.price}
                                onChange={(e) => setData('price', e.target.value)}
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-6/13"
                                min="0"
                                step="0.01"

                            />
                            <InputError message={errors.price} className="mt-2" />
                        </div>
                        <div className="mb-4  ">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">quantity</label>
                            <input
                                type="number"
                                id="quantity_in_stock"
                                name='quantity_in_stock'
                                value={data.quantity_in_stock}
                                onChange={(e) => setData('quantity_in_stock', e.target.value)}
                                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-6/13"
                                min="0"
                                step="1"

                            />
                            <InputError message={errors.quantity_in_stock} className="mt-2" />
                        </div>
                        <div className="flex justify-between ">
                            <button type="submit"
                                className="w-5/12 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-center">
                                Edit
                            </button>
                            <a href={route('dashboard.products')}
                                className="w-5/12 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-center">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>

        </div>
    )
}

export default EditProduct

