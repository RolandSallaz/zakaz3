import React from 'react'
import styles from './Tag.module.scss';

interface props {
    tag: string;
}

export default function Tag({ tag }: props) {
    return (
        <p className={styles.tag}>
            {tag}
        </p>
    )
}
