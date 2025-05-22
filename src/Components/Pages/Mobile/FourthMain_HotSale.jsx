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
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={10}
                loop={true}
                navigation={true}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 3,
                    },
                    472: {
                        slidesPerView: 2,
                        spaceBetween: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
            >
                {hotsale &&
                    hotsale.map((item, id) => (
                        <SwiperSlide key={id} className={styles.swiperslide}>
                            <div>{`Giảm ${item.storage_options[0].salePrice1}`}</div>
                            <div>Trả góp 0%</div>
                            <div>
                                <img src={item.img} alt="" />
                            </div>
                            <h3>{`${item.name} ${item.price[0].storage1} | ${item.memory}`}</h3>
                            <div>
                                <p>{item.displaysize}</p>
                                <p>{item.memory}</p>
                                <p>{item.storage_options[0].storage1}</p>
                            </div>
                            <div>
                                <p>
                                    {hotsale && item.storage_options[0].salePrice1
                                        ? `${new Intl.NumberFormat('vi-VN').format(
                                              Number(item.price[0].price1.replace(/\./g, '')) *
                                                  (1 -
                                                      parseFloat(item.storage_options[0].salePrice1.replace('%', '')) /
                                                          100),
                                          )}đ`
                                        : 'Liên hệ'}
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
                            <div>
                                <div>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                    <i className="ti-star"></i>
                                </div>
                                <div>
                                    <p>Yêu thích</p>
                                    <i className="ti-heart"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}

export default Hotsale;
