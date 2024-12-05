import React from 'react'
import './Header.scss';
import cardImage from '../../../../public/cards.png';
import Image from 'next/image';
import whatsAppImg from '../../../../public/whatsapp.svg';
import tgImg from '../../../../public/rg.svg';
export default function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-list__item'>
                        <a href='#' className='nav-list__link'>Наши преимущества</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href='#' className='nav-list__link'>Карты</a>
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
                        <button className='header__button'>Написать в WhatsApp <Image src={whatsAppImg.src} width={26} height={26} alt='wsImage'/></button>
                        <button className='header__button'>Написать в Telegram <Image src={tgImg.src} width={26} height={26} alt='tgImage'/></button>
                    </div>
                </div>
                <div>
                    <Image src={cardImage.src} width={800} height={636} alt='Карточки' />
                </div>
            </div>
        </header>
    )
}
