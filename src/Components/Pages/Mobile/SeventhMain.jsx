import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Mobile/ProductContext';
import styles from '../../../Style/Pages/Mobile/SeventhMain.module.scss';

function SeventhMain() {
    const products = useContext(ProductContext);
    const navigate = useNavigate();

    if (!products.length) return <p>Đang tải sản phẩm...</p>;

    return (
        <section className={styles.seventhmain}>
            {products.map((item, id) => (
                <section
                    key={id}
                    className={styles.items}
                    onClick={() =>
                        navigate(`/mobile/${item.name.replace(/\s+/g, '-').replace(/[()/]/g, '').toLowerCase()}`)
                    }
                >
                    <div>{`Giảm ${item.storage_options[0]?.salePrice1}`}</div>
                    <div>Trả góp 0%</div>
                    <div>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <h3>{`${item.name} ${item.price[0]?.storage1} | ${item.memory}`}</h3>
                    <div>
                        <p>{item.displaysize}</p>
                        <p>{item.memory}</p>
                        <p>{item.storage_options[0]?.storage1}</p>
                    </div>
                    <div>
                        <p>
                            {item.storage_options[0]?.salePrice1
                                ? `${new Intl.NumberFormat('vi-VN').format(
                                      Number(item.price[0]?.price1.replace(/\./g, '')) *
                                          (1 - parseFloat(item.storage_options[0]?.salePrice1.replace('%', '')) / 100),
                                  )}đ`
                                : 'Liên hệ'}
                        </p>
                        <del>
                            {`${new Intl.NumberFormat('vi-VN').format(
                                Number(item.price[0]?.price1.replace(/\./g, '')),
                            )}đ`}
                        </del>
                    </div>
                    <div>
                        <p>Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng</p>
                    </div>
                    <div>
                        <div>
                            <i className="ti-star"></i>
                            <i className="ti-star"></i>
                            <i className="ti-star"></i>
                            <i className="ti-star"></i>
                            <i className="ti-star"></i>
                        </div>
                        <div>
                            <p>Yêu thích</p>
                            <i className="ti-heart"></i>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    );
}

export default SeventhMain;
