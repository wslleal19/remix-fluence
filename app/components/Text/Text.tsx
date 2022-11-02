import { ReactNode, ComponentType } from 'react';
import { clsx } from 'clsx';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements | ComponentType;
  className?: string;
}

export function Text({ size = 'md', children, tag, className }: TextProps) {
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