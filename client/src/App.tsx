import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import BaseLayout from './components/layouts/baseLayout'
import AdminLayoutPage from './components/layouts/adminLayout'
import HomePage from './pages/HomePage'
import { ICategory, IProduct } from './interfaces/product'
import { getAddProduct, getAll, getUpdateProduct, getdelete } from './api/product'
import ProductDetaliPage from './pages/ProductDetaliPage'
import SigninPage from './pages/SigninPage'
import AddPage from './pages/admin/AddPage'
import AdminHomePage from './pages/admin/AdminHomePage'
import UpdatePage from './pages/admin/UpdatePage'
import SignUpPage from './pages/SignUpPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAddCategory, getAllCategory, getUpdateCategories, getdeleteCategory } from './api/categories'
import CategoriesHome from './pages/admin/danhmuc/CategoriesHome'
import CategoriesAdd from './pages/admin/danhmuc/CategoriesAdd'
import CategoriesUpdate from './pages/admin/danhmuc/CategoriesUpdate'
import CartPage from './pages/CartPage'
import UserHome from './pages/admin/users/UserHome'
// import './App.css'

function App() {
  const [product, setproduct] = useState<IProduct[]>([])
  const [categories, setcategories] = useState<ICategory[]>([])

  useEffect(() => {
    getAll().then(({ data: { product } }) => setproduct(product))
  }, [])

  useEffect(() => {
    getAllCategory().then(({ data: { categories } }) => setcategories(categories))
  }, [])

  const onHandleRemove = (id: number | string) => {
    getdelete(id).then(() => setproduct(product.filter((item) => item._id != id)))
  }
  const onHandleAdd = (product: IProduct) => {
    getAddProduct(product).then(() => getAll().then(({ data: { product } }) => setproduct(product)))
  }
  const onHandleUpdate = (product: IProduct) => {
    getUpdateProduct(product).then(() => getAll().then(({ data: { product } }) => setproduct(product)))
  }
  // Categories
  const onHandleAddCategories = (categories: ICategory) => {
    getAddCategory(categories).then(() => getAllCategory().then(({ data: { categories } }) => setcategories(categories)))
  }
  const onHandleRemoveCategories = (id: number | string) => {
    getdeleteCategory(id).then(() => setcategories(categories.filter((item) => item._id != id)))
  }
  const onHandleUpdateCategories = (categories: ICategory) => {
    getUpdateCategories(categories).then(() => getAllCategory().then(({ data: { categories } }) => setcategories(categories)))
  }

  return (
    <div className="App">

      <Routes>
        <Route path='signup' element={<SignUpPage />} />
        <Route path='signin' element={<SigninPage />} />

        <Route path='/'  >
          <Route index element={<HomePage products={product} />} />
          <Route path='products/:id'  >
            <Route index element={<ProductDetaliPage />} />
            <Route path='cart' element={<CartPage />} />
          </Route>
        </Route>
        {/* admin */}
        <Route path='/admin' element={<AdminLayoutPage />}>
          <Route index element={<AdminHomePage products={product} categories={categories} onRemove={onHandleRemove} />} />
          <Route path='add' element={<AddPage onAdd={onHandleAdd} categories={categories} />} />
          <Route path='update/:id' element={<UpdatePage onUpdate={onHandleUpdate} products={product} categories={categories} />} />
          <Route path='categories' >
            <Route index element={<CategoriesHome categories={categories} onRemove={onHandleRemoveCategories} />} />
            <Route path='add' element={<CategoriesAdd OnAdd={onHandleAddCategories} />} />
            <Route path='update/:id' element={<CategoriesUpdate OnUpdate={onHandleUpdateCategories} categories={categories} />} />
          </Route>
          <Route path='users' >
            <Route index element={<UserHome />} />
          </Route>
        </Route>
      </Routes>


      <ToastContainer

        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

export default App
