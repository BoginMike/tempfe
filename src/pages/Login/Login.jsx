import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { getApiCall } from '../../shared/api-utils';
import { Button, TextField } from '@mui/material';
import Header from '../../shared/components/Header';

export default function Login() {
    ////
    ////
    //// Its not a good practice
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    // We should use react-hooks-forms 
    // please refer signup page | that's how we should implement forms
    ////
    ////
    
    const navigate = useNavigate()

    function login() {
        // do api call 
        // if we got token in response 
        // navigate to Home page
        getApiCall('/users/generate-token', {
            username: username,
            password: password
        }).then(response => {  // response is json response sent from the server
            if (response.token) {
                // username and passord is correct and token is generated successfully.
                localStorage.setItem('token', response.token)
                //navigate user to Home page
                navigate('/home')

            } else {
                // something went wrong
                localStorage.setItem('token', '')
                alert("Username or password is incorrct!")
            }
        })
    }

    return (
        <Fragment> 
            <Header />
            <div className='login-page'>
                <div className='login-container'>
                    <TextField value={username} onChange={x => setUsername(x.target.value)} type='text' placeholder='Username' />
                    <TextField value={password} onChange={x => setPassword(x.target.value)} type='password' placeholder='Password' />
                    <Button onClick={login}>Log in</Button>
                    <a href='/profile'> Update Profile</a>
                    <a href='/sign-up'> Create Account</a>
                </div>
            </div>
        </Fragment>
    )
}
