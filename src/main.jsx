import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './Style/GlobalStyles/index.jsx';
import App from './App';
import '@fontsource/roboto';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </BrowserRouter>,
);
