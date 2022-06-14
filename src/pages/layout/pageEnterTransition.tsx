import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export class PageEnterTransitionProps {
    children?: ReactNode
}

export default function PageEnterTransition({ children }: PageEnterTransitionProps): JSX.Element {
    return (
        <Transition
            as={Fragment}
            appear={true}
            show={true}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 -translate-y-2'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 -translate-y-2'
        >
            {children}
        </Transition>
    )
}