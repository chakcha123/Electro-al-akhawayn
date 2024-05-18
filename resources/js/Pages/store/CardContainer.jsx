import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Banner from '../banner/Banner';
import Card from './Card1';
import Pagination from '../Pagination';
const CardContainer = ({ auth, products }) => {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">store</h2>}
        >
            <Head title="Store" />
            <Banner />
            <section className="py-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.data.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            img={item.image}
                            price={item.price}
                            id={item.id}
                            description={item.description}
                            quantity={item.quantity_in_stock}
                        />
                    ))}
                </div>
            </section>
            <Pagination data={products} />
        </AuthenticatedLayout>
    )
}
export default CardContainer

