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
                                {storage[`colors${index + 1}`].map((color, colorIndex) => (
                                    <a key={colorIndex}>
                                        <strong>{color[`color${colorIndex + 1}`]}</strong>
                                        <span>
                                            {color[`price${colorIndex + 1}`]
                                                ? color[`price${colorIndex + 1}`]
                                                : 'Hết hàng'}
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
                        {data.storage_options.map(
                            (storage, index) =>
                                selectedStorage === index + 1 && (
                                    <div key={index}>
                                        {storage[`colors${index + 1}`].map((color, colorIndex) => (
                                            <div key={colorIndex}>
                                                <p>
                                                    {color.price1 &&
                                                        ` ${(
                                                            Number(color.price1.replace(/\./g, '')) - 3000000
                                                        ).toLocaleString('vi-VN')} đ`}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ),
                        )}
                        <span>Khi thu cũ lên đời</span>
                    </div>
                </div>
                <div className={styles.active}>
                    {data.storage_options.map(
                        (storage, index) =>
                            selectedStorage === index + 1 && (
                                <div key={index}>
                                    {storage[`colors${index + 1}`].map((color, colorIndex) => (
                                        <div key={colorIndex}>
                                            <p>
                                                {color.price1 &&
                                                    `${Number(color.price1.replace(/\./g, '')).toLocaleString(
                                                        'vi-VN',
                                                    )} đ`}
                                            </p>
                                        </div>
                                    ))}
                                    {data.price.map(
                                        (price, priceIndex) =>
                                            selectedStorage === priceIndex + 1 && (
                                                <div key={priceIndex}>
                                                    <del>
                                                        {data.price &&
                                                            `${Number(
                                                                price[`price${priceIndex + 1}`].replace(/\./g, ''),
                                                            ).toLocaleString('vi-VN')} đ`}
                                                    </del>
                                                </div>
                                            ),
                                    )}
                                </div>
                            ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default Options;
