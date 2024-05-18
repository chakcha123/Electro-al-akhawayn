import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';


const ContactUs = ({ auth }) => {
    const { data, setData, post, errors ,reset } = useForm({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.create', data), {
            onSuccess: () => {
                reset();
                setSuccessMessage('Your message has been successfully submitted!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact Us</h2>}
        >
            <Head title="Contact Us" />

            <div>

                <form className="form bg-white p-4 my-6 relative w-11/12 mx-auto" onSubmit={handleSubmit} >
                {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline"> {successMessage}</span>
                    </div>
                )}
                    <h3 className="text-xl text-gray-900 font-semibold">Let us call you!</h3>
                    <p className="text-gray-600">To help you choose your property</p>
                    <div className="flex space-x-3 mt-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="border p-2 w-1/2"
                            onChange={(e) => setData('name', e.target.value)}
                            value={data.name}
                        />

                        <InputError message={errors.name} className="mt-2" />

                        <input
                            type="tel"
                            name="number"
                            placeholder="Your Number"
                            className="border p-2 w-1/2"
                            onChange={(e) => setData('number', e.target.value)}
                            value={data.number}
                        />

                        <InputError message={errors.number} className="mt-2" />

                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border p-2 w-full mt-2"
                        onChange={(e) => setData('email', e.target.value)}
                        value={data.email}

                    />

                    <InputError message={errors.email} className="mt-2" />

                    <textarea
                        name="message"
                        cols="10"
                        rows="3"
                        placeholder="Tell us about desired property"
                        className="border p-2 mt-2 w-full"
                        onChange={(e) => setData('message', e.target.value)}
                        value={data.message}

                    ></textarea>

                    <InputError message={errors.message} className="mt-2" />

                   
                    <input
                        type="submit"
                        value="Submit"
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2"
                    />
                </form>

            </div>
        </AuthenticatedLayout>

    );
}

export default ContactUs;


