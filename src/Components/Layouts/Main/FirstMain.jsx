import styles from '../../../Style/Layouts/Main/FirstMain.module.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function FirstMain() {
    const imagesfirstmain = [
        {
            src: 'https://dashboard.cellphones.com.vn/storage/dien-thoai-xiaomi-15-series-cate.png',
        },
        {
            src: 'https://dashboard.cellphones.com.vn/storage/iphone-16-pro-max-cate-thu-cu-moi.jpg',
        },
        {
            src: 'https://dashboard.cellphones.com.vn/storage/xiaomi-15-ultra-1tb-cate.jpg',
        },
    ];

    return (
        <section className={styles.firstmain}>
            <div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{ enabled: true }}
                    className={styles.imageslider}
                >
                    {imagesfirstmain.map((img, index) => (
                        <SwiperSlide key={index}>
                            <a href="#">
                                <img src={img.src} alt={`Image ${index + 1}`} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default FirstMain;
