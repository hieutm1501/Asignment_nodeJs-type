import React, { useState } from 'react';
import { IProduct } from '../interfaces/product';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const contentStyle: React.CSSProperties = {

};


type HomePageProps = {
    products: IProduct[]
}

const HomePage = ({ products }: HomePageProps) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const filterProducts = () => {
        return products.filter(product => {
            return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
        });
    };

    return (
        <div>
            <header className='bg-[#EEEEEE] w-full fixed z-50  '>
                <div aria-label="Site Header" className="border-b border-gray-100">
                    <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                        <div className="flex items-center gap-4">
                            <button type="button" className="p-2 lg:hidden">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <a href="#" className="flex">
                                <span className="sr-only">Logo</span>
                                <span className="inline-block w-[90px]  rounded-lg "><img className=''
                                    src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682614031/profile/logo_THnew_rgvebp.png"
                                    alt="" /></span>
                            </a>
                            <div className='flex  w-full'>
                                <input type="text" placeholder="Tìm kiếm..." value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)} className="w-full rounded p-2 py-3 pl-10 text-gray-900 placeholder-gray-500 placeholder-opacity-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                            </div>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-8">
                            <nav aria-label="Site Nav"
                                className="hidden  lg:flex lg:gap-4 lg:text-[15px] lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
                                <a href="/about"
                                    className="block  h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    About
                                </a>

                                <a href="/news"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Category
                                </a>

                                <a href="/products"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Products
                                </a>

                                <a href="/contact"
                                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                                    Contact
                                </a>
                            </nav>

                            <div className="flex items-center">
                                <div className="flex items-center border-x border-gray-100">
                                    <span className="border-e border-e-gray-100">
                                        <a href="/cart"
                                            className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>

                                            <span className="sr-only">Cart</span>
                                        </a>
                                    </span>

                                    <span className="border-e border-e-gray-100">
                                        <a href="/account"
                                            className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>

                                            <span className="sr-only"> Account </span>
                                        </a>
                                    </span>

                                    <span className="border-e border-e-gray-100">
                                        <a href="/account"
                                            className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                                            <Link to={'tel:0858879636'}>
                                                <a href="tel:0858879636">{<PhoneOutlined />}</a>
                                            </Link>

                                            <span className="sr-only"> Account </span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner */}

            </header>
            <div className='pt-[66px] w-full mx-auto justify-center items-center'>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>
                            <img className=' w-auto mx-auto' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682760888/ass_ts_nodejs/banner-cpt_lvusaw.jpg" alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <img className='w-auto mx-auto' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682760888/ass_ts_nodejs/banner-cpt_lvusaw.jpg" alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <img className='w-auto mx-auto' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1682760888/ass_ts_nodejs/banner-cpt_lvusaw.jpg" alt="" />
                        </h3>
                    </div>
                </Carousel>
            </div>
            {/*  */}

            <div>
                <section>
                    <div className="max-w-screen-xl  px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                        <header>
                            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                ĐIỆN THOẠI NỔI BẬT NHẤT
                            </h2>
                        </header>

                        <div className=''>
                            <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                                {filterProducts().map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="group relative block overflow-hidden">
                                            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                                <span className="sr-only">Wishlist</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                            </button>
                                            <img src={`${item.image}`} alt="" className="h-[288px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[288px]" />
                                            <div className="relative border border-gray-100 bg-white p-6">
                                                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                                                    New
                                                </span>
                                                <h3 className="mt-4 h-[60px] text-lg font-medium text-gray-900">{item.name}</h3>
                                                <p className="mt-1.5 text-sm text-gray-700">${item.price}</p>
                                                <form className="mt-4">
                                                    <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                                                        Add to Cart
                                                    </button>
                                                </form>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage;