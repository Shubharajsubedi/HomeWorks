
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthStore from '../store/authStore'

const Login = () => {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login)


    const handleLogin = (event) => {

    // Prevent the browser from refreshing.
    event.preventDefault();

    const users = [

      {
        email: "admin@gmail.com",
        password: "admin123",
        name: "Admin User",
        role: "admin",
      },

      {
        email: "sales@gmail.com",
        password: "sales123",
        name: "Sales User",
        role: "sales",
      },

      {
        email: "customer@gmail.com",
        password: "customer123",
        name: "Customer User",
        role: "customer",
      },

    ];


    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (foundUser) {

      
      login(foundUser);

      if (foundUser.role === "admin") {

        navigate("/admin");

      } else if (foundUser.role === "sales") {

        navigate("/sales");

      } else if (foundUser.role === "customer") {

        navigate("/customer");

      }

    } else {

      
      alert("Invalid email or password");

    }

    
  };

 
  return (
    <div>
        <form onSubmit={handleLogin}>
           <label htmlFor="">Email:</label>
            <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your Email.' />
            <br />
            

            <label htmlFor="">Password</label>
            <input type="text"
            value={password}
            placeholder='Enter your password' 
            onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Login</button>

        </form>
        <div>
          <li>
            <ol>
              admin: admin@gmail.com/admin123
            </ol>
            <ol>sales: sales@gmail.com/sales123</ol>
            <ol>customer : customer@gamail.com/ customer123</ol>
            </li>
        </div>

        
    </div>
  )
}

export default Login