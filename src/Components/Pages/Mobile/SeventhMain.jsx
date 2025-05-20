import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../Style/Pages/Mobile/SeventhMain.module.scss';

function SeventhMain() {
    const [mergedData, setMergedData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [res1, res2, res3] = await Promise.all([
                    axios.get('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/apple.json'),
                    axios.get('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/samsung.json'),
                    axios.get('https://raw.githubusercontent.com/lngthienn/Data_Phones/refs/heads/master/xiaomi.json'),
                ]);
                const combineData = [...res1.data, ...res2.data, ...res3.data];
                const shuffledData = [...combineData].sort(() => Math.random() - 0.5);
                setMergedData(shuffledData);
            } catch (error) {
                console.error('Lỗi trong quá trình thực hiện', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className={styles.seventhmain}>
            {mergedData &&
                mergedData.map((item, id) => (
                    <section key={id} className={styles.items}>
                        <div>{`Giảm ${item.storage_options[0].salePrice1}`}</div>
                        <div>Trả góp 0%</div>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <h3>{`${item.name} ${item.price[0].storage1} | ${item.memory}`}</h3>
                        <div>
                            <p>{item.displaysize}</p>
                            <p>{item.memory}</p>
                            <p>{item.storage_options[0].storage1}</p>
                        </div>
                        <div>
                            <p>
                                {mergedData && item.storage_options[0].salePrice1
                                    ? `${new Intl.NumberFormat('vi-VN').format(
                                          Number(item.price[0].price1.replace(/\./g, '')) *
                                              (1 -
                                                  parseFloat(item.storage_options[0].salePrice1.replace('%', '')) /
                                                      100),
                                      )}đ`
                                    : 'Liên hệ'}
                            </p>
                            <del>
                                {`${new Intl.NumberFormat('vi-VN').format(
                                    Number(item.price[0].price1.replace(/\./g, '')),
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
