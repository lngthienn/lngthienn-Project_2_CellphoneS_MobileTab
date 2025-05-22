import { useContext } from 'react';
import { ProductContext } from '../Mobile/ProductContext';
import { useParams } from 'react-router-dom';
import styles from '../../../Style/Pages/ItemDetail/ItemDetail.module.scss';

function ItemDetail() {
    const products = useContext(ProductContext);
    const { name } = useParams();

    const item = products.find(
        (i) => i.name.toLowerCase().replace(/\s+/g, '-').replace(/[()/]/g, '') === name.toLowerCase(),
    );

    return (
        <section className={styles.itemdetail}>
            <section>
                <div>
                    <h1>{`${item.name} ${item.storage_options[0].storage1}`}</h1>
                    <div>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <p>{Math.round(Math.random() * 1000)} đánh giá</p>
                    </div>
                    <button>+ So sánh</button>
                </div>
                <hr />
                <div>
                    <div>
                        <div>
                            <div>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div>
                                <p>TÍNH NĂNG NỔI BẬT</p>
                                <ul>
                                    <li>Màn hình: {item.displaysize}</li>
                                    <li>Tần số quét màn hình: {item.refreshrate}</li>
                                    <li>RAM {item.memory}</li>
                                    <li>
                                        Bộ nhớ trong:{' '}
                                        {`${item.storage_options[0].storage1 || ''} 
                                        ${
                                            item.storage_options[1]?.storage2
                                                ? `| ${item.storage_options[1].storage2}`
                                                : ''
                                        } 
                                        ${
                                            item.storage_options[2]?.storage3
                                                ? `| ${item.storage_options[2].storage3}`
                                                : ''
                                        } 
                                        ${
                                            item.storage_options[3]?.storage4
                                                ? `| ${item.storage_options[3].storage4}`
                                                : ''
                                        }`}
                                    </li>
                                    <li>Chip xử lý: {item.chipset}</li>
                                    <li>GPU: {item.gpu}</li>
                                    <li>Thời lượng pin: {item.battery}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <img src={item.img} alt={item.name} />
                <p>Giá: {item.price[0]?.price1}đ</p>
                <p>Bộ nhớ: {item.memory}</p>
                <p>Kích thước màn hình: {item.displaysize}</p>
            </section>
        </section>
    );
}

export default ItemDetail;
