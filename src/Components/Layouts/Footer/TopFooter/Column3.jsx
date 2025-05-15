import styles from '../../../../Style/Layouts/Footer/TopFooter/Column3.module.scss';

function Column3() {
    return (
        <section className={styles.column3}>
            <div>
                <p> Dịch vụ và thông tin khác </p>
            </div>
            <div>
                <ul>
                    <li> Khách hàng doanh nghiệp (B2B) </li>
                    <li> Ưu đãi thanh toán </li>
                    <li> Quy chế hoạt động </li>
                    <li> Chính sách bảo mật thông tin cá nhân </li>
                    <li> Chính sách bảo hành </li>
                    <li> Liên hệ hợp tác kinh doanh </li>
                    <li> Tuyển dụng </li>
                    <li> Dịch vụ bảo hành mở rộng </li>
                    <li> Smember: Tích điểm & sử dụng ưu đãi </li>
                </ul>
            </div>
            <div>
                <div>
                    <img
                        src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg"
                        style={{ width: '100px' }}
                        alt="QR"
                    />
                </div>
                <div>
                    <a>
                        <img
                            src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png"
                            style={{ width: '150px' }}
                            alt="Link Android"
                        />
                    </a>
                    <a>
                        <img
                            src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png"
                            style={{ width: '150px' }}
                            alt="Link iOS"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Column3;
