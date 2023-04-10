import React, { useEffect, useState } from 'react'
import { ICategory } from '../../../interfaces/product'
import { Link } from 'react-router-dom'
import { Button, Popconfirm } from 'antd'

const text = 'Ông Bạn Muốn Xoá Không?';
const description = 'Xoá Là Mất Hết !';

type CategoriesHomeProps = {
    categories: ICategory[],
    onRemove: (id: number | string) => void
}

const CategoriesHome = ({ categories, onRemove }: CategoriesHomeProps) => {
    const removeCategories = (id: string) => {
        onRemove(id)
    }

    return (
        <div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Categories Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categories ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item, index) =>
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item._id}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/admin/categories/update/${item._id}`}><button className='bg-blue-500 w-[75px] py-[5px] rounded-lg text-[black]'>Edit</button></Link>
                                    <Popconfirm
                                        className='bg-red-500'
                                        title={text}
                                        description={description}
                                        onConfirm={() => removeCategories(item._id)}
                                        placement="top"
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button >Delete</Button>
                                    </Popconfirm>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CategoriesHome