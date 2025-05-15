import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../../../Style/Layouts/Header/TopHeader.module.scss';

function TopHeader() {
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className={styles.topHeader}>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={0}
                loop={false}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    452: { slidesPerView: 1 },
                    750: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                }}
                onSlideChange={(swiper) => {
                    setIsAtStart(swiper.isBeginning);
                    setIsAtEnd(swiper.isEnd);
                }}
            >
                <SwiperSlide>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Chinh%20hang.svg"
                            alt="Banner 1"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Smember.svg"
                            alt="Banner 2"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Giao%20hang.svg"
                            alt="Banner 3"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Thu%20cu.svg"
                            alt="Banner 4"
                        />
                    </a>
                </SwiperSlide>
                <button
                    ref={prevRef}
                    className={`${styles.swiperButtonPrev} swiper-button-prev ${
                        isAtStart ? styles.hidden : ''
                    }`}
                    onClick={() => swiperRef.current?.slidePrev()}
                ></button>
                <button
                    ref={nextRef}
                    className={`${styles.swiperButtonNext} swiper-button-next ${
                        isAtEnd ? styles.hidden : ''
                    }`}
                    onClick={() => swiperRef.current?.slideNext()}
                ></button>
            </Swiper>
        </section>
    );
}

export default TopHeader;
