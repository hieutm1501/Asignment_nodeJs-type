
import React, { useEffect, useState } from 'react'
import { DataType, ICategory } from '../../../interfaces/product';
import { Link } from 'react-router-dom';
import { Button, Popconfirm, Table } from 'antd';
import { getAllCategory } from '../../../api/categories';
import { ColumnsType } from 'antd/es/table';

const text = 'Ông Bạn Muốn Xoá Không?';
const description = 'Xoá Là Mất Hết !';
type Props = {}

const HomeCategory = (props: Props) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',

        },
    ];
    const [category, setcategory] = useState<ICategory[]>([])

    const fetchProducts = async () => {
        const { data } = await getAllCategory()
        setcategory(data)

    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const data2: any = category.map((category: ICategory, index) => ({
       

        key: index + 1,
        id: <p className='text-[18px] font-[500]'>{category._id}</p>,
        name: <p className='text-[16px] text-[red]'>{category.name} đ</p>,
        action: <div className='text-center'>

            {/* <Link to={`/admin/update/${category._id}`}> <button className='font-[500] text-[15px] bg-blue-500 w-[75px] py-[5px] rounded-lg mx-[5px]'> Edit</button></Link>
            <Popconfirm
                className='bg-red-500'
                title={text}
                description={description}
                onConfirm={() => (category._id)}
                placement="top"
                okText="Yes"
                cancelText="No"
            >
                <Button >Delete</Button>
            </Popconfirm> */}
            {/* <button onClick={() => {
                if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
                    removeProduct(product._id)
                }

            }} className='bg-red-500 text-[white]'>Delete</button> */}
        </div>

    }));
    return (
        <div>
            <Table columns={columns} dataSource={data2} />
        </div>
    )
}

export default HomeCategory