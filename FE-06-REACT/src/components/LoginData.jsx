import {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
     
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"  required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                                      
                            </form>
                            <p>Don't have an account? Register here</p> 
                        </div>
                        
                </div>
            </div> 
         );
    }

 
export default Login ;