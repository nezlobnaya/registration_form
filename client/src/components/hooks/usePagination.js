import { useMemo } from 'react';

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
    
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };