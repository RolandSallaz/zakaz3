import React, { ReactNode } from 'react';
import styles from './Card.module.scss';
import mcImage from '../../../../public/mastercard.png';
import visaImage from '../../../../public/visa.png';
import Tag from '../Tag/Tag';
import Image from 'next/image';
import ContactButton from '../ContactButton/ContactButton';

interface props {
    title: string;
    subtitle?: string;
    description?: string;
    tags?: ReactNode;
    price: number;
    masterCard?: boolean;
    visa?: boolean;
    subtags?: boolean;
    listItems?: string[];
    upd?: string;
    service?: string;
    small?: boolean;
}

export default function Card({ title, subtitle, description, tags, price, masterCard, visa, subtags, listItems, upd, service, small }: props) {
    return (
        <article className={styles.card}>
            <div className={`${styles.card__container} ${styles.card__container_top} ${small && styles.card__container_top_small}`}>
                <div className={styles.card__info_container}>
                    <div className={styles.card__subcontainer}>
                        <h2 className={styles.card__name}>{title}</h2>
                        <p className={styles.card__subtitle}>{subtitle}</p>
                        <p className={styles.card__description}>{description}</p>
                    </div>

                    <div className={styles.images}>
                        {masterCard && <img src={mcImage.src} alt='Иконка мастеркард' className={styles.images__element} style={{ width: '144px', height: '26px' }} />}
                        {visa && <img src={visaImage.src} alt='Иконка виза' className={`${styles.images__element} ${styles.images__element_visa}`} />}
                    </div>
                </div>
                <div className={styles.card__flex_container}>
                    <div className={styles.card__tag_container}>
                        {tags}
                    </div>
                    <p className={styles.card__price}>
                        {price.toLocaleString('ru-RU')}  ₽
                    </p>
                </div>
            </div>
            <div className={`${styles.card__container} ${styles.card__container_bottom}`}>
                {subtags && (
                    <div className={styles.subtags}>
                        <p className={styles.subtag}>Оформление без доверенности</p>
                        <p className={styles.subtag}>Привязка к номеру РФ</p>
                    </div>
                )}
                {service ? (
                    <p className={styles.service}>{service}</p>)
                    : (
                        <ul className={styles.card__list}>
                            {listItems?.map((item, i) => (
                                <li className={styles.card__list__item} key={i}>
                                    {item}
                                </li>
                            ))}
                        </ul>)}

                {upd && <p className={styles.card__upd}>{upd}</p>}
                <div className={styles.contact_buttons}>
                    <ContactButton type='ws' small />
                    <ContactButton type='tg' small />
                </div>
            </div>
        </article>
    )
}
