import React from 'react'
import './Tag.scss';

interface props {
    tag: string;
}

export default function Tag({ tag }: props) {
    return (
        <p className={'tag'}>
            {tag}
        </p>
    )
}
