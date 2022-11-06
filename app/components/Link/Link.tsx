import {ReactNode, ComponentType, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import { Link as LinkRemix } from "@remix-run/react";
import { clsx } from 'clsx';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
    color?: 'primary' | 'secondary' | 'default';
    link: string;
    prefetch?: 'none' | 'intent' | 'render';
}

export function Link({ children, color = 'primary', link, prefetch = 'none', className, ...props }: LinkProps) {
    const style = clsx(
        'text-white p-vh rounded-full font-text font-semibold transition-all',
        {
            'bg-primary hover:bg-primary-600': color === 'primary',
            'bg-secondary hover:bg-secondary-600': color === 'secondary',
            'bg-default hover:bg-default-600': color === 'default',
        },
        className,
    );

    return <LinkRemix prefetch={prefetch} className={style} to={link} {...props}>{children}</LinkRemix>;
}