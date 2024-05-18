import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import Banner from './banner/Banner';


export default function Welcome({ auth }) {
    return (
        <GuestLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
            <Banner />

    </GuestLayout>
    );
}
