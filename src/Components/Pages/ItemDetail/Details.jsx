import styles from '../../../Style/Pages/ItemDetail/Details.module.scss';

function Details({ data }) {
    return data.brand === 'Apple' ? (
        <section className={styles.details}>
            <div>
                <p>Thông tin sản phẩm</p>
                <div>
                    <i className="ti-mobile"></i>
                    <p>
                        Máy mới 100% , chính hãng Apple Việt Nam. CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính
                        hãng VN/A của Apple Việt Nam
                    </p>
                </div>
                <div>
                    <i className="ti-package"></i>
                    <p>iPhone sử dụng iOS 18, Cáp Sạc USB‑C (1m), Tài liệu</p>
                </div>
                <div>
                    <i className="ti-pie-chart"></i>
                    <p>
                        1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo
                        hành chính hãng Apple: CareS.vn <span style={{ color: '#FF0000' }}>(xem chi tiết)</span>
                    </p>
                </div>
                <div>
                    <i className="ti-receipt"></i>
                    <p>
                        Xem thông tin kích hoạt bảo hành các sản phẩm Apple{' '}
                        <span style={{ color: '#D70018' }}>(tại đây)</span>
                    </p>
                </div>
                <div>
                    <i className="ti-wallet"></i>
                    <p>Giá sản phẩm đã bao gồm VAT</p>
                </div>
            </div>
        </section>
    ) : data.brand === 'Xiaomi' ? (
        <section className={styles.details}>
            <div>
                <p>Thông tin sản phẩm</p>
                <div>
                    <i className="ti-mobile"></i>
                    <p>Mới, đầy đủ phụ kiện từ nhà sản xuất</p>
                </div>
                <div>
                    <i className="ti-package"></i>
                    <p>
                        Xiaomi 15 Ultra, củ sạc nhanh USB-C, cáp sạc, que chọc SIM, sách hướng dẫn sử dụng và một chiếc
                        ốp lưng dẻo
                    </p>
                </div>
                <div>
                    <i className="ti-pie-chart"></i>
                    <p>
                        Bảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng
                        từ nhà sản xuất<span style={{ color: '#FF0000' }}>(xem chi tiết)</span>
                    </p>
                </div>
                <div>
                    <i className="ti-wallet"></i>
                    <p>Giá sản phẩm đã bao gồm VAT</p>
                </div>
            </div>
        </section>
    ) : data.brand === 'Samsung' ? (
        <section className={styles.details}>
            <div>
                <p>Thông tin sản phẩm</p>
                <div>
                    <i className="ti-mobile"></i>
                    <p>Mới, đầy đủ phụ kiện từ nhà sản xuất</p>
                </div>
                <div>
                    <i className="ti-package"></i>
                    <p>{`${data.name}, hộp đựng, khe sim,...`}</p>
                </div>
                <div>
                    <i className="ti-pie-chart"></i>
                    <p>
                        Bảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng
                        từ nhà sản xuất. <span style={{ color: '#FF0000' }}>(xem chi tiết)</span>
                    </p>
                </div>
                <div>
                    <i className="ti-wallet"></i>
                    <p>Giá sản phẩm đã bao gồm VAT</p>
                </div>
            </div>
        </section>
    ) : (
        ''
    );
}

export default Details;
