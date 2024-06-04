import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    text: string;
    displaySpinner?: boolean;
}

export default function ButtonDefault(props: ButtonProps) {
    const { className, text, ...buttonProps } = props; // Spread operator para separar props específicas do seu componente

    return (
        <div>
            <button
                {...buttonProps} // Todas as propriedades do botão serão passadas aqui
                className={clsx(
                    className,
                    'rounded-full',
                    'btn',
                    'bg-polkadot-rose',
                    'text-white',
                    'border-white',
                    'hover:opacity-80',
                    'hover:bg-polkadot-rose'
                )}
                disabled={props.displaySpinner}
            >
                    {text}
         </button>

            {props.displaySpinner && (
                <div className="inline-block h-8 w-8 text-polkadot-rose animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                </div>
            )}

        </div>




    );
}
