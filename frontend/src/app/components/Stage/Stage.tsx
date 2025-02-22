import React from 'react'
import styles from './Stage.module.scss';

interface props {
    index: number;
    title: string;
    description: string;
    style?: React.CSSProperties;
}

export default function Stage({ index, title, description, style }: props) {
    return (
        <div className={styles.stage} style={style}>
            <p className={styles.stage__index}>{index}</p>
            <h3 className={styles.stage__title}>{title}</h3>
            <p className={styles.stage__description}>{description}</p>
        </div >
    )
}
