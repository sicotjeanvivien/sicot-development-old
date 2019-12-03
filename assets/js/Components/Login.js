import React from 'react';
import Axios from 'axios';

class Login extends React.Component {

    render() {
        let handleClick = (e) => {
            e.preventDefault();
            let username = document.querySelector("#user").value;
            let password = document.querySelector("#password").value;
            let csrf_token = document.querySelector("#csrf_token").value;

            let data = {
                username: username,
                password: password,
                csrf_token: csrf_token
            }

            Axios.post(
                window.location.origin + "/loginAuth",
                (data.username ? JSON.stringify(data) : "null")
            ).then(function (response) {
                if (response.data.url !== undefined && response.data.url !== '') {
                    window.location.href = response.data.url;
                }
                if (response.data.error !== '') {
                    console.log(response.data.error);
                }
            })
        }
        return (
            <form>
                <div className="form-group">
                    <label className=''>Nom d'utilisateur</label>
                    <input type="text" id="user" className="form-control" placeholder="Username"></input>
                    <small id="emailHelp" className="form-text text-muted">Nom d'utilisateur du compte</small>
                </div>
                <div className='form-group'>
                    <label>Mot de passe</label>
                    <input type="password" id='password' className="form-control" placeholder="Password"></input>
                </div>
                <button type='button' onClick={handleClick}>connexion</button>
            </form>
        )
    }
}

export default Login; 