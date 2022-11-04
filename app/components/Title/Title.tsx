import { ReactNode, ComponentType } from 'react';
import { clsx } from 'clsx';

export interface TitleProps {
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements | ComponentType;
  className?: string;
  isSubtitle?: boolean;
}

export function Title({isSubtitle, children, tag, className }: TitleProps) {
  const Comp = tag ? tag : 'h2';

  return (
    <Comp 
      className={clsx(
        'title',
          isSubtitle ? 'text-xl' : 'text-2xl',
        className,
      )}
    >
      {children}
    </Comp>
  )
}