import React from "react";
import { ElementType, SVGProps } from "react";
import { Link } from "react-router-dom";
import selectiveClassnames from "../helpers/selectiveClassnames";

export class NavbarLinkProps {
    name?: string
    href?: string
    icon?: ElementType<SVGProps<SVGSVGElement>>
    isActive?: boolean
    sr?: string
    onRedirect?: any

    constructor(name?: string, href?: string, icon?: ElementType<SVGProps<SVGSVGElement>>, isActive?: boolean, sr?: string, onRedirect?: any) {
        this.name = name
        this.href = href
        this.icon = icon
        this.isActive = isActive
        this.sr = sr
        this.onRedirect = onRedirect
    }
}

export default function NavbarLink({ name, href, icon, isActive, sr, onRedirect }: NavbarLinkProps): JSX.Element {
    return (
        <Link to={href ?? `#${name}`} onClick={onRedirect}>
            <div className={
                selectiveClassnames(
                    isActive
                        ? 'bg-gray-100 shadow-lg text-indigo-600 ring-2 ring-inset ring-indigo-600'
                        : 'bg-gray-100 md:bg-white text-gray-400',
                    'ease-out duration-300 flex items-center rounded p-4 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                )
            }>
                {
                    !icon ? <></>
                        : React.createElement(icon, { className: selectiveClassnames(name != undefined ? 'mr-3' : 'mr-0', 'h-5 w-5 text-indigo-600'), 'aria-hidden': 'true' })
                }
                <p className='text-base font-medium'>{name}</p>
                <span className="sr-only">{name ?? sr}</span>
            </div>
        </Link>
    )
}