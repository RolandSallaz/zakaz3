'use client'
import { apiGetUsers, apiLogin } from '@/app/lib/utils/api';
import './Admin.scss';
import React, { SyntheticEvent, useEffect, useState } from 'react'

export default function Admin() {
    const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
    const [authData, setAuthData] = useState<{ email: string, password: string }>({ email: '', password: '' })

    function handleSubmitAuth(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        apiLogin(authData).then((res) => {
            localStorage.setItem('jwt', res.token);
            setIsLoggedin(true);
        }).catch(console.log)
    }

    useEffect(() => {
        apiGetUsers().then((res) => {
            setIsLoggedin(true);
        })
        .catch((err) => setIsLoggedin(false))
    }, [])

    return (
        <div className='admin'>
            {
                !isLoggedin
                    ?
                    (<form className='authForm' onSubmit={handleSubmitAuth}>
                        <input value={authData.email} placeholder='email' name='email' onChange={(e) => setAuthData((prev) => ({ ...prev, email: e.target.value }))} />
                        <input value={authData.password} type='password' placeholder='пароль' name='password' onChange={(e) => setAuthData((prev) => ({ ...prev, password: e.target.value }))} />
                        <button type='submit'>Войти</button>
                    </form>)
                    :
                    (
                        <></>
                    )
            }
        </div>
    )
}
