import { TabPanel } from '@/components/tab-panel';
import React from 'react';

interface Props {
    value: number;
    index: number;
}

export const PokemonTabMoves: React.FC<Props> = ({ value, index }: Props) => {
    return (
        <TabPanel value={value} index={index}>
            Moves
        </TabPanel>
    );
};
