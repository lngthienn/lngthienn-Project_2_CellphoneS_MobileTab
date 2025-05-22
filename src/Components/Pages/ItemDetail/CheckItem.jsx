import styles from '../../../Style/Pages/ItemDetail/CheckItem.module.scss';

function CheckItem() {
    return (
        <section className={styles.checkitem}>
            <div>
                <div>Hồ Chí Minh</div>
                <div>
                    <p>Quận/Huyện</p>
                    <i className="ti-angle-down"></i>
                </div>
            </div>
            <p>
                Có <span>{Math.round(Math.random() * 100)}</span> cửa hàng có sản phẩm
            </p>
            <div>
                <div style={{ backgroundColor: '#f2f2f2' }}>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>02871088248</p>
                    </div>
                    -
                    <div>
                        <i className="ti-location-pin"></i>
                        <u>248 Nguyễn Thị Thập, P. Tân Quy, Q. 7</u>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>02871088248</p>
                    </div>
                    -
                    <div>
                        <i className="ti-location-pin"></i>
                        <u>248 Nguyễn Thị Thập, P. Tân Quy, Q. 7</u>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f2f2f2' }}>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>02871088248</p>
                    </div>
                    -
                    <div>
                        <i className="ti-location-pin"></i>
                        <u>248 Nguyễn Thị Thập, P. Tân Quy, Q. 7</u>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>02871088248</p>
                    </div>
                    -
                    <div>
                        <i className="ti-location-pin"></i>
                        <u>248 Nguyễn Thị Thập, P. Tân Quy, Q. 7</u>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f2f2f2' }}>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>02871088248</p>
                    </div>
                    -
                    <div>
                        <i className="ti-location-pin"></i>
                        <u>248 Nguyễn Thị Thập, P. Tân Quy, Q. 7</u>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="ti-mobile"></i>
                        <p>02871088248</p>
                    </div>
                    -
                    <div>
                        <i className="ti-location-pin"></i>
                        <u>248 Nguyễn Thị Thập, P. Tân Quy, Q. 7</u>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckItem;
