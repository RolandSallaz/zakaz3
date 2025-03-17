'use client'
import { apiAddUser, apiDeleteUser, apiGetUsers, apiLogin, apiUpdateUser } from '@/app/lib/utils/api';
import './Admin.scss';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { IUser } from '@/app/lib/utils/types';
import AdminUser from '../AdminUser/AdminUser';

enum TAB {
    cards,
    users,
    services
}

export default function Admin() {
    const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
    const [authData, setAuthData] = useState<{ email: string, password: string }>({ email: '', password: '' })
    const [users, setUsers] = useState<IUser[]>([]);
    const [tab, setTab] = useState<TAB>(TAB.users);

    function handleSubmitAuth(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        apiLogin(authData).then((res) => {
            localStorage.setItem('jwt', res.token);
            setIsLoggedin(true);
        }).catch(() => alert('Ошибка входа'))
    }

    useEffect(() => {
        if (tab == TAB.users) {
            apiGetUsers().then((res) => {
                setIsLoggedin(true);
                setUsers(res);
            })
                .catch((err) => setIsLoggedin(false))
        }
        else if (tab == TAB.cards) { }
        else if (tab == TAB.services) { }
        else {
            alert('непредвиденная ошибка')
        }
    }, [tab])

    function handleChangeTab(e: SyntheticEvent<HTMLButtonElement>) {
        const tabIndex = parseInt(e.currentTarget.name)
        if (tabIndex in TAB) {
            setTab(tabIndex as TAB);
        }
    }

    function handleAddNewUser() {

    }

    function hanldeUpdateUser(id: number, newData: IUser) {
        if (id) {
            apiUpdateUser(id, newData).then((res) => {
                setUsers((prev) => prev.map((oldUser) => oldUser.id == id ? res.user : oldUser));
            })
                .catch(alert);
        }
        else {
            apiAddUser(newData).then((res) => {
                setUsers((prev) => prev.map((oldUser) => oldUser.email == newData.email ? res.user : oldUser));
            })
                .catch(alert);
        }

    }

    function handleDeleteUser(id: number) {
        if (id) {
            apiDeleteUser(id).then((res) => {
                setUsers((prev) => prev.filter((user) => user.id != id));
            })
                .catch(alert);
        }
        else {
            setUsers((prev) => prev.filter(user => user.id !== null));
        }
    }

    function handleAddNewUserClick() {
        setUsers((prev) => [...prev, { email: '', password: '', id: null }])
    }

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
                        <div>
                            <div>
                                <button name={TAB.users.toString()} onClick={handleChangeTab}>
                                    Пользователи
                                </button>
                                <button name={TAB.cards.toString()} onClick={handleChangeTab}>
                                    Карточки
                                </button>
                                <button name={TAB.services.toString()} onClick={handleChangeTab}>
                                    Услуги
                                </button>
                            </div>
                            {tab == TAB.users && (
                                <div>
                                    {users.map((user) => (<AdminUser data={user} onSave={hanldeUpdateUser} onDelete={handleDeleteUser} key={user.id} />))}
                                    <button type='button' onClick={handleAddNewUserClick}>Добавить нового пользователя</button>
                                </div>
                            )}
                        </div>
                    )
            }
        </div>
    )
}
