import { config } from '@/utils/config';
import { useRouteMatch } from 'react-router-dom';

export function usePokemonType() {
    const match = useRouteMatch<{ type: string }>(
        config.routes.POKEDEX_POKEMONS_WITH_TYPE_MATCH
    );
    const pokemonType = match?.params.type;
    return pokemonType;
}
