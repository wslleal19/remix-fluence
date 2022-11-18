import { ReactNode, ComponentType, ButtonHTMLAttributes } from 'react';
import { Link } from "@remix-run/react";
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    color?: 'primary' | 'secondary' | 'default' | 'error';
    link?: string;
    prefetch?: 'none' | 'intent' | 'render';
}

export function Button({ children, color = 'primary', link, prefetch = 'none', className, ...props }: ButtonProps) {
    const style = clsx(
        'text-white p-vh rounded-full font-text font-semibold transition-all',
        {
            'bg-primary hover:bg-primary-600': color === 'primary',
            'bg-secondary hover:bg-secondary-600': color === 'secondary',
            'bg-default hover:bg-default-600': color === 'default',
            'bg-error hover:bg-error-600': color === 'error',
        },
        className,
    );

    return link
        ? <Link prefetch={prefetch} className={style} to={link}>{children}</Link>
        : <button type="button" className={style} {...props}>{children}</button>;
}