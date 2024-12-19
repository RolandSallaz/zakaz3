'use client'
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

  function handleClick() {
    let url;
    if (type == 'ws') {
      url = `https://wa.me/89818253600`;
    }
    else {
      url = 'https://t.me/DanilaCard'
    }
    window.open(url, '_blank');
  }

  return (
    type === 'ws' ?
      <button onClick={handleClick} className={`${styles.button} ${small && styles.button_small}`}>Написать в WhatsApp <Image src={whatsAppImg.src} width={26} height={26} alt='wsImage' /></button>
      :
      <button onClick={handleClick}  className={`${styles.button} ${small && styles.button_small}`}>Написать в Telegram <Image src={tgImg.src} width={26} height={26} alt='tgImage' /></button>
  )

}
