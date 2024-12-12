import React from 'react'
import './AdvantagesCard.scss'

interface props {
    title: string;
    description: string;
    imageLink: string;
    withPurpleText?: boolean;
    width?: number;
}
export default function AdvantagesCard({ title, description, imageLink, withPurpleText, width = 128 }: props) {
    return (
        <div className='advantages-card'>
            <img src={imageLink} alt={`иконка ${title}`} className='advantages-card__image' style={{width: `${width}px`}} />
            <h2 className='advantages-card__title'>{title}</h2>
            {withPurpleText ?
                <p className='advantages-card__description'>Скидка <span className='advantages-card__purple'>10%</span> при покупке 2-х карт одновременно</p>
                :
                <p className='advantages-card__description'>{description}</p>}
        </div>
    )
}
