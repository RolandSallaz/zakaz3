'use client'
import useWindowDimensions from '@/app/hooks/useWindowDimensions';
import { useMemo, useState } from 'react';
import styles from './HeaderNav.module.scss';
import burgerImg from '../../../../public/burger-menu.svg';
export default function HeaderNav() {
    const [isBurgerOpened, setIsBurgerOpened] = useState<boolean>(false);
    const { width } = useWindowDimensions();
    const isMobile = useMemo(() => width < 1279, [width]);

    function handleBurgerToggle() {
        setIsBurgerOpened((prev) => !prev);
    }


    const navElements = useMemo(() => (
        <nav className={styles['nav']}>
            <ul className={styles['nav__list']}>
                <li className={styles['nav__list__item']}>
                    <a href='#advantages' className={styles['nav__list__link']}>Наши преимущества</a>
                </li>
                <li className={styles['nav__list__item']}>
                    <a href='#cards' className={styles['nav__list__link']}>Карты</a>
                </li>
                <li className={styles['nav__list__item']}>
                    <a href='#usages' className={styles['nav__list__link']}>Применение карт</a>
                </li>
                <li className={styles['nav__list__item']}>
                    <a href='#stages_of_opening' className={styles['nav__list__link']}>Этапы открытия</a>
                </li>
                <li className={styles['nav__list__item']}>
                    <a href='#reviews' className={styles['nav__list__link']}>Отзывы</a>
                </li>
                <li className={styles['nav__list__item']}>
                    <a href='#question_and_answer' className={styles['nav__list__link']}>Вопрос-ответ</a>
                </li>
            </ul>
        </nav>
    ), [])

    return (
        <>
            {isMobile ? (
                <div className={styles.burger} onClick={handleBurgerToggle}>
                    {isBurgerOpened
                        ?
                        <>
                            <div className={styles.burger__container}>
                                {navElements}
                            </div>
                            <button className={styles.burger__closeButton}>X</button>
                        </>
                        :
                        <img src={burgerImg.src} className={styles.burger__img} />
                    }

                </div>
            ) : (
                navElements
            )}

        </>
    )
}
