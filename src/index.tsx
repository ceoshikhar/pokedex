import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { App } from './App';
import GlobalStyle from '@/styles/global-style';
import { theme } from '@/styles/theme';
import { muiTheme } from '@/styles/mui-theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <MUIThemeProvider theme={muiTheme}>
            <GlobalStyle />
            <App />
        </MUIThemeProvider>
    </ThemeProvider>,
    document.getElementById('root')
);
