import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from './partials/HeaderG';
import Footer from './partials/Footer';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">

            <Header  />
            <main>{children}</main>

            <Footer />
        </div>
    );
}
