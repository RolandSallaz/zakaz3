'use client'
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import review1Img from '../../../../public/IMAGE 2024-11-25 15_51_03 1.png';
import review2Img from '../../../../public/IMAGE 2024-11-25 15_51_04 1.png';
import review3Img from '../../../../public/IMAGE 2024-11-25 15_51_06 1.png';
import review from '../../../../public/review.jpg';
import styles from './SwiperImages.module.scss';

export default function SwiperImages() {
    return (
        <Swiper slidesPerView={1} spaceBetween={10} className={styles.swiper} modules={[Autoplay, Pagination]} pagination={true}>
            <SwiperSlide >
                <img src={review1Img.src} alt='скриншот отзыва' />
            </SwiperSlide>
            <SwiperSlide >
                <img src={review2Img.src} alt='скриншот отзыва' />
            </SwiperSlide>
            <SwiperSlide >
                <img src={review3Img.src} alt='скриншот отзыва' />
            </SwiperSlide>
            <SwiperSlide >
                <img src={review.src} alt='скриншот отзыва' />
            </SwiperSlide>
        </Swiper>
    )
}
