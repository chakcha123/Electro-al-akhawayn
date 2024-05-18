import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <center>
                <div className="max-w-2xl   justify-center p-10">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-md p-4 sm:p-6 lg:p-8">
                        <form className="space-y-8" onSubmit={submit}>
                            <h3 className="text-xl font-medium text-gray-900">Sign in </h3>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 float-left mb-2 ">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="email@company.com" required="" />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 float-left block mb-2">Your password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}

                                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                    </div>
                                    <div className="text-sm ml-3">
                                        <label htmlFor="remember" className="font-medium text-gray-900">Remember me</label>
                                    </div>
                                </div>
                                {canResetPassword && (
                                    <div>
                                    <br/>
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                    </div>
                                )}
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                            <div className="text-sm font-medium text-gray-500">
                                Not registered? <a href={route('register')} className="text-blue-700 hover:underline">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </center>



        </GuestLayout>
    );
}
