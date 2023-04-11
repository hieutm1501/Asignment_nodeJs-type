import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAllUser, signin } from '../api/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IUsers } from '../interfaces/product'
import { SigninForm, signinSchems } from '../schemas/auth'
import { yupResolver } from '@hookform/resolvers/yup'

type Props = {}
const SigninPage = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchems)
    })

    const [user, setuser] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUser().then(({ data: { user } }) => setuser(user))
    }, [])
    console.log(user);
    const onHandleSubmit = async (inputValue: any) => {
        let isEmailValid = false;
        for (const users of user) {
            if (users.email !== inputValue.email) {
                isEmailValid = true;
            } else {
                const { data } = await signin(inputValue);
                localStorage.setItem("user", JSON.stringify(data));
                if (toast.isActive('login')) {
                    toast.dismiss('login'); // ẩn toast đã hiển thị nếu còn tồn tại
                }
                toast(`Đăng Nhập ${data.user.role}`, { toastId: 'login' });
                if (users.role === "admin") {
                    navigate('/admin');
                } else if (users.role === "member") {
                    navigate('/');
                }
            }
            if (!isEmailValid) {
                toast('tài khoản or password không khớp')
            }
        }
    }


    return (
        <div>
            <div className="w-full flex flex-wrap">

                <div className="w-full md:w-1/2 flex flex-col">

                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <a href="#" className="w-[200px]"><img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680975890/ass_ts_nodejs/logo_TH_hkjdcr.png" alt="" /></a>
                    </div>

                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl font-[700]">Signin</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Email</label>
                                <input type="email" {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                <p className='text-[13.5px] text-[red] mt-[5px]'>{errors.email && errors.email.message}</p>

                            </div>
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Password</label>
                                <input type="text" {...register("password", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                <p className='text-[13.5px] text-[red] mt-[5px]'>{errors.password && errors.password.message}</p>
                            </div>
                            <div className='text-center mt-[5px]'><button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">Đăng Nhập</button></div>
                        </form>
                    </div>

                </div>


                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover  h-screen " src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680165045/signup_o3agpy.jpg" />
                </div>
            </div>
        </div>
    )
}

export default SigninPage