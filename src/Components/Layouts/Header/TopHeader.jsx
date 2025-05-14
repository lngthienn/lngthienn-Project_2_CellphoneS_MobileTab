import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../../../Style/Layouts/Header/TopHeader.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

function TopHeader() {
    const [isAtStart, setIsAtStart] = useState(true); // Trạng thái cho nút Prev
    const [isAtEnd, setIsAtEnd] = useState(false); // Trạng thái cho nút Next

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
                    loop={false} // Không lặp lại
                    onSlideChange={(swiper) => {
                        // Cập nhật trạng thái khi slide thay đổi
                        setIsAtStart(swiper.isBeginning); // Kiểm tra nếu đang ở slide đầu tiên
                        setIsAtEnd(swiper.isEnd); // Kiểm tra nếu đang ở slide cuối cùng
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
