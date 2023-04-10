import React from 'react'
import { IProduct } from '../interfaces/product'
import { Rate } from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
    height: '418px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};

type HomePageProps = {
    products: IProduct[]
}

const HomePage = ({ products }: HomePageProps) => {
    if (!products) return <div>Loading...</div>

    return (

        <div>
            <div className=''>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}><img className='h-[418px] w-[1390px] mx-[72px]' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680362168/ass_ts_nodejs/Rectangle_xy7mt4.jpg" alt="" /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img className='h-[418px] w-[1390px] mx-[72px]' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680362168/ass_ts_nodejs/Rectangle_xy7mt4.jpg" alt="" /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img className='h-[418px] w-[1390px] mx-[72px]' src="https://res.cloudinary.com/dwp7umncy/image/upload/v1680362168/ass_ts_nodejs/Rectangle_xy7mt4.jpg" alt="" /></h3>
                    </div>
                </Carousel>
            </div>
            <h1 className='text-[22px] text-[#444444] font-normal mt-[23px]'>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            <div className='grid grid-cols-7 gap-6 mx-[70px] mt-[15px]'>
                {products.map((item, index) =>
                    <div key={index} className='my-[66px] hover:bg-[#F8F8F8]' >
                        <Link to={`/products/${item._id}`}>
                            <a href=""><img className='w-[160px] h-[160px]' src={`${item.image}`} alt="" /></a>
                            <div className='h-[42px]'><a className='text-[14px] text-[#444444] pt-[10px]' href="">{item.name}</a></div>
                            <div className='grid grid-cols-2 gap-2 mt-[27px]'>
                                <p className='text-[16px] text-[#D70018]'>{item.price}₫</p>
                                <span className='text-[14px] text-[#444444]'>{item.sell_price}₫</span>
                            </div>
                            <Rate className='text-[#000] text-[10px] ' allowHalf defaultValue={2.5} />
                            <span className='text-[#444444] ml-[5px] text-[10px]'>72 đánh giá</span>
                        </Link>
                    </div>
                )}
            </div>

        </div>
    )
}

export default HomePage