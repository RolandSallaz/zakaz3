import React from 'react';
import styles from './Card.module.scss';
import mcImage from '../../../../public/mastercard.png';
import visaImage from '../../../../public/visa.png';
import Tag from '../Tag/Tag';
import Image from 'next/image';
import ContactButton from '../ContactButton/ContactButton';

export default function Card() {
    return (
        <article className={styles.card}>
            <div className={`${styles.card__container} ${styles.card__container_top}`}>
                <div className={styles.card__info_container}>
                    <div className={styles.card__subcontainer}>
                        <h2 className={styles.card__name}>Казахстан</h2>
                        <p className={styles.card__subtitle}>DEPOSIT CARD + ИИН</p>
                        <p className={styles.card__description}>Пластиковая неименная и виртуальная именная</p>
                    </div>

                    <div className={styles.images}>
                        <img src={mcImage.src} alt='Иконка мастеркард' className={styles.images__element} style={{ width: '144px', height: '26px' }} />
                        <img src={visaImage.src} alt='Иконка виза' className={styles.images__element} style={{ width: '75px', height: '26px' }} />
                    </div>
                </div>
                <div className={styles.card__flex_container}>
                    <div className={styles.card__tag_container}>
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                    </div>
                    <p className={styles.card__price}>
                        10 000 ₽
                    </p>
                </div>
            </div>
            <div className={`${styles.card__container} ${styles.card__container_bottom}`}>
                <div className={styles.subtags}>
                    <p className={styles.subtag}>Оформление без доверенности</p>
                    <p className={styles.subtag}>Привязка к номеру РФ</p>
                </div>
                <ul className={styles.card__list}>
                    <li className={styles.card__list__item}>
                        Пополнение с Озон банка РФ, Сбер, Мтс, Kwikpay, ЗК, Тинькофф
                    </li>
                    <li className={styles.card__list__item}>
                        Валюта ведения счета - USD или EUR
                    </li>
                </ul>
                <div className={styles.contact_buttons}>
                    <ContactButton type='ws' small/>
                    <ContactButton type='tg' small/>
                </div>
            </div>
        </article>
    )
}
