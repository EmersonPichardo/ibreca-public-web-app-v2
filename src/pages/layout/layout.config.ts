import { BookOpenIcon, ClockIcon, HomeIcon, LocationMarkerIcon, PresentationChartLineIcon, SpeakerphoneIcon, UserGroupIcon } from "@heroicons/react/solid"
import { NavbarDropdownProps } from "../../components/navbarDropdown"
import { NavbarLinkProps } from "../../components/navbarLink"

export const navbarLinks: (NavbarLinkProps | NavbarDropdownProps)[] = [
    new NavbarLinkProps('inicio', '/', HomeIcon),
    new NavbarDropdownProps('Nosotros', [
        new NavbarLinkProps('Historia', '/historia', ClockIcon),
        new NavbarLinkProps('Misión y visión', '/mision-y-vision', PresentationChartLineIcon),
        new NavbarLinkProps('Declaración de fe', '/declaracion-de-fe', BookOpenIcon)
    ], UserGroupIcon),
    new NavbarLinkProps('Visitanos', '/visitanos', LocationMarkerIcon),
    new NavbarLinkProps('Prédicas', '/predicas', SpeakerphoneIcon),
]