import React from 'react'
import './Header.scss';
import cardImage from '../../../../public/cards.png';
import Image from 'next/image';
import ContactButton from '../ContactButton/ContactButton';

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <a href='#advantages' className='nav-list__link'>Наши преимущества</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href='#cards' className='nav-list__link'>Карты</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href='#' className='nav-list__link'>Применение карт</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href='#' className='nav-list__link'>Этапы открытия</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href='#' className='nav-list__link'>Отзывы</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href='#' className='nav-list__link'>Вопрос-ответ</a>
                    </li>
                </ul>
            </nav>
            <div className='header__flex-container'>
                <div>
                    <h1 className='header__heading'>ПОМОЖЕМ ОФОРМИТЬ ИНОСТРАННУЮ БАНКОВСКУЮ КАРТУ ДИСТАНЦИОННО</h1>
                    <p className='header__description'>Оплачивайте онлайн-сервисы, совершайте покупки и бронируйте отели, как раньше</p>
                    <div className='header__button-container'>
                        <ContactButton type='ws' />
                        <ContactButton type='tg' />
                    </div>
                </div>
                <div>
                    <Image src={cardImage.src} width={800} height={636} alt='Карточки' className='header__image' />
                </div>
                <div className='elipse elipse_left' />
                <div className='elipse elipse_center' />
                <div className='elipse elipse_right' />
            </div>
        </header>
    )
}
