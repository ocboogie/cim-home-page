import React from 'react';
import { render } from 'react-dom';
import 'bootstrap';
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js/lib/highlight';

import Routes from './Routes';
import './styles.global.css';

hljs.registerLanguage('javascript', javascript);

render(
    <Routes />,
    document.getElementById('root')
);
