import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="auth_page"  >
            <form onSubmit={handleSubmit}>
                <div width="100%" style={{textAlign:"center"}}>
                    <img width="25%"  src="data:image/jpeg;base64,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" />
                </div>
                

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                    
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="pass">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                   
                </div>
                
                <button type="submit" className="btn btn-dark w-100"
                disabled={email && password ? false : true}>
                    Login
                </button>

                <p className="my-2">
                    You don't have an account? <Link to="/register" style={{color: "crimson"}}>Register Now</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
