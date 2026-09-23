import { useEffect, useState } from "react";
import { createSales, deleteDatas, getSales, updateSales } from "../Api/SalesAPI";


function SalesCreation(){
    const [customerName, setCustomerName]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [productname, setProductName]=useState("")
    

    const[customerData, setCustomerData]=useState([])
    const[editing,setEditing]=useState(null)
    const[showData,setShowData]=useState(false)


    const payload ={
        customerName,phoneNumber,productname
    }

    const resetForm = ()=>{
        
        setCustomerName(""),
        setPhoneNumber(""),
        setProductName("")
    }

    const createSale= async(e) => {
        e.preventDefault();

        try {
            const res = await createSales(payload)
            console.log("Customer Created Successfully",res.data)
            setCustomerData([...customerData,res.data])
            
        } catch (error) {
            console.log("Error;",error)
        }
        resetForm();

    }
    
    useEffect(()=>{
        const getSale = async()=>{
            try {
               const res = await getSales();
               setCustomerData(res.data) 
            } catch (error) {
                console.log(error)
            }  

        }
        getSale();
    },[])

    //when Editing 
    const stratEditing= (sls)=>{
        setEditing(sls.id)
        
        setCustomerName(sls.customerName)
        setPhoneNumber(sls.phoneNumber)
        setProductName(sls.productname)
        setShowData(true)
    }

    //updating 
    const updateSale = async()=>{
        try {
            if (!editing){
                return
            }else{const res = await updateSales(editing,payload)
                console.log(res.data)
            setCustomerData(customerData.map((sls)=>sls.id===editing?res.data:sls ))
            }
            
        } catch (error) {
            console.log(error)
        }
        resetForm();
        
        
    }

    const deleteData = async(id)=> {
        try {
            const res = await deleteDatas(id)
            console.log("Deleted successfully",res.data)
            setCustomerData(customerData.filter(sls=>sls.id!==id))
        } catch (error) {
            console.log (error)
        }
    }




    return (
        <>
        {showData && (<div >
            
            <form onSubmit={createSale} >
                <label htmlFor="">Customer Name:</label>
                <input type="text"
                value={customerName}
                onChange={(e)=>setCustomerName(e.target.value)}
                placeholder="Enter Name" />
                <br /><br />

                <label htmlFor="">Phone Number:</label>
                <input type="number"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)} 
                placeholder="Enter phone Number"/>
                <br /><br />


                <label htmlFor="">
                    Product Name:
                </label>
                <input type="text"
                value={productname}
                onChange={(e)=>setProductName(e.target.value)} />
                <br />

                <button type="submit">Save</button>
                
            </form>
            <button onClick={()=>resetForm()}>Cancel</button>

            {editing&& (
                <button onClick={updateSale}> Update</button>
            )}
            
        </div>)}



        <div>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th colSpan="5">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Daily Log</span>
                        <button onClick={() => setShowData(true)}>Add New</button>
                        </div>
                    </th>
                    </tr>  
                    <tr >
                    <th>Customer ID</th>
                    <th colSpan="4">Perofrm Actions</th>
                </tr>                    
                <tr >
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th> Phone Number</th>
                    <th>Product Name</th>
                    <th>Perofrm Actions</th>
                </tr>
            </thead>
            <tbody>
                {customerData.map(sls=> (
                    <tr key={sls.id}>
                        <td>{sls.id}</td>
                        <td>{sls.customerName}</td>
                        <td>{sls.phoneNumber}</td>
                        <td>{sls.productname}</td>
                        <td>
                             <button onClick={()=>stratEditing(sls)}>Edit</button>
                            
                            <button onClick={()=>deleteData(sls.id)}>Delete</button>
                            </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
        </div>

        


        
        </>
    )
}

export default SalesCreation;