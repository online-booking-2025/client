import React from 'react';

import { footerData } from '@/constants/footer-data';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;

};

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      {footerData.title}
    </div>
  );
};
