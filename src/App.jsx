
import SalesCreation from "./Components/SalesCreation";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "./Pages/Logs/Home";
import ViewLog from "./Pages/Logs/ViewLogs";
import LogForm from "./Pages/Logs/LogForm";
import EditForm from "./Pages/Logs/EditForm";


function App(){
  return(
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/viewLogs" element={<ViewLog/>}/>
        <Route path= "viewlogs/addnew" element={<LogForm/>}/>
        <Route path = "/viewlogs/edit/:id" element={<EditForm/>}/>
        <Route path = "/salescreation" element = {<SalesCreation/>}/>
       
        
      </Routes>
    </Router>
  )
}

export default App;