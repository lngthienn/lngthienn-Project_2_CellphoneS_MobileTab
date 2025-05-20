import { useState } from 'react';
import styles from '../../../Style/Pages/Mobile/SixthMain.module.scss';
import SeventhMain from './SeventhMain';

function SixthMain() {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (index) => {
        setActiveButton((prev) => (prev === index ? null : index));
        handleButtonAction(index);
    };

    const handleButtonAction = (index) => {
        switch (index) {
            case 0:
                console.log('Khuyến mãi HOT');
                break;
            case 1:
                console.log('Khuyến mãi HOT');
                break;
            case 2:
                console.log('Khuyến mãi HOT');
                break;
            case 3:
                console.log('Xem nhiều nhất');
                break;
            default:
                console.log('Không có chức năng cụ thể');
        }
    };

    return (
        <section className={styles.sixthmain}>
            <h1>Sắp xếp theo</h1>
            <div>
                {[
                    { icon: 'ti-stats-down', label: 'Giá Cao - Thấp' },
                    { icon: 'ti-stats-up', label: 'Giá Thấp - Cao' },
                    { icon: 'ti-gift', label: 'Khuyến Mãi Hot' },
                    { icon: 'ti-eye', label: 'Xem nhiều' },
                ].map((item, index) => (
                    <button
                        key={index}
                        className={`${styles.button} ${activeButton === index ? styles.active : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <i className={item.icon}></i>
                        {item.label}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default SixthMain;
