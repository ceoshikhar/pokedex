import { useSearchParams } from '@/hooks/use-search-params';
import { useHistory } from 'react-router-dom';

interface Returns {
    changePage: (event: React.ChangeEvent<unknown>, page: number) => void;
    currPage: number;
    offset: number;
    limit: number;
}

// No of items to show on a page, like Pokemons, Items, Machines etc. 12 because
// it divides the grid of items in 6x2, 4x3, 3x4, 2x6, 1x12 except the last page.
const limit = 12;

export function useListPagination(): Returns {
    const pageSearchParam = useSearchParams('page');
    const history = useHistory();
    const path = history.location.pathname;

    const currPage = pageSearchParam ? parseInt(pageSearchParam) : 1;
    // offset should start from page 2.
    // That' means on page 1, the offset should be 0.
    const offset = currPage * limit - limit;

    const changePage = (_: any, page: number) => {
        // `page` is null when clicked somewhere invalid on the component.
        // example the `...` will trigger this function with page = null
        if (page) {
            if (page === 1) {
                history.push(path);
            } else {
                history.push({ search: `?page=${page}` });
            }
        }
    };

    return {
        changePage,
        currPage,
        offset,
        limit,
    };
}
