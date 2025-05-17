import { useState } from 'react';
import styles from '../../../../Style/Layouts/Header/BottomHeader/Category.module.scss';
import Overlay from '../../../../Style/GlobalStyles/Overlay';

function Category() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOverlay, setOverlay] = useState(false);

    const handleOpen = () => {
        setIsVisible((prev) => !prev);
        setOverlay((prev) => !prev);
    };

    return (
        <>
            <section className={styles.category} onClick={handleOpen}>
                <i className="ti-menu"></i>
                <p>Danh mục</p>
            </section>
            <Overlay isOverlay={isOverlay} />
            <section className={isVisible ? styles.visible : styles.hidden}>
                <div>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>Điện thoại, Tablet</p>
                    </div>
                    <div>
                        <i className="ti-tablet"></i>
                        <p>Laptop</p>
                    </div>
                    <div>
                        <i className="ti-headphone"></i>
                        <p>Âm thanh, Mic thu âm</p>
                    </div>
                    <div>
                        <i className="ti-camera"></i>
                        <p>Đồng hồ, Camera</p>
                    </div>
                    <div>
                        <i className="ti-home"></i>
                        <p>Đồ gia dụng</p>
                    </div>
                    <div>
                        <i className="ti-plug"></i>
                        <p>Phụ kiện</p>
                    </div>
                    <div>
                        <i className="ti-printer"></i>
                        <p>PC, Màn hình, Máy in</p>
                    </div>
                    <div>
                        <i className="ti-desktop"></i>
                        <p>Tivi</p>
                    </div>
                    <div>
                        <i className="ti-reload"></i>
                        <p>Thu cũ đổi mới</p>
                    </div>
                    <div>
                        <i className="ti-shopping-cart"></i>
                        <p>Hàng cũ</p>
                    </div>
                    <div>
                        <i className="ti-gift"></i>
                        <p>Khuyến mãi</p>
                    </div>
                    <div>
                        <i className="ti-light-bulb"></i>
                        <p>Tin công nghệ</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;
