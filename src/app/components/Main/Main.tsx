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
import lines1Img from '../../../../public/lines1.svg';
import lines2Img from '../../../../public/lines2.svg';
import lines3Img from '../../../../public/lines3.svg';
import lines4Img from '../../../../public/lines4.svg';
import review1Img from '../../../../public/IMAGE 2024-11-25 15_51_03 1.png';
import review2Img from '../../../../public/IMAGE 2024-11-25 15_51_04 1.png';
import review3Img from '../../../../public/IMAGE 2024-11-25 15_51_06 1.png';
import Card from '../Card/Card';
import Stage from '../Stage/Stage';
import Qaa from '../Qaa/Qaa';

export default function Main() {
  return (
    <main className={styles.main}>
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
      <section id='stages_of_opening' className={styles.stages}>
        <h2 className={styles.heading}>Этапы открытия</h2>
        <div className={styles.stages__container}>
          <div className={styles.stages__subcontainer}>
            <Stage
              index={1}
              title='Выбор карты'
              description='Ознакомьтесь с информацией и  свяжитесь с менеджером для обсуждения всех деталей и дальнейших шагов.'
              style={{ maxWidth: '517px' }}
            />
            <img src={lines1Img.src} alt='линии' className={styles.stages__images_1} />
            <Stage
              style={{ marginRight: '121px' }}
              index={2}
              title='Отправляете необходимые документы и данные'
              description='Если доверенность не требуется, достаточно будет скана вашего паспорта РФ или загранпаспорта. Если оформление будет проходить по доверенности, вам потребуется отправить нотариально заверенные документы почтой нашему сотруднику.' />
            <img src={lines2Img.src} alt='линии' className={styles.stages__images_2} />
          </div>
          <div className={styles.stages__subcontainer}>
            <Stage
              index={3}
              title='Оплатите услугу'
              description='Внесите плату за услугу, размер которой зависит от выбранного вами типа карты.'
              style={{ maxWidth: '517px' }}
            />
            <img src={lines3Img.src} alt='линии' className={styles.stages__images_3} />
            <Stage
              index={4}
              title='Ожидайте подтверждение об открытии счета'
              description='На этом этапе остается только дождаться, пока счет не будет открыт.'
              style={{ marginRight: '165px' }}
            />
            <img src={lines4Img.src} alt='линии' className={styles.stages__images_4} />
          </div>
          <div className={styles.stages__subcontainer}>
            <Stage
              index={5}
              title='Готово!'
              description='Теперь вы можете пользоваться своей картой зарубежного банка для международных операций, не забудте уведомить ФНС об открытии иностранного счета (это не сложно, мы вам поможем).'
              style={{ maxWidth: '770px' }}
            />
          </div>
        </div>
      </section>
      <section id='reviews' className={styles.reviews}>
        <h2 className={styles.heading}>Отзывы</h2>
        <div className={styles.reviews__container}>
          <img src={review1Img.src} alt='скриншот отзыва' />
          <img src={review2Img.src} alt='скриншот отзыва' />
          <img src={review3Img.src} alt='скриншот отзыва' />
        </div>
      </section>
      <section id='question_and_answer' className={styles.qaa}>
        <h2 className={styles.heading}>Вопрос-ответ</h2>
        <div className={styles.qaa__container}>
          <Qaa
            question='ВЫ ГАРАНТИРУЕТЕ ЧТО СЧЕТ БУДЕТ ОТКРЫТ?'
            answer='Мы гарантируем либо открытие счета, либо возврат денег.' />
          <Qaa
            question='В каких странах работает карта?'
            answer='Карта функционирует во всех странах и регионах, за исключением: России, Кубы, Ирана, Судана, Сирии и Северной Кореи.' />
          <Qaa
            question='В каких валютах можно открыть счет?'
            answer='Счета открываются в четырех валютах: тенге, рублях, долларах и евро. Карта является мультивалютной, поэтому средства списываются в той валюте, в которой проводится платеж. Если на счете недостаточно средств в нужной валюте, сумма будет списана в другой валюте.' />
          <Qaa
            question='Требуется ли посещение Казахстана для оформления ИИН или выпуска карты?'
            answer='Нет, оформление ИИН и выпуск карты осуществляется дистанционно, без необходимости посещения Казахстана.' />
          <Qaa
            question='Где можно получить карту?'
            answer='Доставка карты осуществляется курьерской службой только по территории России, в крупные города, включая областные центры.
❗️Вы получите уведомление со ссылкой от курьерской службы, по которой можно будет согласовать и изменить время и адрес доставки.' />
          <Qaa question='Сколько времени занимает выпуск карты?' answer='Актуальное время офорлмения ИИН уточняйте у менеджера

Выпуск виртуальной карты занимает 1 день

Доставка пластика занимает 1-2 недели, но обычно происходит быстрее.' />
          <Qaa question='Нужен ли казахстанский номер телефона для регистрации в личном кабинете банка?' answer='Нет, карта и личный кабинет будут привязаны к вашему российскому номеру телефона.' />
          <Qaa question='Можно ли привязать карту к Apple Pay, Google Pay и Samsung Pay?' answer='Да, можно привязать как физическую, так и виртуальную карту (по функционалу обе карты равнозначны).' />
          <Qaa question='Как пополнить счета карты?' answer='Пополнение возможно переводами с карт российских банков, переводом рублей или долларов через SWIFT-перевод из банков РФ или других стран.' />
          <Qaa question='Сколько стоит обслуживание карты?' answer='Обслуживание карты бесплатно.' />
          <Qaa question='Какие документы нужны для оформления карты?' answer='Скан основного разворота загранпаспорта (нужно предъявить при вручении карты)
ФИО
Номер телефона
Важно: скан должен быть выполнен на стандартном белом фоне с помощью сканера, без обрезанных краев. Также потребуется заполнить заявку.' />
          <Qaa question='Выпускается ли именная карта?' answer='Карта является именной, но без указания имени и фамилии на самом пластике. При оформлении покупок в интернете необходимо указывать имя и фамилию как в загранпаспорте. Так же есть возможность заказать карту с указанием имени на пластике.' />
          <Qaa question='Возможен ли выпуск карты нерезидентам РФ?' answer='Да, за актуальным списком обращайтесь к менеджеру' />
          <Qaa question='Возможен ли срочный выпуск карты?' answer='Да' />
        </div>
      </section>
    </main>
  );
}
