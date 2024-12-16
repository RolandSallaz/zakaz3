'use client'
import React, { useState } from 'react'
import styles from './Qaa.module.scss';
import plusImg from '../../../../public/plus.svg';
import minusImg from '../../../../public/minus.svg';

interface props {
    question: string;
    answer: string;
}

export default function Qaa({ question, answer }: props) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    function handleChangeOpenState() {
        setIsOpened(prev => !prev);
    }

    return (
        <div className={styles.qaa}>
            <div className={styles.qaa__flexContainer} onClick={handleChangeOpenState}>
                <p className={styles.qaa__question}>{question}</p>
                {isOpened ? <img src={minusImg.src} alt='иконка открытия/закрытия' className={styles.qaa__image} /> : <img src={plusImg.src} alt='иконка открытия/закрытия' className={styles.qaa__image} />}
            </div>
            <p className={`${styles.qaa__answer} ${isOpened && styles.qaa__answer_opened}`}>{answer}</p>
        </div>
    )
}
