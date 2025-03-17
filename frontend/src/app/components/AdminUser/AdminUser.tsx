'use client';
import { IUser } from '@/app/lib/utils/types';
import './AdminUser.scss';
import React, { useState } from 'react'

interface props {
    data: IUser;
    onSave: (id: number, newData: IUser) => void;
    onDelete: (id: number) => void;
}

export default function AdminUser({ data, onDelete, onSave }: props) {
    const [userData, setUserData] = useState<IUser>(data);

    function handleChangeUserData(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    }
    return (
        <div className='AdminUser'>
            <input name='email' onChange={handleChangeUserData} value={userData.email} />
            <input name='password' type='password' onChange={handleChangeUserData} value={userData.password} />
            <button type='button' onClick={() => onSave(data.id!, userData)}>Сохранить</button>
            <button type='button' onClick={() => onDelete(data.id!)}>Удалить</button>
        </div>
    )
}
