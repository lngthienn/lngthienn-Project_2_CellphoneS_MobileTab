import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './Style/GlobalStyles/GlobalStyles.jsx';
import App from './App';
import '@fontsource/roboto';
import '../themify-icons/themify-icons.css';

createRoot(document.getElementById('root')).render(
    <GlobalStyles>
        <App />
    </GlobalStyles>,
);
