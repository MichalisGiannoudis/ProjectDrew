import { useMemo } from 'react';
import { HeaderContent, MainPageContent, FooterContent} from '@/types/content.interface';
import { contentMap } from '@/content';

export const useContent = (pageId: string): HeaderContent | MainPageContent | FooterContent=> {
    return useMemo(() => {
        return contentMap[pageId] || null;
    }, [pageId]);
};
