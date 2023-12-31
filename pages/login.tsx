import { NextPage } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth/AuthContext';
import useCheckbox from '../hooks/inputs/useCheckbox';
import ProtectedRoute from '../components/ProtectedRoute';
import { useTeams } from '../context/TeamsContext';

const Login: NextPage = () => {
    const router = useRouter();
    const { login, authUser }: any = useAuth();
    const { clearTeamsState }: any = useTeams();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const { passwordHidden, handlePasswordCheckbox } = useCheckbox()

    const handleLogin = () => {
        login(form.email, form.password)
    }

    useEffect(() => {
        // clearTeamsState();
    }, [])

    return (
        <div className='flex flex-col  h-screen items-center pt-24 bg-gray-800'>
            <div className="w-full sm:w-1/2 xl:w-1/3">
                <form className="bg-gray-900 p-6 md:p-0 w-[90%] rounded mx-auto mb-6">
                    <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" >
                            Email
                        </label>
                        <input onChange={handleInputChange} name="email" value={form.email} className="shadow appearance-none bg-gray-800 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-500 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input onChange={handleInputChange} name="password" value={form.password} className="shadow appearance-none bg-gray-800 border-red-500 rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={passwordHidden ? "password" : "text"} placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        <div className='flex items-center mt-2 space-x-2 text-sm'>
                            <input className='cursor-pointer' onChange={handlePasswordCheckbox} type="checkbox" />
                            <span className='text-gray-500'>Show Password</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button onClick={handleLogin} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <div><span className='text-gray-400'>Don't have an account?</span> <span onClick={() => router.push(`/register`)} className='text-green-500 font-bold cursor-pointer'>Register</span></div>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Login