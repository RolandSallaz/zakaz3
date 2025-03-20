import React, { useState } from 'react'
import './EditSmallCards.scss';
import { ISmallCard } from '@/app/lib/utils/types';

interface props {
    data: ISmallCard
    onSaveCard: (dto: ISmallCard) => void;
    onDeleteCard: (id: number) => void;
}

export default function EditSmallCards({ data, onDeleteCard, onSaveCard }: props) {
    const [dto, setDto] = useState<ISmallCard>(data)

    function handleChangeData(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setDto((prev) => ({ ...prev, [name]: value }));
    }

    function handleSaveCard() {
        onSaveCard(dto);
    }

    function handleDeleteCard() {
        onDeleteCard(dto.id)
    }

    return (
        <div className='EditSmallCards'>
            <input name='title' value={dto.title} onChange={handleChangeData} placeholder='Название' />
            <input name='description' value={dto.description} onChange={handleChangeData} placeholder='Описание' />
            <input name='price' type="number" value={dto.price} onChange={handleChangeData} placeholder='Цена' />
            <input name='info' value={dto.info} onChange={handleChangeData} placeholder='Информация' />
            <input name="upd" value={dto.upd} onChange={handleChangeData} placeholder='Текст снизу' />
            <button onClick={handleSaveCard}>
                Сохранить
            </button>
            <button onClick={handleDeleteCard}>
                Удалить
            </button>
        </div>
    )
}
