import useAuthStore from "../../store/authStore"

const Sales = () => {
    const user = useAuthStore((state) => state.login)
      const logout = useAuthStore((state) => state.logout)
  return (
    <div>Hello I'm {user} and I'm a salesmanager.
        <button onSubmit={logout}>Logout</button>
    </div>
  )
}

export default Sales