
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ICategory, IProduct } from '../../interfaces/product';

type UpdatePageProps = {
    categories: ICategory[],
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}

const UpdatePage = ({ products, categories, onUpdate }: UpdatePageProps) => {
    const navigate = useNavigate()
    const { id } = useParams();

    const { register, handleSubmit, reset } = useForm({})
    useEffect(() => {
        const currentProduct = products.find(item => item._id == id)
        reset(currentProduct)
    }, [])
    const onHandleSubmit = (data: any) => {
        onUpdate(data);
        navigate('/admin')
    }
    return (

        <div id='adminadd' >
            <h1 className='text-2xl'>Chỉnh Sửa Sản Phẩm Mới</h1>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className='grid grid-cols-2 text-[14px] '>
                    <div className='w-[450px] ml-[50px] '>
                        <div>
                            <label className='text-[15px] font-[500]' htmlFor="">Image:</label>
                            <input type='text' {...register('image')} className=" my-[8px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='The link image' />
                        </div>
                        <div>
                            <label className='text-[15px] font-[500]' htmlFor="">Mô Tả Ngắn:</label>
                            <textarea {...register('mota')} rows={4} className="my-[7px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Viết Mô tả..."></textarea>
                        </div>
                        <img src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680891575/ass_ts_nodejs/product/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966_ymbgwo.gif" alt="" />
                    </div>
                    <div className='w-full'>
                        <h2 className='text-xl'>Thông Tin Sản Phẩm</h2>
                        <div className='mt-[10px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Nhập tên sản phẩm:</label>
                            <textarea {...register('name')} className="my-[7px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập tên sản Phẩm..."></textarea>

                        </div>
                        <div className='grid grid-cols-2 gap-6  mt-[20px]'>
                            <div>
                                <label className='text-[15px] font-[500]' htmlFor="">Gia Gốc:</label>
                                <input {...register('price')} type="text" placeholder='Nhập giá sản phẩm vnđ' className="my-[7px] block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label className='text-[15px] font-[500]' htmlFor="">Giá Khuyến mãi:</label>
                                <input {...register('sell_price')} type="text" placeholder='Nhập giá khuyến mại sản phẩm vnđ' className="my-[7px] block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>
                        </div>
                        <div className='my-[20px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Danh Mục:</label>
                            <select {...register('categoryId')} className="my-[7px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {categories.map((item) =>
                                    <option value={item._id}>{item.name}</option>
                                )}
                            </select>
                        </div>
                        <div>
                            <label className='text-[15px] font-[500]' htmlFor="">Đặc điểm nổi bật:</label>
                            <textarea {...register('dacdiem')} rows={4} className="my-[7px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Viết Mô tả..."></textarea>

                        </div>
                        <div className='py-[20px]'>
                            <label className='text-[15px] font-[500]' htmlFor="">Chi Tiết:</label>
                            <textarea {...register('chitiet')} rows={5} className="my-[7px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Viết Chi Tiết..."></textarea>

                        </div>
                        <div>
                            <button type="submit" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default UpdatePage