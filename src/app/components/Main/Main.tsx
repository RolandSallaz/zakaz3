import React from 'react'
import './Main.scss';
import carbonDocImg from '../../../../public/carbon_document-signed.svg';
import secureImg from '../../../../public/marketeq_secure.svg';
import doorImg from '../../../../public/system-uicons_door.svg';
import supportImg from '../../../../public/fluent_person-support-24-regular.svg';
import AdvantagesCard from '../advantagesCard/AdvantagesCard';
import friendImg from '../../../../public/la_user-friends.svg';
import Card from '../Card/Card';

export default function Main() {
  return (
    <main>
      <section id='advantages' className='advantages'>
        <div className='advantages__container'>
          <AdvantagesCard title='Оформление карты без доверенности' description='Потребуется только загранпаспорт' imageLink={carbonDocImg.src} />
          <AdvantagesCard title='Гарантируем конфиденциальность' description='Полная безопасность ваших данных' imageLink={secureImg.src} />
          <AdvantagesCard title='Полностью удаленно с доставкой на дом' description='Максимально удобно' imageLink={doorImg.src} />
        </div>
        <div className='advantages__container'>
          <AdvantagesCard title='Поддержка на всех этапах' description='Сопровождение на всех этапах открытия' imageLink={supportImg.src} />
          <AdvantagesCard title='Приведи друга' description='Скидка 10% при покупке 2-х карт одновременно' withPurpleText imageLink={friendImg.src} />
        </div>
      </section>
      <section id='cards' className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}
