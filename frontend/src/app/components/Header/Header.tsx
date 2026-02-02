import React from 'react'
import './Header.scss';
import ContactButton from '../ContactButton/ContactButton';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderImage from '../HeaderImage/HeaderImage';
import VariableRender from '../VariableRender/VariableRender';

export default function Header() {
    return (
        <header className='header' aria-labelledby='page-title'>

            <HeaderNav />
            <div className='header__flex-container'>
                <div className='header__sub'>
                    <h1 id='page-title' className='visuallyHidden'>Поможем оформить зарубежную банковскую карту Visa и Mastercard удалённо</h1>
                    <p className='header__description'>Оплачивайте онлайн-сервисы, совершайте покупки и бронируйте отели, как раньше</p>
                    <VariableRender renderOnMob>
                        <HeaderImage isMob />
                    </VariableRender>
                    <div className='header__button-container'>
                        <ContactButton type='ws' />
                        <ContactButton type='tg' />
                    </div>
                </div>
                <VariableRender renderOnDesk>
                    <HeaderImage />
                </VariableRender>
            </div>
        </header>
    )
}
