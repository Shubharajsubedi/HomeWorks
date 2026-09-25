
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <form >
           <label htmlFor="">Email:</label>
            <input type="text"
            placeholder='Enter your Email.' />
            <br />
          
            <label htmlFor="">Username:</label>
            <input type="text"
            placeholder='Enter your Username' />
            <br />

            <label htmlFor="">Password</label>
            <input type="text"
            placeholder='Enter your password' />
            <button> Register</button>

        </form>

        <p>Do you have your account ? <Link>Sign In</Link></p>
    </div>
  )
}

export default Login