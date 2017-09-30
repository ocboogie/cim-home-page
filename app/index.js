import React from 'react';
import { render } from 'react-dom';
import 'bootstrap';

import Routes from './routes';
import './styles.global.css';

render(
    <Routes />,
    document.getElementById('root')
)