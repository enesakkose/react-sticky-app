import axios from 'axios'

export const fetchProductList = async({ pageParam = 0 }) => {
    const {data} = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=20`)

    return data
}
export const fetchProduct = async(id) => {
    const {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)

    return data
}
export const fetchRegister = async(input) => {
    const { data } = await axios.post("https://api.escuelajs.co/api/v1/users/", input)
    return data
}