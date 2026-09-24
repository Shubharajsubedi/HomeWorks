


import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { createSales } from '../../Api/SalesAPI'

const SubmitSales = () => {
  const [customerName,setcustomerName]=useState("")
    const[productName,setProductName]=useState("")
    const[number,setNumber]=useState("")

    const[sales,setSales]=useState([])

    //navigation
    const navigate = useNavigate();
    
    

   
    const payload ={
        customerName,productName,number
    }

    const CreatSale = async(e) => {
        e.preventDefault();
        
        try {
           const res = await createSales(payload);
           console.log("New Log created",res.data)
           setSales([...sales,res.data])

           setcustomerName("")
            setProductName("")
            setNumber("")

           
           


           navigate("/viewsales")

        } catch (error) {
            console.log(error)
        }
    }

    
  return (
    <div>
        <form onSubmit={CreatSale}>
            <label >Name:</label>
            <input type="text"
            value={customerName}
            onChange={(e)=>setcustomerName(e.target.value)} />

             <label >Product Name</label>
            <input type="text"
            value={productName}
            onChange={(e)=>setProductName(e.target.value)} />


             <label >Number:</label>
            <input type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)} />

            <button type='submit'> Post</button>
        </form>
    </div>
    
  )
}

export default SubmitSales;