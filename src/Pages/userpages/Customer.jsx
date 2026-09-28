import { useNavigate } from "react-router-dom"
import useAuthStore from "../../store/authStore"


const Customer = () => {
      const user = useAuthStore((state) => state.login)
      const logout = useAuthStore((state) => state.logout)

      const navigate = useNavigate();

      const handleLogout = () => {
        logout();
        navigate("/")
      }

  return (
    <div>Hello I'm {user} and I'm a Customer.
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Customer