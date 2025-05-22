import styles from '../../../Style/Pages/ItemDetail/Image.module.scss';

function Image({ data }) {
    return (
        <section className={styles.image}>
            <div>
                <div>
                    <div>
                        <img src={data.img} alt={data.name} />
                    </div>
                    <div>
                        <p>TÍNH NĂNG NỔI BẬT</p>
                        <ul>
                            <li>Màn hình: {data.displaysize}</li>
                            <li>Tần số quét màn hình: {data.refreshrate}</li>
                            <li>RAM {data.memory}</li>
                            <li>
                                Bộ nhớ trong:{' '}
                                {`${data.storage_options[0].storage1 || ''}
                            ${data.storage_options[1]?.storage2 ? `| ${data.storage_options[1].storage2}` : ''}
                            ${data.storage_options[2]?.storage3 ? `| ${data.storage_options[2].storage3}` : ''}
                            ${data.storage_options[3]?.storage4 ? `| ${data.storage_options[3].storage4}` : ''}`}
                            </li>
                            <li>Chip xử lý: {data.chipset}</li>
                            <li>GPU: {data.gpu}</li>
                            <li>Thời lượng pin: {data.battery}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div>C</div>
                <div>o</div>
                <div>m</div>
                <div>i</div>
                <div>n</div>
                <div>g</div>
                <div>s</div>
                <div>o</div>
                <div>o</div>
                <div>n</div>
                <div>!</div>
            </div>
        </section>
    );
}

export default Image;
