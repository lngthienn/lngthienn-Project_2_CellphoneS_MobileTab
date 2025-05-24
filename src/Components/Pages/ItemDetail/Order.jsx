import styles from '../../../Style/Pages/ItemDetail/Order.module.scss';

function Order() {
    return (
        <section className={styles.order}>
            <div>
                <div>
                    <strong>MUA NGAY</strong>
                    <span>(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</span>
                </div>
                <div>
                    <i className="ti-shopping-cart"></i>
                    <p>Thêm vào giỏ</p>
                </div>
            </div>
            <div>
                <div>
                    <strong>TRẢ GÓP 0%</strong>
                    <span>Trả trước chỉ từ 0đ</span>
                </div>
                <div>
                    <strong>TRẢ GÓP 0% QUA THẺ</strong>
                    <span>(Không phí chuyển đổi 3 - 6 tháng)</span>
                </div>
            </div>
            <div>
                <strong>Thu cũ lên đời</strong>
                <span>Chỉ từ 27.490.000đ </span>
            </div>
        </section>
    );
}

export default Order;
