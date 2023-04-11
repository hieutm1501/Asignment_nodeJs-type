import React, { useEffect, useState } from 'react'
import { StarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../api/product';
import { IProduct } from '../interfaces/product';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

type Props = {}

const ProductDetaliPage = (props: Props) => {
    const [value, setValue] = useState(3); //antd
    const { id } = useParams() //{id: "1"} string
    const [products, setProducts] = useState<IProduct>({} as IProduct)
    useEffect(() => {
        getOne(String(id)).then(({ data: { product } }) => setProducts(product))
    }, [])
    console.log(products);


    return (
        <div>
            <section>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <img
                                alt="Les Paul"
                                src={`${products.image}`}
                                className="aspect-square w-full rounded-xl object-cover"
                            />
                        </div>

                        <div className="sticky top-0">

                            <div className="mt-8 flex justify-between">
                                <div className="max-w-[35ch] space-y-2">
                                    <h1 className="text-xl font-bold sm:text-2xl">
                                        {products.name}
                                    </h1>

                                    <p className="text-sm">Highest Rated Product</p>

                                    <div className="-ml-0.5 flex">
                                        <span>
                                            <Rate tooltips={desc} onChange={setValue} value={value} />
                                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg text-red-700 font-bold">{products.price}$</p>
                            </div>

                            <div className="mt-4">
                                <div className="prose max-w-none">
                                    <label htmlFor="">Mô tả:</label>
                                    <p>
                                        {products.mota}
                                    </p>
                                </div>
                                <div className="prose max-w-none">
                                    <label htmlFor="">Phân Tích:</label>
                                    <p>
                                        {products.chitiet}
                                    </p>
                                </div>

                                <button className="mt-2 text-sm font-medium underline">Read More</button>
                            </div>

                            <form className="mt-8">


                                <fieldset className="mt-4">
                                    <legend className="mb-1 text-sm font-medium">Phiên Bản:</legend>

                                    <div className="flex flex-wrap gap-1">
                                        <label htmlFor="size_xs" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_xs"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                            >
                                                S
                                            </span>
                                        </label>

                                        <label htmlFor="size_s" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_s"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                            >
                                                PRO
                                            </span>
                                        </label>

                                        <label htmlFor="size_m" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_m"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                            >
                                                ALL
                                            </span>
                                        </label>
                                        <label htmlFor="size_xl" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_xl"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                            >
                                                XS
                                            </span>
                                        </label>
                                    </div>
                                </fieldset>

                                <div className="mt-8 flex gap-4">
                                    <button
                                        type="submit"
                                        className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                    >
                                        <Link to={`/products/${products._id}/cart`}>Add to cart</Link >
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductDetaliPage