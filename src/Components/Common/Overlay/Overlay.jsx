import './Overlay.module.scss';

function Overlay({ isOverlay }) {
    return isOverlay && <section className="overlay"></section>;
}

export default Overlay;
