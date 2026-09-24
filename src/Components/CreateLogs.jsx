import { useEffect, useState } from "react";
import { createLogs, deleteLogs, getLogs, updateLogs } from "../Api/logsApi";

function CreateLogs(){
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [diary,setDiary]=useState("")
    const [email,setEmail]=useState("")

    const[logs,setLogs]=useState([])
    const[edit,setEdit]=useState(null)

    const payload={
        name,age,diary,email
    }

    //creating the log

    const createLog= async(e)=>{
        e.preventDefault();
       try{
        const res = await createLogs(payload);
        console.log("New log created",res.data)
        setLogs([...logs,res.data])

        setName("")
        setAge("")
        setDiary("")
        setEmail("")

       } catch(error){
        console.log( "error",error)
       }
    };

    //fetching data 
    useEffect(()=>{
        const getLog = async()=>{
            try {
                const res = await getLogs()
                setLogs(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getLog();
    },[])

    const startedit = (lgs)=> {
        
        setEdit(lgs.id)

        setAge(lgs.age)
        setName(lgs.name)
        setDiary(lgs.diary)
        setEmail(lgs.email)
    }

    //updating data 
    const updateLog = async ()=>{
        //if no selected log don't perform an update
        if(!edit){
            return;
        }
        try {
            const res = await updateLogs(edit,payload)
            setLogs(logs.map((lgs) => lgs.id !== edit? lgs:res))

            //clears the form
            setName("")
            setAge("")
            setDiary("")
            setEmail("")
            //exit edit mode
            setEdit(null)

        } catch (error) {
            console.log(error)
        }
    }
    

    //deleting data
    const deletelog = async (id) =>{
        try {
           const res = await deleteLogs(id)
           console.log("Deleted Successfully.",res.data)
           setLogs(logs.filter(lgs=> lgs.id !==id))
        } catch (error) {
            {error}
        }
    }

    

    return (
        <>
        <div>
            <h2>Daily log</h2>
            <form onSubmit={createLog}>
                <label htmlFor="">Name:</label>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)} 
                placeholder="Enter NAME"/>
                <br /><br />


                <label htmlFor="">Age</label>
                <input type="number"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                placeholder="Enter Age" />
                <br /><br />

                <label htmlFor="">Email</label>
                <input type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                placeholder="Enter Email"/>
                <br /><br />


                <label htmlFor="">Daily Log</label>
                <input type="text"
                value={diary}
                onChange={(e)=>setDiary(e.target.value)} 
                placeholder="what do you think"
                />

                {!edit && (
                    <button type="submit">{!edit?"Submit":"Edit"}</button>
                )}


            </form>
        </div>

        {edit && (<button onClick={updateLog}>Update</button>)}

        

        

        <div>
            <h2>Daily logs of Employees</h2>
            { logs.map ((lgs)=>(
                <div key = {lgs.id}>
                    <p>{lgs.name}</p>
                    <p>{lgs.age}</p>
                    <p>{lgs.email}</p>
                    <p>{lgs.diary}</p>
                    
                    <button onClick={()=>startedit(lgs)}>Edit</button>
                    
                    <button onClick={()=>deletelog(lgs.id)}>Delete</button>

                    
                </div>
                )
                
            )}

            

            
        </div>
        </>
    )

}

export default CreateLogs;