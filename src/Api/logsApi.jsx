import axios from "axios"

const API = axios.create({
    baseURL:"http://localhost:5000"
})

//getting lOGS
export const getLogs = () => API.get("/diary")

//creating logs 
export const createLogs = (data) =>API.post("/diary",data)


//updating logs 
export const updateLogs = (id,updateddata)=>API.put(`/diary/${id}`,updateddata)

//deleting logs
export const deleteLogs = (id)=>API.delete(`/diary/${id}`)