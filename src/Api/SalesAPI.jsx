import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000"
})


export const createSales = (data) => API.post("/sales",data)

export const getSales = () => API.get("/sales")

export const updateSales = (id,updatedData) => API.put(`/sales/${id}`,updatedData)

export const deleteDatas = (id) => API.delete(`/sales/${id}`)