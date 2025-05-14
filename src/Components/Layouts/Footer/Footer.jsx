import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

import footerStyles from '../../../Style/Layouts/Footer/Footer.module.css';

function Footer() {
    return (
        <section className={footerStyles.wrapper}>
            <TopFooter />
            footer
            <BottomFooter />
        </section>
    );
}

export default Footer;
