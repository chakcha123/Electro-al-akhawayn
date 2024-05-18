import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
 import img from './banner/images/1.jpg'
const ContactUs = ({ auth }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About Us</h2>}
    >
      <Head title="About Us" />

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={img} alt="image" loading="lazy" width="" height=""/>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Welcome to Electro Al-Akhawayen</h2>
              <p className="mt-6 text-gray-600">
                Your premier destination for electronic essentials and digital subscriptions. Explore our wide range of products and services, including IPTV, Shahid, Netflix, and more. Whether you're in need of the latest smart TV devices or seeking to subscribe to high-quality digital entertainment services, we guarantee to provide you with the best options.
              </p>
              <p className="mt-4 text-gray-600">
                Shop with us now and enjoy top-notch products at competitive prices, along with excellent customer service to ensure your satisfaction. Experience convenient and secure shopping with Elktrou El-Akhawayen today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default ContactUs;
