import React from 'react'
import './Header.scss';
import ContactButton from '../ContactButton/ContactButton';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderImage from '../HeaderImage/HeaderImage';
import VariableRender from '../VariableRender/VariableRender';

export default function Header() {
    return (
        <header className='header'>

            <HeaderNav />
            <div className='header__flex-container'>
                <div className='header__sub'>
                    <h1 className='header__heading'>ПОМОЖЕМ ОФОРМИТЬ ИНОСТРАННУЮ БАНКОВСКУЮ КАРТУ ДИСТАНЦИОННО</h1>
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
