import * as yup from 'yup'

const validation = yup.object().shape({
    avatar: yup
    .string()
    .required('Zorunlu alan'),
    name: yup
    .string()
    .required('Zorunlu alan'),
    role: yup
    .string()
    .required('Zorunlu alan'),
    email: yup
    .string()
    .email('Geçerli bir değer girin')
    .required('Zorunlu alan'),
    password: yup
    .string()
    .min(5, 'Parola 5 karakter olmalı')
    .required('zorunlu alan'),
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar Uyuşmuyor")
    .required()

})

export default validation