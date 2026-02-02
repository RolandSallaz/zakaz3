'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import review1Img from '../../../../public/IMAGE 2024-11-25 15_51_03 1.png';
import review2Img from '../../../../public/IMAGE 2024-11-25 15_51_04 1.png';
import review3Img from '../../../../public/IMAGE 2024-11-25 15_51_06 1.png';
import reviewImg from '../../../../public/review.jpg';

import styles from './SwiperImages.module.scss';

export default function SwiperImages() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className={styles.swiper}
    >
      {[review1Img, review2Img, review3Img, reviewImg].map((img, i) => (
        <SwiperSlide key={i} className={styles.slide}>
          <div className={styles.imageWrapper}>
            <Image
              src={img}
              alt="Отзыв клиента об оформлении зарубежной банковской карты"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'contain' }}
              priority={i === 0} // первый слайд — LCP
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
