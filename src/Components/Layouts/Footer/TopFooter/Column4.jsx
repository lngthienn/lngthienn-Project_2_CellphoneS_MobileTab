import styles from '../../../../Style/Layouts/Footer/TopFooter/Column4.module.scss';

function Column4() {
    return (
        <section className={styles.column4}>
            <div>
                <p> Kết nối với CellphoneS </p>
                <div>
                    <a href="">
                        <img
                            src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                            alt=""
                        />
                    </a>
                    <a href="">
                        <img
                            src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                            alt=""
                        />
                    </a>
                    <a href="">
                        <img
                            src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                            alt=""
                        />
                    </a>
                    <a href="">
                        <img
                            src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                            alt=""
                        />
                    </a>
                    <a href="">
                        <img
                            src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div>
                <p>Website thành viên</p>
                <p>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>
                <a href="#">
                    <img
                        src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                        alt=""
                    />
                </a>
                <p>Trung tâm bảo hành uỷ quyền Apple</p>
                <a href="#">
                    <img
                        src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                        alt=""
                    />
                </a>
                <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>{' '}
                <a href="#">
                    <img
                        src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                        alt=""
                    />
                </a>
                <p>Trang thông tin công nghệ mới nhất</p>{' '}
                <a href="#">
                    <img
                        src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                        alt=""
                    />
                </a>
            </div>
        </section>
    );
}

export default Column4;
