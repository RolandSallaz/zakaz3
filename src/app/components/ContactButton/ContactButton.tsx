import React from 'react'
import styles from './ContactButton.module.scss';
import whatsAppImg from '../../../../public/whatsapp.svg';
import tgImg from '../../../../public/rg.svg';
import Image from 'next/image';
interface props {
  type: 'ws' | 'tg';
  small?: boolean;
}

export default function ContactButton({ type = 'ws', small }: props) {
  return (
    type === 'ws' ?
      <button className={`${styles.button} ${small && styles.button_small}`}>Написать в WhatsApp <Image src={whatsAppImg.src} width={26} height={26} alt='wsImage' /></button>
      :
      <button className={`${styles.button} ${small && styles.button_small}`}>Написать в Telegram <Image src={tgImg.src} width={26} height={26} alt='tgImage' /></button>
  )

}
