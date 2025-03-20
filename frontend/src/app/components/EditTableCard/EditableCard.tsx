import React, { useState } from 'react'
import './EditableCard.scss';
import { ICard } from '@/app/lib/utils/types';

interface props {
    data: ICard;
    onSaveCard: (data: ICard) => void;
    onDeleteCard: (id: number) => void;
}

export default function EditableCard({ data, onSaveCard, onDeleteCard }: props) {
    const [dto, setDto] = useState<ICard>(data);

    function handleChangeData(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setDto((prev) => ({ ...prev, [name]: value }));
    }

    function handleChangeCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = e.target;
        setDto((prev) => ({ ...prev, [name]: checked }));
    }

    function handleSaveCard() {
        onSaveCard(dto);
    }

    function handleDeleteCard() {
        onDeleteCard(dto.id)
    }

    return (
        <div className='EditableCard'>
            <input value={dto.title} name='title' onChange={handleChangeData} placeholder='Название' />
            <input value={dto.subtitle} name='subtitle' onChange={handleChangeData} placeholder='Под названием' />
            <input value={dto.description} name='description' onChange={handleChangeData} placeholder='Описание' />
            <input value={dto.price} name="price" type="number" onChange={handleChangeData} />
            <textarea value={dto.list} name='list' onChange={handleChangeData} placeholder='Список, 1 строка 1 элемент' />
            <label>Регистрация без доверенности
                <input type="checkbox" checked={dto.registration_without_power} name='registration_without_power' onChange={handleChangeCheckBox} />
            </label>
            <label>
                Привязка к рф номеру
                <input type="checkbox" checked={dto.binding_to_rf_number} name='binding_to_rf_number' onChange={handleChangeCheckBox} />
            </label>
            <textarea value={dto.card_types} name='card_types' onChange={handleChangeData} placeholder='типы карт, например MasterCard или Visa' />
            <textarea value={dto.tags} name='tags' onChange={handleChangeData} placeholder='Валюты, например USD или RUB' />
            <button onClick={handleSaveCard}>
                Сохранить
            </button>
            <button onClick={handleDeleteCard}>
                Удалить
            </button>
        </div>
    )
}
