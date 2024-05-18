import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import banner from './banner/images/banner.jpg'
import im1 from './banner/images/1.jpg'
import im2 from './banner/images/2.jpg'
import im3 from './banner/images/3.jpg'

const JobPage = ({ auth  }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact Us</h2>}
    >
      <Head title="Contact Us" />
      <div>
        <section className="h-[450px] flex bg-cover bg-center bg-no-repeat bg-gray-900 text-gray-300 items-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
        </section>

        <div className="grid min-h-[140px] w-screen place-items-center overflow-x-scroll rounded-lg p-6 md:overflow-visible">
          <div className="relative flex md:flex-row flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-full md:w-4/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none md:rounded-r rounded-t-xl md:rounded-xl bg-clip-border">
              <img src={im1} alt="image" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-xl">
                <h2 className="text-4xl xl:text-4xl font-bold text-center">Electro Al Akhawayn <br />
                  <span className="text-blue-500">Your Tech Haven</span>
                </h2>
              </div>
            </div>
            <div className="p-6 my-auto">
              <h6 className="xl:text-2xl block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-500 uppercase">Electronics & More</h6>
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 xl:text-2xl">Discover the Best in Tech</h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 xl:text-xl">
                Find top-quality electronics, phones, home equipment, and services at Electro Al Akhawayn. Experience seamless shopping and unlock the best deals in Agadir, Morocco.
                Start your tech journey with us today!
              </p>
              <button onClick={() => scrollToSection('products')}
                className="xl:text-xl flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-blue-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="xl:w-6 xl:h-6 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src={im2} alt="image" loading="lazy" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">How It Works for Customers</h2>
                <p className="mt-6 text-gray-600">
                  Our user-friendly platform makes shopping easy. Browse our wide range of products, add your favorite items to the cart, and complete your purchase with a few clicks.
                  Enjoy seamless delivery and exceptional customer service.
                </p>
                <p className="mt-4 text-gray-600">
                  With Electro Al Akhawayn, your favorite gadgets and services are just a few clicks away. Start your shopping experience today!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Benefits of Shopping with Us</h2>
                <p className="mt-6 text-gray-600">
                  Discover the advantages of shopping with Electro Al Akhawayn. Our platform offers personalized recommendations, a user-friendly interface, and direct access to top-quality products and services.
                  Maximize your shopping experience with us.
                </p>
                <p className="mt-4 text-gray-600">
                  Enjoy a hassle-free shopping experience with Electro Al Akhawayn. Save time and effort while finding the right products for you. Start exploring today!
                </p>
              </div>
              <div className="md:5/12 lg:w-5/12">
                <img src={im3} alt="image" loading="lazy" />
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white">
          <section className="text-gray-700">
            <div className="container px-5 py-5 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Frequently Asked Questions</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  The most common questions about how our store works and what we can do for you.
                </p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">How do I search for products on your platform?</summary>
                    <span className="px-4 py-2">
                      You can search for products by entering keywords, selecting categories, and filtering by price, brand, and other criteria on our homepage.
                      You can also create alerts to receive notifications about new arrivals matching your preferences.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">Can I purchase products directly through your platform?</summary>
                    <span className="px-4 py-2">
                      Yes, you can purchase products directly through our platform. Simply click on the product listing you're interested in, add it to your cart, and proceed to checkout.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">Is my personal information secure on your platform?</summary>
                    <span className="px-4 py-2">
                      Yes, we take the security and privacy of your personal information seriously. Our platform uses encryption and other security measures to protect your data.
                      We also adhere to strict privacy policies to ensure your information is not shared without your consent.
                    </span>
                  </details>
                </div>
                <div className="w-full lg:w-1/2 px-4 py-2">
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">How can I edit my profile or address on your platform?</summary>
                    <span className="px-4 py-2">
                      You can edit your profile and update your address in the "Profile" section of your account dashboard.
                      Simply log in to your account, navigate to the "Profile" tab, and click on the edit button next to the section you want to modify.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">Can I save products for later viewing?</summary>
                    <span className="px-4 py-2">
                      Yes, you can save products to your account for later viewing.
                      Simply click on the "Save" button next to any product listing, and it will be added to your saved products list, accessible from your account dashboard.
                    </span>
                  </details>
                  <details className="mb-4">
                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">How can I contact support if I have a question or issue?</summary>
                    <span className="px-4 py-2">
                      If you have any questions or encounter any issues while using our platform, you can contact our customer support team via email at electro@akhawayn.ma or through the contact form on our website. We're here to help!
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default JobPage;
