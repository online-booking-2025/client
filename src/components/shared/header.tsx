import React from 'react';

import { headerData } from '@/constants/header-data';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;

};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      {headerData.title}
    </div>
  );
};
