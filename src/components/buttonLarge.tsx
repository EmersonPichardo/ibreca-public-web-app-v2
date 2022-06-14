import React, { ElementType, SVGProps } from "react"

export class buttonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    text?: string
    icon?: ElementType<SVGProps<SVGSVGElement>>
}

export default function ButtonLarge({ onClick, text, icon }: buttonProps): JSX.Element {
    return (
        <button className='bg-indigo-600 text-white px-8 py-4 rounded drop-shadow-lg ease-out duration-300 hover:drop-shadow-2xl hover:scale-105' onClick={onClick}>
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