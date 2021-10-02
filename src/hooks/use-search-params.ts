import { useLocation } from 'react-router-dom';

export function useSearchParams(key: string) {
    const location = useLocation();
    const searchObj = new URLSearchParams(location.search);

    return searchObj.get(key);
}
