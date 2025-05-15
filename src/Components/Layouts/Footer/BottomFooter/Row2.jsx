import styles from '../../../../Style/Layouts/Footer/BottomFooter/Row2.module.scss';

function row2() {
    return (
        <section className={styles.row2}>
            <>
                <div>
                    <p>
                        Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC -
                        GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ
                        văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1,
                        Thành phố Hồ Chí Minh, Việt Nam. Điện thoại:
                        028.7108.9666.
                    </p>
                </div>
                <div>
                    <a href="">
                        <img
                            src="https://cdn2.cellphones.com.vn/80x,webp/media/logo/logoSaleNoti.png"
                            alt=""
                        />
                    </a>
                    <a href="" style={{ scale: '0.7' }}>
                        <img
                            src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
                            alt=""
                        />
                    </a>
                </div>
            </>
        </section>
    );
}

export default row2;
