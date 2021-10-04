import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const TabPanel: React.FC<Props> = (props: Props) => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`index`} {...other}>
            {value === index && <div>{children}</div>}
        </div>
    );
};
