import styles from '../../../Style/Pages/ItemDetail/ExtendedWarranty.module.scss';

function ExtendedWarranty() {
    return (
        <section className={styles.extendedwarranty}>
            <div>
                <i className="ti-shield"></i>
                <div>
                    <p>
                        Bảo vệ sản phẩm toàn diện với dịch vụ bảo hành mở rộng {''}
                        <u>
                            <i>Xem chi tiết</i>
                        </u>
                    </p>
                    <p>
                        (Khách hàng đăng ký thông tin để được hỗ trợ tư vấn và thanh toán tại cửa hàng nhanh nhất, số
                        tiền phải thanh toán chưa bao gồm giá trị của gói bảo hành mở rộng)
                    </p>
                </div>
            </div>
            <ul>
                <li>
                    <label>
                        <input type="radio" />
                        <p>1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng</p>
                    </label>
                    <div>
                        <p>1.300.000đ</p>
                        <i>Xem chi tiết</i>
                    </div>
                </li>
                <li>
                    <label>
                        <input type="radio" />
                        <p>
                            S24+ 12 tháng: Đổi sản phẩm tương đương hoặc miễn phí chi phí sửa chữa nếu có lỗi của NSX
                            khi hết hạn bảo hành trong 12 tháng
                        </p>
                    </label>
                    <div>
                        <p>1.600.000đ</p>
                        <i>Xem chi tiết</i>
                    </div>
                </li>
                <li>
                    <label>
                        <input type="radio" />
                        <p>1 đổi 1 VIP 12 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 12 tháng</p>
                    </label>
                    <div>
                        <p>1.800.000đ</p>
                        <i>Xem chi tiết</i>
                    </div>
                </li>
                <li>
                    <label>
                        <input type="radio" />
                        <p>
                            Rơi vỡ - Rớt nước: Hỗ trợ 90% chi phí sửa chữa, đổi mới sản phẩm nếu hư hỏng nặng trong 12
                            tháng
                        </p>
                    </label>
                    <div>
                        <p>2.400.000đ</p>
                        <i>Xem chi tiết</i>
                    </div>
                </li>
                <li>
                    <label>
                        <input type="radio" />
                        <p>Dịch vụ bảo hành Apple Care+ cho iPhone</p>
                    </label>
                    <div>
                        <p>5.034.000đ</p>
                        <i>Xem chi tiết</i>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default ExtendedWarranty;
