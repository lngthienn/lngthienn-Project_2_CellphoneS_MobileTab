import { createRoot } from 'react-dom/client';
import GlobalStyles from './Components/Common/GlobalStyles/GlobalStyles.jsx';
import App from './App';
import '@fontsource/roboto';
import '../themify-icons/themify-icons.css';

createRoot(document.getElementById('root')).render(
    <GlobalStyles>
        <App />
    </GlobalStyles>,
);
