import { useEffect,useState } from "react"
import { deleteSales, getSales } from "../../Api/SalesAPI"
import { Link } from "react-router-dom"


const ViewSales = () => {

    const [sales, setSales] = useState([])

    useEffect(()=>{
        const fetchdata= async() => {
            try {
                const res = await getSales();
                setSales(res.data)
            } catch (error) {
                console.log(error)
            }
            
            
        }
        fetchdata();
    },[])

    const deleteSale = async(id) => {
        try {
            const res = await deleteSales(id);
            console.log("SuccessFully Deleted",res.data)
            setSales(sales.filter(sls=>sls.id !==id))
        } catch (error) {
          console.log(error)  
        }
    }
    
    
  return (
    <div>
        <table border="2" cellPadding="10">
            <thead>
                <tr aria-colspan="4">
                    <th>
                        Daily Sales 
                       <Link to={"/viewsales/submit"} ><button>Add New Sales</button></Link> 
                    </th>
                </tr>

                <tr>
                    
                    <th>Customer Name</th>
                    <th> Product Name</th>
                    <th>Number</th>
                </tr>
            </thead>

            
            <tbody>
                {sales.map((sls)=>(
                    <tr key={sls.id}>
                        <td>{sls.customerName}</td>
                        <td>{sls.productName}</td>
                        <td>{sls.number}</td>
                        <td>
                            <Link to={`/viewsales/edit/${sls.id}`}><button >Edit</button></Link>
                            <button onClick={()=>deleteSale(sls.id)}>Delete</button>
                        </td>
                        

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  )
}

export default ViewSales