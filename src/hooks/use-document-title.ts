import { useEffect } from 'react';

import { config } from '@/utils/config';

export function useDocumentTitle(title: string) {
    useEffect(() => {
        if (title) {
            document.title = title + ' | ' + config.titleSuffix;
        } else {
            document.title = config.titleSuffix;
        }
    }, [title]);
}
