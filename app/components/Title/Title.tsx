import { ReactNode, ComponentType } from 'react';
import { clsx } from 'clsx';

export interface TitleProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements | ComponentType;
  className?: string;
}

export function Title({ size = 'md', children, tag, className }: TitleProps) {
  const Comp = tag ? tag : 'p';

  return (
    <Comp 
      className={clsx(
        'text', 
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  )
}