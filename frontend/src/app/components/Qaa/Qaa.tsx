'use client'
import { useState } from 'react';
import minusImg from '../../../../public/minus.svg';
import plusImg from '../../../../public/plus.svg';
import styles from './Qaa.module.scss';

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
                <h3 className={styles.qaa__question}>{question}</h3>
                {isOpened ? <img src={minusImg.src} alt='иконка открытия/закрытия' className={styles.qaa__image} /> : <img src={plusImg.src} alt='иконка открытия/закрытия' className={styles.qaa__image} />}
            </div>
            <p className={`${styles.qaa__answer} ${isOpened && styles.qaa__answer_opened}`}>{answer}</p>
        </div>
    )
}
