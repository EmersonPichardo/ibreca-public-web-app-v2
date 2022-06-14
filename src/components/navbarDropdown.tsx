import { Popover, Transition } from '@headlessui/react';
import { ElementType, Fragment, SVGProps } from 'react';
import NavbarLink, { NavbarLinkProps } from './navbarLink';

export class NavbarDropdownProps {
    name: string
    links: NavbarLinkProps[]
    icon?: ElementType<SVGProps<SVGSVGElement>>
    onRedirect?: any

    constructor(name: string, links: NavbarLinkProps[], icon?: ElementType<SVGProps<SVGSVGElement>>, onRedirect?: any) {
        this.name = name
        this.links = links
        this.icon = icon
        this.onRedirect = onRedirect
    }
}

export default function NavbarDropdown({ name, links, icon, onRedirect }: NavbarDropdownProps): JSX.Element {
    return (
        <Popover className='relative md:static'>
            {({ open, close }) => (
                <>
                    <Popover.Button className='w-full'>
                        <NavbarLink name={name} icon={icon} isActive={open} />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-300'
                        enterFrom='opacity-0 -translate-x-2 md:-translate-x-0 md:-translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 -translate-x-2 md:-translate-x-0 md:-translate-y-1'
                    >
                        <Popover.Panel className='relative z-10 w-full md:absolute md:w-auto'>
                            <div className='flex flex-col gap-2 md:gap-0 bg-white rounded drop-shadow-lg ring-1 ring-black ring-opacity-5 p-2 ml-4 md:ml-0'>
                                {
                                    links.map(
                                        ({ name, href, icon, isActive }: NavbarLinkProps, index: number) => (
                                            <NavbarLink key={index} name={name} href={href} icon={icon} isActive={isActive} onRedirect={onRedirect || close} />
                                        )
                                    )
                                }
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}