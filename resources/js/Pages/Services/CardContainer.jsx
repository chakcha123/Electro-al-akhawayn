import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Banner from '../banner/Banner';
import Card from './Card';
import Pagination from '../Pagination';

const CardContainer = ({ auth ,services  }) => {

    return (
        <div>
            {/* {console.log(sid)} */}

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Services</h2>}
            >
                <Head title="Services" />
                <Banner />

                <section className="py-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {services.data.map((service,index) => (
                        <Card
                            key={index}
                            name={service.name}
                            price={service.price}
                            description={service.description}
                            id={service.sid}
                        />
                    ))}
                </div>
                </section>

                <Pagination data={services}/>
            </AuthenticatedLayout>

        </div>
    )
}

export default CardContainer

