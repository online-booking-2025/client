import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <h1>Home Page - Online Booking 2025</h1>
      <Button
        onClick={() => {
          throw new Error('This is your first error!');
        }}
      >
        Break the world
      </Button>
    </div>
  );
};
