import * as Yup from 'yup'

export const signupSchems = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6, "password trên 6 kí tự").required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})
export type SignupForm = Yup.InferType<typeof signupSchems>

export const signinSchems = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
})
export type SigninForm = Yup.InferType<typeof signinSchems>

