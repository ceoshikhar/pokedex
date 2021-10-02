import { createTheme } from '@mui/material/styles';

import { theme } from './theme';

export const muiTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: theme.color.primary,
            contrastText: theme.color.onPrimary,
        },
        secondary: {
            main: theme.color.secondary,
            contrastText: theme.color.textAlter,
        },

        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});
