import { SearchIcon } from "@heroicons/react/outline"
import React, { ElementType, SVGProps } from "react"
import { useCallback } from "react"

export class SearchInputProps {
    id: string
    name: string
    type: InputTypes
    placeholder?: string
    icon?: ElementType<SVGProps<SVGSVGElement>>
    className?: string
}

export enum InputTypes {
    text,
    search,
    date
}

export default function BaseInput({ id, name, type, placeholder, icon, className }: SearchInputProps) {
    const getIcon = useCallback((): ElementType<SVGProps<SVGSVGElement>> | undefined => {
        switch (type) {
            case InputTypes.search:
                return SearchIcon
        }
    }, [])

    return (
        <div className='appearance-none flex items-center gap-2 bg-white w-full px-2 drop-shadow-md rounded-sm ring-1 ring-indigo-800 ease-out duration-150 hover:ring-2 focus:ring-2'>
            {
                (
                    (type == InputTypes.text && !icon) ||
                    (type == InputTypes.date && !icon)
                ) ? <></> :
                    React.createElement(
                        (
                            icon ?? getIcon()!
                        ),
                        {
                            className: 'text-indigo-800 w-4 h-4',
                            'aria-hidden': 'true'
                        }
                    )
            }
            <input
                id={id}
                name={name}
                type={InputTypes[type]}
                placeholder={placeholder}
                className={`w-full h-full py-1 text-gray-800 outline-none ${className}`}
                onFocus={({ target }) => (target as any).showPicker()}
            />
        </div>
    )
}