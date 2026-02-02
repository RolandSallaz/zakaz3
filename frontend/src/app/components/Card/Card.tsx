import { ReactNode } from 'react';
import mcImage from '../../../../public/mastercard.png';
import visaImage from '../../../../public/visa.png';
import ContactButton from '../ContactButton/ContactButton';
import styles from './Card.module.scss';

interface props {
    title: string;
    subtitle?: string;
    description?: string;
    tags?: ReactNode;
    price: number;
    masterCard?: boolean;
    visa?: boolean;
    listItems?: string[];
    upd?: string;
    service?: string;
    small?: boolean;
    registration_without_power?: boolean;
    binding_to_rf_number?: boolean;
}

export default function Card({ title, subtitle, description, tags, price, masterCard, visa, registration_without_power, binding_to_rf_number, listItems, upd, service, small }: props) {

    const formatPrice = new Intl.NumberFormat('ru-RU', { useGrouping: true }).format(price);
    return (
        <article className={styles.card}>
            <div className={`${styles.card__container} ${styles.card__container_top} ${small && styles.card__container_top_small}`}>
                <div className={styles.card__info_container}>
                    <div className={styles.card__subcontainer}>
                        <h3 className={styles.card__name}>{title}</h3>
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
                        {formatPrice}  ₽
                    </p>
                </div>
            </div>
            <div className={`${styles.card__container} ${styles.card__container_bottom}`}>
                <div className={styles.subtags}>
                    {registration_without_power && <p className={styles.subtag}>Оформление без доверенности</p>}
                    {binding_to_rf_number && <p className={styles.subtag}>Привязка к номеру РФ</p>}
                </div>
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
