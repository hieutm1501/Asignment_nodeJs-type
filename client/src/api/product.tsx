import { IProduct } from "../interfaces/product"
import instance from "./instance"
const user = JSON.parse(localStorage.getItem("user")!)

export const getAll = () => {
    return instance.get("/products")
}
export const getOne = (id: Number | String) => {
    return instance.get(`/products/${id}`)
}
export const getdelete = (id: Number | String) => {
    return instance.delete(`/products/` + id, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
export const getAddProduct = (product: IProduct) => {
    return instance.post("/products", product, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
export const getUpdateProduct = (product: IProduct) => {
    return instance.put(`/products/${product._id}`, product, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
