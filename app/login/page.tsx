'use client';
import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await signIn('credentials', {
            username,
            password,
            callbackUrl: '/dashboard',
            redirect: false,
        });
    };

    return (
        <div className="flex h-screen items-center justify-center bg-red-500">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <div className="flex justify-center py-6">
                    <Image src="/assets/img/zd-banner.jpg" width={156} height={24} alt="Logo" className="h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">เข้าสู่ระบบ</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
