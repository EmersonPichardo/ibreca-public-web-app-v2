import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown, { NavbarDropdownProps } from './navbarDropdown';
import NavbarLink, { NavbarLinkProps } from './navbarLink';

export class NavbarProps {
    links: (NavbarLinkProps | NavbarDropdownProps)[]

    constructor(links: (NavbarLinkProps | NavbarDropdownProps)[]) {
        this.links = links
    }
}

export default function Navbar({ links }: NavbarProps): JSX.Element {
    return (
        <nav className='h-[72px]'>
            <div className='fixed z-40 drop-shadow-lg w-screen bg-white p-2 md:px-6'>
                <div className='flex justify-between items-center max-w-7xl mx-auto'>
                    <Link to='/'>
                        <span className='sr-only'>ibreca</span>
                        <img
                            className='h-8 w-auto md:h-10'
                            src='/src/images/Logo sin letas - sin fondo.png'
                            alt='ibreca'
                        />
                    </Link>

                    <div className='hidden md:flex md:space-x-4'>
                        {
                            links.map(
                                (link: (NavbarLinkProps | NavbarDropdownProps), index: number) => {
                                    if (link instanceof NavbarLinkProps) return <NavbarLink key={index} name={link.name} href={link.href} icon={link.icon} />
                                    if (link instanceof NavbarDropdownProps) return <NavbarDropdown key={index} name={link.name} links={link.links} icon={link.icon} />
                                }
                            )
                        }
                    </div>

                    <div className='md:hidden'>
                        <Popover>
                            {({ open, close }) => (
                                <>
                                    <Popover.Button>
                                        <NavbarLink icon={MenuIcon} isActive={open} sr='abrir menú' />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="duration-200 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-100 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Popover.Panel focus={true} className='fixed left-0 top-0 right-0 bottom-0 h-screen overflow-y-scroll w-screen z-50 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-4'>
                                            <div className='flex justify-between items-center border-b border-slate-100 p-3 mb-8'>
                                                <a href='#'>
                                                    <span className='sr-only'>ibreca</span>
                                                    <img
                                                        className='h-8 w-auto'
                                                        src='/src/images/Logo sin letas - sin fondo.png'
                                                        alt='ibreca'
                                                    />
                                                </a>

                                                <Popover.Button>
                                                    <NavbarLink icon={XIcon} isActive={false} sr='cerrar menú' />
                                                </Popover.Button>
                                            </div>
                                            <div className='flex flex-col space-y-4'>
                                                {
                                                    links.map(
                                                        (link: (NavbarLinkProps | NavbarDropdownProps), index: number) => {
                                                            if (link instanceof NavbarLinkProps) return <NavbarLink key={index} name={link.name} href={link.href} icon={link.icon} onRedirect={close} />
                                                            if (link instanceof NavbarDropdownProps) return <NavbarDropdown key={index} name={link.name} links={link.links} icon={link.icon} onRedirect={close} />
                                                        }
                                                    )
                                                }
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}