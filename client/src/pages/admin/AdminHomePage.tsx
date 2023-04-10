import React from 'react'
import { DataType, ICategory, IProduct } from '../../interfaces/product'
import { Table, message, Button, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';


const text = 'Ông Bạn Muốn Xoá Không?';
const description = 'Xoá Là Mất Hết !';


type AdminHomePageProps = {
    products: IProduct[],
    categories: ICategory[],
    onRemove: (id: number | string) => void
}

const AdminHomePage = ({ products, categories, onRemove }: AdminHomePageProps) => {
    const removeProduct = (id: number | string) => {
        onRemove(id)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Category',
            key: 'category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',

        },
    ];

    const getCategoryName = (categoryId: string) => {
        const category = categories.find(c => c._id === categoryId);
        return category ? category.name : '';
    };
    const data: any = products.map((product: IProduct, index) => ({

        key: index + 1,
        name: <p className='text-[18px] font-[500]'>{product.name}</p>,
        price: <p className='text-[16px] text-[red]'>{product.price} đ</p>,
        image: <img src={`${product.image}`} alt="" />,
        category: <p className='text-[16px] font-[500]'>{getCategoryName(product.categoryId)}</p>,
        action: <div className='text-center'>

            <Link to={`/admin/update/${product._id}`}> <button className='font-[500] text-[15px] bg-blue-500 w-[75px] py-[5px] rounded-lg mx-[5px]'> Edit</button></Link>
            <Popconfirm
                className='bg-red-500'
                title={text}
                description={description}
                onConfirm={() => removeProduct(product._id)}
                placement="top"
                okText="Yes"
                cancelText="No"
            >
                <Button >Delete</Button>
            </Popconfirm>
            {/* <button onClick={() => {
                if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
                    removeProduct(product._id)
                }

            }} className='bg-red-500 text-[white]'>Delete</button> */}
        </div>

    }));
    return (
        <div id='adminhome' >

            <Table columns={columns} dataSource={data} />

        </div>
    )
}

export default AdminHomePage
