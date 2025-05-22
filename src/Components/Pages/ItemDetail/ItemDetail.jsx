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
        <div className={styles.itemdetail}>
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name} />
            <p>Giá: {item.price[0]?.price1}đ</p>
            <p>Bộ nhớ: {item.memory}</p>
            <p>Kích thước màn hình: {item.displaysize}</p>
        </div>
    );
}

export default ItemDetail;
