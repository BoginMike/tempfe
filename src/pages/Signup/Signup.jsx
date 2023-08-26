import React, { Fragment, useState } from 'react'
import { postApiCall } from '../../shared/api-utils'
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import FileUpload from '../../shared/components/FileUpload';
import { useNavigate } from 'react-router-dom';
import Header from '../../shared/components/Header';

export default function Signup() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [fileName, setFileName] = useState('')
    function onSubmit(data) {
        data['profilePicture'] = fileName;
        postApiCall('/users', data)
            .then(r => {
                if (r == "User Created") {
                    navigate('/login')
                }else{
                    window.alert("Something went wrong")
                }
            })
    }

    function uploaded(fname) {
        setFileName(fname)
    }

    return (
        <Fragment>
            <Header />
            <div className='login-page'>
                <form className='login-container' onSubmit={handleSubmit(onSubmit)}>

                    <TextField error={errors.username} helperText={errors.username ? "username is required" : ""} {...register("username", { required: true })} label="Username" variant="outlined" />

                    <TextField type='password' {...register("password")} label="Password" />

                    <TextField type='text' {...register("email")} label="email" />

                    <FileUpload onUpload={uploaded} />

                    <Button type="submit" variant='contained' > SIGNUP</Button>
                </form>
            </div>
        </Fragment>
    )
}


// export default function Signup() {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const navigate = useNavigate()

//     function signUp() {
//         let user = { username: username, password: password }
//         postApiCall('/users', user)
//             .then(response => {
//                 alert(response)
//                 navigate('/login')
//             })
//     }

//     return (
//         <div className='login-page'>
//             <div className='login-container'>
//                 <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
//                 <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
//                 <button onClick={signUp}>Sign Up</button>
//             </div>
//         </div>
//     )
// }


