import { useState } from 'react';
import styles from '../../../Style/Pages/ItemDetail/TechnicalSpecifications.module.scss';
import Overlay from '../../Common/Overlay/Overlay';

function TechnicalSpecifications({ data }) {
    const [isTechnicalSpecifications, setIsTechnicalSpecifications] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    const handleClick = () => {
        setIsTechnicalSpecifications(!isTechnicalSpecifications);
        setIsOverlay(!isOverlay);
    };

    const handleClose = () => {
        setIsTechnicalSpecifications(false);
        setIsOverlay(false);
    };

    return (
        <section className={styles.technicalspecifications}>
            <button onClick={handleClick}>Thông số kỹ thuật</button>
            <Overlay isOverlay={isOverlay} />
            {isTechnicalSpecifications && (
                <div>
                    <header>
                        <p>THÔNG SỐ KỸ THUẬT</p>
                        <button onClick={handleClose}>x</button>
                    </header>
                    <section>
                        <ul>
                            <li>
                                <p>Màn hình</p>
                                <div>
                                    <div>
                                        <span>Kích thước màn hình</span>
                                        <p>{data.displaysize}</p>
                                    </div>
                                    <div>
                                        <span>Công nghệ màn hình</span>
                                        <p>{data.displaytechnology}</p>
                                    </div>
                                    <div>
                                        <span>Độ phân giải màn hình</span>
                                        <p>{data.displayresolution}</p>
                                    </div>
                                    <div>
                                        <span>Tính năng màn hình</span>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: data.displayfeatures.replace(/\n/g, '<br>'),
                                            }}
                                        ></p>
                                    </div>
                                    <div>
                                        <span>Tần số quét</span>
                                        <p>{data.refreshrate}</p>
                                    </div>
                                    <div>
                                        <span>Kiểu màn hình</span>
                                        <p>{data.displaytype}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Camera sau</p>
                                <div>
                                    <div>
                                        <span>Camera sau</span>
                                        <p>{data.backcamera}</p>
                                    </div>
                                    <div>
                                        <span>Quay video</span>
                                        <p>{data.backcameravideorecord}</p>
                                    </div>
                                    <div>
                                        <span>Tính năng camera</span>
                                        <p>{data.backcamerafeatures}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Camera trước</p>
                                <div>
                                    <div>
                                        <span>Camera trước</span>
                                        <p>{data.frontcamera}</p>
                                    </div>
                                    <div>
                                        <span>Quay video trước</span>
                                        <p>{data.frontcameravideorecord}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Vi xử lý & đồ họa</p>
                                <div>
                                    <div>
                                        <span>Chipset</span>
                                        <p>{data.chipset}</p>
                                    </div>
                                    <div>
                                        <span>GPU</span>
                                        <p>{data.gpu}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Giao tiếp & kết nối</p>
                                <div>
                                    <div>
                                        <span>Công nghệ NFC</span>
                                        <p>{data.ncftechnology}</p>
                                    </div>
                                    <div>
                                        <span>Thẻ SIM</span>
                                        <p>{data.simcard}</p>
                                    </div>
                                    <div>
                                        <span>Hỗ trợ mạng</span>
                                        <p>{data.networksupport}</p>
                                    </div>
                                    <div>
                                        <span>GPS</span>
                                        <p>{data.gps}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>RAM & lưu trữ</p>
                                <div>
                                    <div>
                                        <span>RAM</span>
                                        <p>{data.memory}</p>
                                    </div>
                                    <div>
                                        <span>Bộ nhớ trong</span>
                                        {data.price.map((price, index) => (
                                            <p key={index}>{price.storage1}</p>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Tính năng khác</p>
                                <div>
                                    <div>
                                        <span>Hệ điều hành</span>
                                        <p>{data.osversion}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Bộ xử lý & Đồ họa</p>
                                <div>
                                    <div>
                                        <span>Loại CPU</span>
                                        <p>{data.gputype}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Kích thước & Trọng lượng</p>
                                <div>
                                    <div>
                                        <span>Kích thước</span>
                                        <p>{data.size}</p>
                                    </div>
                                    <div>
                                        <span>Trọng lượng</span>
                                        <p>{data.weight}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Thiết kế & Trọng lượng</p>
                                <div>
                                    <div>
                                        <span>Chất lượng mặt kính</span>
                                        <p>{data.backpanelmaterial}</p>
                                    </div>
                                    <div>
                                        <span>Chất lượng khung viền</span>
                                        <p>{data.framematerial}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Thông số khác</p>
                                <div>
                                    <div>
                                        <span>Tương thích</span>
                                        <p>{data.compatibility}</p>
                                    </div>
                                    <div>
                                        <span>Chỉ số kháng nước, bụi</span>
                                        <p>{data.wateranddustresistancerating}</p>
                                    </div>
                                    <div>
                                        <span>Công nghệ - Tiện ích</span>
                                        <p>{data.technologyandfeatures}</p>
                                    </div>
                                    <div>
                                        <span>Tiện ích khác</span>
                                        <p>{data.otherutilities}</p>
                                    </div>
                                    <div>
                                        <span>Công nghệ âm thanh</span>
                                        <p>{data.audiotechnology}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Pin & công nghệ sạc</p>
                                <div>
                                    <div>
                                        <span>Thời lượng pin</span>
                                        <p>{data.battery}</p>
                                    </div>
                                    <div>
                                        <span>Công nghệ sạc</span>
                                        <p>{data.audiotechnology}</p>
                                    </div>
                                    <div>
                                        <span>Cổng sạc</span>
                                        <p>{data.audiotechnology}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Tiện ích khác</p>
                                <div>
                                    <div>
                                        <span>Các loại cảm biến</span>
                                        <p>{data.typesofsensors}</p>
                                    </div>
                                    <div>
                                        <span>Tính năng đặc biệt</span>
                                        <p>{data.specialfeatures}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Cổng kết nối</p>
                                <div>
                                    <div>
                                        <span>Wi-Fi</span>
                                        <p>{data.wifi}</p>
                                    </div>
                                    <div>
                                        <span>Bluetooth</span>
                                        <p>{data.bluetooth}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <p>Thông tin chung</p>
                                <div>
                                    <div>
                                        <span>Thời điểm ra mắt</span>
                                        <p>{data.releasedate}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <footer>
                        <div>
                            <button onClick={handleClose}> x Đóng</button>
                        </div>
                    </footer>
                </div>
            )}
        </section>
    );
}

export default TechnicalSpecifications;
