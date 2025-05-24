import styles from '../../../Style/Pages/ItemDetail/Discount.module.scss';

function Discount({ data }) {
    return (
        <section className={styles.discount}>
            <div>
                <p>
                    Tiết kiệm thêm đến <span>305.000đ</span> cho Smember
                </p>
                <a href="">
                    <u>Kiểm tra giá cuối cùng của bạn</u>
                    {`>`}
                </a>
            </div>
            <div>
                <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:120/q:90/plain/https://dashboard.cellphones.com.vn/storage/VOUCHER-300-MOI-7-3.png"
                    alt=""
                />
            </div>
            <div>
                <div>
                    <i className="ti-gift"></i>
                    <p>Khuyến mãi</p>
                </div>
                <div>
                    <div>
                        <span>1</span>
                        <p>trả góp 0% lãi suất, tối đa 12 tháng, trả trước từ 10% qua CTTC hoặc 0đ qua thẻ tín dụng</p>
                    </div>
                    <div>
                        <span>2</span>
                        <p>Đặc quyền trợ giá lên đến 4 triệu khi thu cũ lên đời {data.brand}</p>
                    </div>
                    <div>
                        <span>3</span>
                        <p>
                            Tặng Sim / Esim Viettel 5G có 8GB data/ngày kèm TV360 4K & 30GB Mybox - miễn phí 1 tháng sử
                            dụng (Chỉ áp dụng tại cửa hàng)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discount;
