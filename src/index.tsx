import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/theme';
import { App } from './App';
import GlobalStyle from '@/styles/global-style';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
