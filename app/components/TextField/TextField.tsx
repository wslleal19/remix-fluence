import { ReactNode, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TextFieldProps  extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    placeholder?:string;
    label: string;
    outline?: boolean;
}

export function TextField({ className, placeholder, label, outline, ...props}: TextFieldProps) {
    return (
        // <div  className={clsx(
        //     'flex items-center gap-3 h-12 py-4 px-3 rounded bg-default w-full focus-within:ring-2 ring-primary',
        //     className,
        // )}>

        <>
            <label className={'block font-semibold pb-1 pl-1'}>
                {label}
            </label>
            <input
                className={
                    clsx(
                        'border-2 pl-4 rounded-xl p-sm block focus:border-primary outline-0 bg-default placeholder-white text-white font-semibold',
                        {
                            'border-default-200 bg-transparent text-black placeholder-black': outline,
                        },
                        className,
                    )
                }
                placeholder={placeholder}
                {...props}
            />
        </>

        // </div>
    )
}