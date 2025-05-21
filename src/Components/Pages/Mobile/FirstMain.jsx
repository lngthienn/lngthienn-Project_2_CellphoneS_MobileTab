import styles from '../../../Style/Pages/Mobile/FirstMain.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

function FirstMain() {
    const [imagesleft, setImagesLeft] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/FirstMain.json')
            .then((response) => response.json())
            .then((data) => {
                setImagesLeft(data);
            })
            .catch((error) => console.error('Lỗi trong quá trình thực hiện', error));
    }, []);

    return (
        imagesleft && (
            <section className={styles.firstmain}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{ enabled: true }}
                    className={styles.swiper}
                >
                    {imagesleft.map((img, index) => (
                        <SwiperSlide key={index}>
                            <a href="#">
                                <img src={img.src} alt={`Image ${index + 1}`} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{ enabled: true }}
                    className={styles.swiper}
                >
                    {imagesleft
                        .slice()
                        .reverse()
                        .map((img, index) => (
                            <SwiperSlide key={index}>
                                <a href="#">
                                    <img src={img.src} alt={`Image ${index + 1}`} />
                                </a>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </section>
        )
    );
}

export default FirstMain;
