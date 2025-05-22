import { useContext } from 'react';
import { ProductContext } from '../Mobile/ProductContext';
import { useParams } from 'react-router-dom';
import styles from '../../../Style/Pages/ItemDetail/ItemDetail.module.scss';
import Compare from './Compare';
import Image from './Image';
import Details from './Details';
import CheckItem from './CheckItem';
import Options from './Options';
import Discount from './Discount';
import Order from './Order';
import ExtraDiscount from './ExtraDiscount';
import ExtendedWarranty from './ExtendedWarranty';

function ItemDetail() {
    const products = useContext(ProductContext);
    const { name } = useParams();

    const item = products.find(
        (i) => i.name.toLowerCase().replace(/\s+/g, '-').replace(/[()/]/g, '') === name.toLowerCase(),
    );

    return (
        <section className={styles.itemdetail}>
            <section>
                <Compare data={item} />
                <hr />
                <section>
                    <div>
                        <Image data={item} />
                        <div>
                            <Details data={item} />
                            <CheckItem />
                        </div>
                    </div>
                    <div>
                        <Options data={item} />
                        <Discount />
                        <Order />
                        <ExtraDiscount />
                        <ExtendedWarranty />
                    </div>
                </section>
                <hr />
            </section>
        </section>
    );
}

export default ItemDetail;
