import { ReactNode, ComponentType, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    color?: 'primary' | 'secondary' | 'default';
}

export function Button({ children, color = 'primary', className, ...props }: ButtonProps) {
    const style = clsx(
        'text-white p-vh rounded-full font-text font-semibold transition-all',
        {
            'bg-primary hover:bg-primary-600': color === 'primary',
            'bg-secondary hover:bg-secondary-600': color === 'secondary',
            'bg-default hover:bg-default-600': color === 'default',
        },
        className,
    );

    return <button type="button" className={style} {...props}>{children}</button>;
}