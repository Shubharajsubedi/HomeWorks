import { useEffect, useState } from "react"
import { updateSales } from "../../Api/SalesAPI"
import { useParams,useNavigate } from "react-router-dom"
import { fetchsalesId } from "../../Api/SalesAPI"




const EditSales = () => {

    const [customerName,setcustomerName]=useState("")
    const[productName,setProductName]=useState("")
    const[number,setNumber]=useState("")
    const[ editingID,setEditingId]=useState(null)

    const[sales,setSales]=useState([])

    //navigation
    const navigate = useNavigate();
    const {id}=useParams();
    
   

    const resetForm = ()=> {
        setcustomerName(""),
        setNumber(""),
        setProductName("")

    }
     
    useEffect(()=>{
        const fetchSal = async() => {
            try {

                
               const res = await fetchsalesId(id)
               const sals = res.data

               setcustomerName(sals.customerName)
               setProductName(sals.productName)
               setNumber(sals.number)

               setEditingId(id)
            } catch (error) {
               console.log(error) 
            }
        }
        
        fetchSal();
    },[id])



    //updating
    const updateSale = async(e) => {
        e.preventDefault();
        try {
            const payload ={customerName,productName,number}

           const res = await  updateSales(editingID,payload)
           console.log("data updated",res.data)
           setSales(sales.map((sls) =>sls.id === editingID? res.data:sls ))

           resetForm();

           setEditingId(id)

           navigate('/viewsales')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={updateSale}>
            <label htmlFor="">Name:</label>
            <input type="text"
            value={customerName}
            onChange={(e)=>setcustomerName(e.target.value)} />

             <label htmlFor="">Product Name</label>
            <input type="text"
            value={productName}
            onChange={(e)=>setProductName(e.target.value)} />


             <label htmlFor="">Number:</label>
            <input type="text"
            value={number}
            onChange={(e)=>setNumber(e.target.value)} />

            <button type='submit'> Post</button>
        </form>
    </div>
    
  )
}

export default EditSales