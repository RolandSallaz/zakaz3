'use client'
import React, { useMemo } from 'react'
import styles from './HeaderImage.module.scss';
import cardImage from '../../../../public/cards.png';
import Image from 'next/image';
import useWindowDimensions from '@/app/hooks/useWindowDimensions';

interface props {
    isMob?: boolean;
}

export default function HeadderImage({ isMob = false }: props) {
    const { width } = useWindowDimensions();
    const isMobile = useMemo(() => width < 1279, [width]);
    return (
        <>
            {isMob ? (
                <div className={styles.container}>
                    <Image src={cardImage.src} width={394} height={291} alt='Карточки' className={styles.image} />
                    <div className={`${styles.elipse} ${styles.elipse_center}`} />
                    <div className={`${styles.elipse} ${styles.elipse_right}`} />
                </div>
            ) : (
                <>
                    <div>
                        <Image src={cardImage.src} width={800} height={636} alt='Карточки' className={styles.image} />
                    </div>
                    <div className={`${styles.elipse} ${styles.elipse_left}`} />
                    <div className={`${styles.elipse} ${styles.elipse_center}`} />
                    <div className={`${styles.elipse} ${styles.elipse_right}`} />
                </>
            )}

        </>
    )
}
