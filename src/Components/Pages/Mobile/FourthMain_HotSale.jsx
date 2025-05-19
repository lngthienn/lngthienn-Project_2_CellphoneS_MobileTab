import styles from '../../../Style/Pages/Mobile/FourthMain_HotSale.module.scss';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

function Hotsale() {
    const [hotsale, setHotSale] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/apple.json')
            .then((response) => response.json())
            .then((data) => {
                setHotSale(data);
            })
            .catch((error) => console.error('Lỗi trong quá trình thực hiện', error));
    }, []);

    return (
        <section className={styles.hotsale}>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={5}
                // autoplay={{ delay: 1000, disableOnInteraction: false }}
                spaceBetween={10}
                loop={true}
                navigation={true}
            >
                {hotsale &&
                    hotsale.map((item, id) => (
                        <SwiperSlide key={id} className={styles.swiperslide}>
                            <div>
                                <img src={item.img} alt="" />
                                <h3>{`${item.name} ${item.price[0].storage1} | ${item.memory}`}</h3>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        {`${new Intl.NumberFormat('vi-VN').format(
                                            parseFloat(
                                                item.price[0].price1.replace(/\./g, '') -
                                                    item.price[0].price1.replace(/\./g, '') * 0.05,
                                            ),
                                        )}đ`}
                                    </p>
                                    <del>
                                        {`${new Intl.NumberFormat('vi-VN').format(
                                            Number(item.price[0].price1.replace(/\./g, '')),
                                        )}đ`}
                                    </del>
                                </div>
                                <div>
                                    <p>Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}

export default Hotsale;
