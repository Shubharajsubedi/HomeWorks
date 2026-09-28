

import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "./Pages/Logs/Home";
import ViewLog from "./Pages/Logs/ViewLogs";
import LogForm from "./Pages/Logs/LogForm";
import EditForm from "./Pages/Logs/EditForm";
import ViewSales from "./Pages/Sales/ViewSales";
import SubmitSales from "./Pages/Sales/SubmitSales";
import EditSales from "./Pages/Sales/EditSales";
import Search from "./Pages/Sales/search";
import Login from "./LoginToLogout/login";
import Admin from "./Pages/userpages/admin";


function App(){
  return(
    
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home/>}/>
        <Route path ="/viewLogs" element={<ViewLog/>}/>
        <Route path= "viewlogs/addnew" element={<LogForm/>}/>
        <Route path = "/viewlogs/edit/:id" element={<EditForm/>}/>
        <Route path="/viewsales" element={<ViewSales/>}/>
        <Route path="/viewsales/submit" element={<SubmitSales/>}/>
        <Route path="/viewsales/edit/:id" element={<EditSales/>}/>
        <Route path="/viewsales/search" element={<Search/>}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path ="/admin" element= {<ViewSales/>}/>
       
        
      </Routes>
    </Router>
  )
}

export default App;