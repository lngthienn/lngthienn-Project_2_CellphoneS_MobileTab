import './Overlay.css';

function Overlay({ isOverlay }) {
    return isOverlay && <div className="overlay"></div>;
}

export default Overlay;
