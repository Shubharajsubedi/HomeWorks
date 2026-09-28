
import useAuthStore from '../../store/authStore'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const user = useAuthStore((state) => state.user)

    const logout = useAuthStore((state) => state.logout)

    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate("/")
    };

  return (
    <div>Hello I'm {user}. The admin !!
    <button onClick={handleLogout}>Logout</button>
    

    </div>

    
  )
}

export default Admin