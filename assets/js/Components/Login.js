import React from 'react';
import Axios from 'axios';

class Login extends React.Component {

    render() {
        let handleClick = (e) => {
            e.preventDefault();
            let email = document.querySelector("#user").value;
            let password = document.querySelector("#password").value;
            let data = {
                email: email,
                password: password
            }

            console.log(JSON.stringify(data));
            Axios.post(
                "http://127.0.0.1:8000/login", 
                (data.user && data.password ? JSON.stringify(data): "")
            )
        }
        return (
            <form>
                <div className="form-group">
                    <label className=''>Email</label>
                    <input type="text" id="user" className="form-control" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type="password" id='password' className="form-control" placeholder="Password"></input>
                </div>
                <button type='button' onClick={handleClick}>connexion</button>
            </form>
        )
    }
}

export default Login; 