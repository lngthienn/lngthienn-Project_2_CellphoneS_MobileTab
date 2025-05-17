import styles from '../../../../Style/Layouts/Header/BottomHeader/CheckPrice.module.scss';
import Overlay from '../../../../Style/GlobalStyles/Overlay';
import { useState } from 'react';

function Checkprice() {
    const provinces = [
        'Hồ Chí Minh',
        'Hà Nội',
        'An Giang',
        'Bà Rịa - Vũng Tàu',
        'Bắc Giang',
        'Bắc Ninh',
        'Bến Tre',
        'Bình Dương',
        'Bình Định',
        'Bình Phước',
        'Bình Thuận',
        'Cà Mau',
        'Cần Thơ',
        'Đà Nẵng',
        'Đắk Lắk',
        'Đồng Nai',
        'Đồng Tháp',
        'Gia Lai',
        'Hà Tĩnh',
        'Hải Dương',
        'Hải Phòng',
        'Khánh Hòa',
        'Kiên Giang',
        'Lạng Sơn',
        'Lâm Đồng',
        'Long An',
        'Nam Định',
        'Nghệ An',
        'Ninh Thuận',
        'Phú Thọ',
        'Quảng Bình',
        'Quảng Ngãi',
        'Quảng Ninh',
        'Sóc Trăng',
        'Tây Ninh',
        'Thái Bình',
        'Thái Nguyên',
        'Thanh Hóa',
        'Thừa Thiên - Huế',
        'Tiền Giang',
        'Trà Vinh',
        'Vĩnh Long',
        'Vĩnh Phúc',
    ];

    const [isVisible, setIsVisible] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState(null);

    const handleOpen = () => {
        setIsVisible((prev) => !prev);
        setIsOverlay((prev) => !prev);
    };

    const handleClick = (index) => {
        setSelectedProvince(index);
    };

    const handleClose = () => {
        setIsVisible((prev) => !prev);
        setIsOverlay((prev) => !prev);
    };

    return (
        <>
            <section className={styles.checkprice} onClick={handleOpen}>
                <i className="ti-location-pin" style={{ fontSize: '20px' }}></i>
                <div>
                    <p>
                        Xem giá tại
                        <i className="ti-angle-down" style={{ fontSize: '10px' }}></i>
                    </p>
                    <p> Hồ Chí Minh </p>
                </div>
            </section>
            <Overlay isOverlay={isOverlay} />
            <section className={isVisible ? styles.visible : styles.hidden}>
                <header>
                    <input type="text" placeholder="Nhập tên tỉnh thành" />
                    <i className="ti-search" style={{ color: '#707070' }}></i>
                    <div onClick={handleClose}>
                        <p>Đóng</p>
                        <i className="ti-close" style={{ fontSize: '8px', cursor: 'pointer' }}></i>
                    </div>
                </header>
                <section>
                    <div>
                        <p>Vui lòng chọn tỉnh, thành phố để biết chính xác giá, khuyến mãi và tồn kho</p>
                    </div>
                </section>
                <section>
                    {provinces.map((province, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={selectedProvince === index ? styles.selected : ''}
                        >
                            <a href="#">{province}</a>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}

export default Checkprice;
