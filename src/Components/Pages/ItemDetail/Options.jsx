import styles from '../../../Style/Pages/ItemDetail/Options.module.scss';

function Options({ data }) {
    return (
        <section className={styles.options}>
            <div>
                {data.storage_options.map((storage, index) => (
                    <div key={index}>
                        <strong>{storage[`storage${index + 1}`]}</strong>
                        <span>{storage[`colors${index + 1}`][0].price1}</span>
                    </div>
                ))}
            </div>
            <p>Chọn màu để xem giá và chi nhánh có hàng</p>
            <div>
                {data.storage_options.map((storage, index) => (
                    <div key={index}>
                        <strong>{storage[`storage${index + 1}`]}</strong>
                        <span>{storage[`colors${index + 1}`][0].price1}</span>
                    </div>
                ))}
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
}

export default Options;
