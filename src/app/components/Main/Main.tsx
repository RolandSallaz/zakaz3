import React from 'react';
import styles from './Main.module.scss';
import carbonDocImg from '../../../../public/carbon_document-signed.svg';
import secureImg from '../../../../public/marketeq_secure.svg';
import doorImg from '../../../../public/system-uicons_door.svg';
import supportImg from '../../../../public/fluent_person-support-24-regular.svg';
import AdvantagesCard from '../advantagesCard/AdvantagesCard';
import friendImg from '../../../../public/la_user-friends.svg';
import tablerCashImg from '../../../../public/tabler_cash.svg';
import fluentImg from '../../../../public/fluent-mdl2_shop.svg';
import gameImg from '../../../../public/fluent-mdl2_game.svg';
import cardsTypesImg from '../../../../public/Frame 72.png';
import planetImg from '../../../../public/ion_earth-outline.svg';
import valutesImg from '../../../../public/Frame 73.svg';
import Card from '../Card/Card';

export default function Main() {
  return (
    <main>
      <section id='advantages' className={styles.advantages}>
        <div className={styles.advantages__container}>
          <AdvantagesCard title='Оформление карты без доверенности' description='Потребуется только загранпаспорт' imageLink={carbonDocImg.src} />
          <AdvantagesCard title='Гарантируем конфиденциальность' description='Полная безопасность ваших данных' imageLink={secureImg.src} />
          <AdvantagesCard title='Полностью удаленно с доставкой на дом' description='Максимально удобно' imageLink={doorImg.src} />
        </div>
        <div className={styles.advantages__container}>
          <AdvantagesCard title='Поддержка на всех этапах' description='Сопровождение на всех этапах открытия' imageLink={supportImg.src} />
          <AdvantagesCard title='Приведи друга' description='Скидка 10% при покупке 2-х карт одновременно' withPurpleText imageLink={friendImg.src} />
        </div>
      </section>
      <section id='cards' className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section id='usages' className={styles.usages}>
        <h2 className={styles.heading}>Для чего нужна зарубежная карта?</h2>
        <div className={styles.usages__container}>
          <AdvantagesCard title='Покупки и снятие наличных за границей' description='Используйте свою виртуальную или пластиковую карту для покупок в магазинах и снятия наличных в банкоматах за рубежом' imageLink={tablerCashImg.src} />
          <AdvantagesCard title='Оплата в международных интернет-магазинах' description='Делайте покупки в зарубежных онлайн-магазинах с помощью своей карты.' imageLink={fluentImg.src} />
          <AdvantagesCard title='Оплата подписок и игр на зарубежных платформах' description='Оплачивайте цифровые товары на популярных сервисах, таких как Spotify, Steam, PS Store, Netflix, Appstore и другие.' imageLink={gameImg.src} />
          <AdvantagesCard width={260} title='Привязка к платежным системам' description='Карты зарубежных банков Visa и Mastercard можно привязать к Apple Pay, Samsung Pay, Google Pay, PayPal и другим платёжным системам.' imageLink={cardsTypesImg.src} />
          <AdvantagesCard title='Приём платежей из-за границы' description='Принимайте оплату от зарубежных клиентов или фриланс-бирж напрямую на свою карту.' imageLink={planetImg.src} />
          <AdvantagesCard width={239} title='Хранение сбережений в валюте' description='Держите свои накопления в валюте на собственном именном счёте с ежемесячным начислением процентов.' imageLink={valutesImg.src} />
        </div>
      </section>
      <section id='stages_of_opening' className={styles.stages_of_opening}>
        <h2 className={styles.heading}>Этапы открытия</h2>
      </section>
    </main>
  );
}
