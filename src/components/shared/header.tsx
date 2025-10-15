import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;

};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      Header
    </div>
  );
};
