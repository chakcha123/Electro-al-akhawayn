import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import ServiceManagement from './partials/ServiceManagement';
const Management = ({ auth ,id }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">ServiceManagement</h2>}
        >
            <header className="bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <nav className='ml-10'>
                        <ul className="flex space-x-4">
                            <li className='mr-5'>
                                <a
                                    href={route('dashboard.services')}
                                    className={'text-white hover:text-gray-300'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                    </svg>

                                </a>
                            </li>
                            <li>
                                <a
                                    href={route('ProductManagement')}

                                    className={`text-white hover:text-gray-300 `}
                                >
                                    Create Product
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route('ServiceManagement')}
                                    className={`text-white hover:text-gray-300 border-b-2 border-gray-300 `}
                                >
                                    Create Service
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>


            <ServiceManagement id={id} />
        </AuthenticatedLayout>
    );
}

export default Management;
