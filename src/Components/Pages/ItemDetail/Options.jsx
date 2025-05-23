import { useState } from 'react';
import styles from '../../../Style/Pages/ItemDetail/Options.module.scss';

function Options({ data }) {
    const [selectedStorage, setSelectedStorage] = useState(1);

    return (
        <section className={styles.options}>
            <div>
                {data.storage_options.map((storage, index) => (
                    <a
                        key={index}
                        onClick={() => setSelectedStorage(index + 1)}
                        className={selectedStorage === index + 1 ? styles.active : ''}
                    >
                        <strong>{storage[`storage${index + 1}`]}</strong>
                        <span>{storage[`colors${index + 1}`][0].price1}</span>
                    </a>
                ))}
            </div>
            <p>Chọn màu để xem giá và chi nhánh có hàng</p>
            <div>
                {data.storage_options.map(
                    (storage, index) =>
                        selectedStorage === index + 1 && (
                            <div key={index}>
                                {storage[`colors${index + 1}`].map((color, index) => (
                                    <a key={index}>
                                        <strong>{color[`color${index + 1}`]}</strong>
                                        <span>
                                            {color[`price${index + 1}`] ? color[`price${index + 1}`] : 'Hết hàng'}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        ),
                )}
            </div>
            <div>
                <div>
                    <i className="ti-server"></i>
                    <div>
                        <p>39000000</p>
                        <span>Khi thu cũ lên đời</span>
                    </div>
                </div>
                <div>
                    <p>1</p>
                    <del>2</del>
                </div>
            </div>
        </section>
    );
}

export default Options;
