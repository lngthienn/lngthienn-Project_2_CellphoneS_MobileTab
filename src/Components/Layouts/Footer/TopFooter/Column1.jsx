import styles from '../../../../Style/Layouts/Footer/TopFooter/Column1.module.scss';

function Column1() {
    return (
        <section className={styles.column1}>
            <div>
                <p> Tổng đài hỗ trợ miễn phí </p>
                <ul>
                    <li>
                        Mua hàng - bảo hành <strong>1800.2097</strong> (7h30 -
                        22h00)
                    </li>
                    <li>
                        Khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)
                    </li>
                </ul>
            </div>
            <div>
                <p> Phương thức thanh toán </p>
                <div>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
                            alt=""
                        />
                    </a>
                </div>
                <div>
                    <p>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</p>
                    <span>(*) Nhận ngay voucher 10%</span>
                    <p>
                        *Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng
                        mới
                    </p>
                    <input type="email" placeholder="Email*" />
                    <input type="tel" placeholder="Số điện thoại" />
                    <span>
                        <input type="checkbox" checked="disabled" />
                        Tôi đồng ý với điều khoản của CellphoneS
                    </span>
                    <button>ĐĂNG KÝ NGAY</button>
                </div>
            </div>
        </section>
    );
}

export default Column1;
