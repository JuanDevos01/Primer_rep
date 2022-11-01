import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {FirstPage} from './Pages/FirstPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.strictMode>
     <FirstPage/>
    </React.strictMode>
);