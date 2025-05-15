import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../Style/Layouts/Header/TopHeader.css';

function TopHeader() {
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    return (
        <section id="topheader">
            <div id="topheader__container">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={0}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    loop={false}
                    onSlideChange={(swiper) => {
                        setIsAtStart(swiper.isBeginning);
                        setIsAtEnd(swiper.isEnd);
                    }}
                >
                    <SwiperSlide>
                        <Link to="#">
                            <img
                                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Chinh%20hang.svg"
                                alt="Banner 1"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#">
                            <img
                                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Smember.svg"
                                alt="Banner 2"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#">
                            <img
                                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Giao%20hang.svg"
                                alt="Banner 3"
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#">
                            <img
                                src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Top%20banner_Thu%20cu.svg"
                                alt="Banner 4"
                            />
                        </Link>
                    </SwiperSlide>
                    <button
                        className={`swiper-button-prev ${
                            isAtStart ? 'hidden' : ''
                        }`}
                    ></button>

                    <button
                        className={`swiper-button-next ${
                            isAtEnd ? 'hidden' : ''
                        }`}
                    ></button>
                </Swiper>
            </div>
        </section>
    );
}

export default TopHeader;
