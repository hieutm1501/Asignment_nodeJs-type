import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AppleOutlined, CarryOutOutlined, CustomerServiceOutlined, HomeOutlined, ImportOutlined, LaptopOutlined, NotificationOutlined, PlusCircleOutlined, PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

// const items1: MenuProps['items'] = ['Thêm sản Phẩm', 'Thêm Danh mục', 'Thêm Gì Đó'].map((key) => ({
//     key,
//     label: `${key}`,
// }));
const items1: MenuProps['items'] = [
    {
        key: "sub1",
        icon: <ImportOutlined />,
        label: <Link to={"/"}>Trang Chủ</Link>
    },
    {
        key: "sub2",
        icon: <PlusSquareOutlined />,
        label: <Link to={"/admin/add"}>Thêm Sản Phẩm</Link>
    },
    {
        key: "sub3",
        icon: <PlusCircleOutlined />,
        label: <Link to={"/admin/categories/add"}>Thêm Danh Mục</Link>
    }
]


const items2: MenuProps['items'] = [
    {
        key: 'sub1',
        icon: <HomeOutlined />,
        label: <Link to={'/admin'}>Home</Link>,
        children: [

        ]
    },
    {
        key: 'sub2',
        icon: <AppleOutlined />,
        label: 'Điện thoại',
        children:
            [
                { key: '1', label: 'iPhone' },
                { key: '2', label: 'Samsung' },
                { key: '3', label: 'Xiaomi' },
                { key: '4', label: 'Oppo' }
            ]
    },

    {
        key: 'sub3',
        icon: React.createElement(LaptopOutlined),
        label: 'Laptop',
        children: [
            { key: '5', label: 'Dell' },
            { key: '6', label: 'Asus' },
            { key: '7', label: 'Lenovo' },
            { key: '8', label: 'HP' }
        ]
    },
    {
        key: 'sub4',
        icon: <CustomerServiceOutlined />,
        label: 'Thiết bị thông minh',
        children: [
            { key: '9', label: 'Tablet' },
            { key: '10', label: 'Đồng hồ thông minh' },
            { key: '11', label: 'Máy đo sức khỏe' },
            { key: '12', label: 'Thiết bị nhà thông minh' }
        ]
    },
    {
        key: 'sub5',
        icon: React.createElement(UserOutlined),
        label: <Link to={'/admin/users'}>User</Link>,
        children: [
            { key: '13', label: 'Admin' },
            { key: '14', label: 'Member' }
        ]
    },
    {
        key: 'sub6',
        icon: <CarryOutOutlined />,
        label: <Link to={'/admin/categories'}> <button>Danh Mục</button> </Link>,
        children: [

        ]
    }
];

type Props = {}

const AdminLayoutPage = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div className=''>
            <aside> <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: colorBgContainer }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            items={items2}
                        />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <main><Outlet /></main>
                        </Content>
                    </Layout>
                </Layout>
            </Layout></aside>

        </div>
    )
}

export default AdminLayoutPage