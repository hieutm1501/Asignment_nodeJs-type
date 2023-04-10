export interface IProduct {
    _id: string,
    name: string,
    image: string,
    price: number,
    sell_price: number,
    mota: string,
    chitiet: string,
    dacdiem: string,
    categoryId: string,
    createdAt: string,

}
export interface ICategory {
    _id: string,
    name: string

}
export interface DataType {
    _id: number | string,
    name: string,
    price: number,
    image: string,

}
export interface IUsers {
    name: string,
    email: string,
    password: string,
    role: string
}