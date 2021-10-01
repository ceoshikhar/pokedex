import { createTheme } from '@mui/material/styles';

const headingStyles = {
    fontFamily: 'Inter',
    fontWeight: 700,
};

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFB703',
        },
        secondary: {
            main: '#00A8E8',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: ['Roboto', 'Inter'].join(','),
        htmlFontSize: 16,
        h1: headingStyles,
        h2: headingStyles,
        h3: headingStyles,
        h4: headingStyles,
        h5: headingStyles,
        h6: headingStyles,
        button: {
            fontFamily: 'Inter',
            fontWeight: 700,
        },
    },
});
