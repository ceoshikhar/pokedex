import {
    Tooltip as MUITooltip,
    withStyles,
    TooltipProps,
} from '@material-ui/core';
import { useTheme } from 'styled-components';

interface TooltipOptions extends TooltipProps {
    background?: string;
    color?: string;
}

/**
 * The first child of `Tooltip` must be a raw DOM Element. A custom component
 * as the first child will cause bugs.
 */
export const Tooltip = ({
    children,
    color,
    background,
    style,
    ...rest
}: TooltipOptions) => {
    const theme = useTheme();

    const StyledTooltip = withStyles({
        tooltip: {
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '1rem',
            background: background || theme.color.borderOnDisabled,
            color: color || theme.color.textPrimary,
            borderRadius: '6px',
            padding: '4px 8px',
            ...style,
        },
    })(MUITooltip);

    return <StyledTooltip {...rest}>{children}</StyledTooltip>;
};
