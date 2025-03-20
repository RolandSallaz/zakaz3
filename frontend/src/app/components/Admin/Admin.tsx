'use client'
import { apiAddUser, apiDeleteCard, apiDeleteService, apiDeleteUser, apiGetCards, apiGetSmallCards, apiGetUsers, apiLogin, apiPostCard, apiPostService, apiUpdateCard, apiUpdateService, apiUpdateUser } from '@/app/lib/utils/api';
import './Admin.scss';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { ICard, ISmallCard, IUser } from '@/app/lib/utils/types';
import AdminUser from '../AdminUser/AdminUser';
import EditableCard from '../EditTableCard/EditableCard';
import EditSmallCards from '../EditSmallCards/EditSmallCards';

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
    const [cards, setCards] = useState<ICard[]>([]);
    const [smallCards, setSmallCards] = useState<ISmallCard[]>([]);
    function handleSubmitAuth(e: SyntheticEvent<HTMLButtonElement>) {
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
                .catch(() => {
                    setIsLoggedin(false)
                })
        }
        else if (tab == TAB.cards) {
            apiGetCards().then((res) => {
                setCards(res);
            }).catch(alert)
        }
        else if (tab == TAB.services) {
            apiGetSmallCards().then(res => setSmallCards(res.cards)).catch(alert)
        }
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
            apiDeleteUser(id).then(() => {
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

    function handleAddNewCardClick() {
        const newCard: ICard = {
            id: 0,
            title: '',
            subtitle: '',
            description: '',
            price: 0,
            registration_without_power: false,
            binding_to_rf_number: false,
            list: [],
            card_types: [],
            tags: []
        };

        setCards((prev) => [...prev, newCard]);
    }

    function handleSaveCard(dto: ICard) {
        if (dto.id == 0) {
            //новая карточка
            apiPostCard(dto).then((res) => {
                setCards((prev) => prev.filter((item) => item.id != 0))
                setCards((prev) => [...prev, res.card])
            })
                .catch(alert);
        }
        else {
            //обновляем карточку
            apiUpdateCard(dto.id, dto).then((res) => {
                setCards((prev) => prev.map(i => i.id == dto.id ? res.card : i))
            }).catch(alert);
        }
    }

    function handleDeleteCard(id: number) {
        if (id == 0) {
            setCards(prev => prev.filter(i => i.id != id))
        }
        else {
            apiDeleteCard(id).then(() => {
                setCards(prev => prev.filter(i => i.id != id))
            }).catch(alert);
        }

    }

    function handleAddNewServiceClick() {
        const newCard: ISmallCard = {
            id: 0,
            title: '',
            description: '',
            price: 0,
            upd: '',
            info: ''
        };
        setSmallCards((prev) => [...prev, newCard]);
    }

    function handleSaveService(dto: ISmallCard) {
        if (dto.id == 0) { //новая карточка
            apiPostService(dto).then(() => {
                setSmallCards((prev) => prev.filter((item) => item.id != 0))
            }).catch(alert);
        }
        else { //обновляем карточку
            apiUpdateService(dto.id, dto).then((res) => {
                setSmallCards((prev) => prev.map(i => i.id == dto.id ? res.card : i))
            }).catch(alert)
        }
    }


    function handleDeleteService(id: number) {
        if (id == 0) {
            setSmallCards(prev => prev.filter(i => i.id != id))
        }
        else {
            apiDeleteService(id).then(() => {
                setSmallCards(prev => prev.filter(i => i.id != id))
            }).catch(alert);
        }
    }


    return (
        <div className='admin'>
            {
                !isLoggedin
                    ?
                    (<div className='authForm'>
                        <input value={authData.email} placeholder='email' name='email' onChange={(e) => setAuthData((prev) => ({ ...prev, email: e.target.value }))} />
                        <input value={authData.password} type='password' placeholder='пароль' name='password' onChange={(e) => setAuthData((prev) => ({ ...prev, password: e.target.value }))} />
                        <button type='submit' onClick={handleSubmitAuth}>Войти</button>
                    </div>)
                    :
                    (
                        <div className='admin__container'>
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
                                    <button type='button' className='button' onClick={handleAddNewUserClick}>Добавить нового пользователя</button>
                                </div>
                            )}
                            {(tab == TAB.cards || tab == TAB.services) && (
                                <div className='editCards'>
                                    {tab == TAB.cards && (
                                        <>
                                            <div className='grid'>
                                                {cards.map((card, i) => (<EditableCard onDeleteCard={handleDeleteCard} onSaveCard={handleSaveCard} data={card} key={i} />))}
                                            </div>
                                            <button type='button' className='button' onClick={handleAddNewCardClick}>Добавить карточку</button>
                                        </>
                                    )}
                                    {tab == TAB.services && (
                                        <>
                                            <div className='grid'>
                                                {smallCards.map((card, i) => (<EditSmallCards onDeleteCard={handleDeleteService} onSaveCard={handleSaveService} data={card} key={i} />))}
                                            </div>
                                            <button type='button' className='button' onClick={handleAddNewServiceClick}>Добавить карточку</button>
                                        </>
                                    )}

                                </div>
                            )}
                        </div>
                    )
            }
        </div>
    )
}
