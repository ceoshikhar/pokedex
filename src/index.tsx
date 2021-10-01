import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/theme';
import { App } from './App';
import GlobalStyle from '@/styles/global-style';

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
