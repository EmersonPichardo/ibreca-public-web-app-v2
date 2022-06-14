import React, { ElementType, SVGProps } from "react"

export class buttonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    text?: string
    icon?: ElementType<SVGProps<SVGSVGElement>>
    className?: string
}

export default function Button({ onClick, text, icon, className }: buttonProps): JSX.Element {
    return (
        <button className={`bg-indigo-600 text-white px-4 py-2 rounded drop-shadow-md ease-out duration-300 hover:drop-shadow-lg hover:scale-105 ${className}`} onClick={onClick}>
            <div className='flex items-center gap-2'>
                {
                    !icon ? <></>
                        : React.createElement(icon, { className: 'h-5 w-5', 'aria-hidden': 'true' })
                }
                {
                    !text ? <></>
                        : <p className='text-base font-medium'>{text}</p>
                }
            </div>
        </button>
    )
}