import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { SignupForm, signupSchems } from '../schemas/auth';
import { getAllUser, signup } from '../api/auth';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { IUsers } from '../interfaces/product';
import { toast } from 'react-toastify';



type Props = {}

const SignUpPage = (props: Props) => {
    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchems)
    })

    const navigate = useNavigate()
    const [user, setuser] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUser().then(({ data: { user } }) => setuser(user))
    }, [])

    const onSubmit = async (data: SignupForm) => {
        console.log(data);
        let isEmailValid = false;
        for (const users of user) {
            if (users.email == data.email) {
                isEmailValid = true;
            } else {
                const response = await signup(data)
                console.log(response);
                navigate('/signin')
                toast("Đăng kí thành công !")
            }
        }
        if (isEmailValid) {
            toast("Tài khoản đã tồn tại !")
        }
    }

    return (
        <div>
            <div>
                <div className="w-full flex flex-wrap">

                    <div className="w-full md:w-1/2 flex flex-col">

                        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                            <a href="#" className="bg-black text-white font-bold text-xl p-4">Logo</a>
                        </div>

                        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                            <p className="text-center text-3xl font-[700]">Sign Up</p>
                            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="name" className="text-lg">Name</label>
                                    <input type="text"   {...register('name')}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className='mt-[10px] text-[13.5px] text-[red]'>{errors.name && errors.name.message}</p>
                                </div>
                                <div className="flex flex-col pt-4">
                                    <label htmlFor="email" className="text-lg">Email</label>
                                    <input type="email" {...register('email')} placeholder="your@email.com"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className='mt-[10px] text-[13.5px] text-[red]'>{errors.email && errors.email.message}</p>
                                </div>

                                <div className="flex flex-col pt-4">
                                    <label htmlFor="password" className="text-lg">Password</label>
                                    <input type="text" {...register('password')} placeholder="Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className='mt-[10px] text-[13.5px] text-[red]'>{errors.password && errors.password.message}</p>
                                </div>

                                <div className="flex flex-col pt-4">
                                    <label htmlFor="confirmPassword" className="text-lg">confirmPassword</label>
                                    <input type="text" {...register('confirmPassword')} placeholder="confirmPassword"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className='mt-[10px] text-[13.5px] text-[red]'>{errors.confirmPassword && errors.confirmPassword.message}</p>
                                </div>

                                <div className='text-center mt-[5px]'><button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">Đăng Kí</button></div>
                            </form>

                        </div>

                    </div>


                    <div className="w-1/2 shadow-2xl">
                        <img className="object-cover  h-screen " src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680165045/signup_o3agpy.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage