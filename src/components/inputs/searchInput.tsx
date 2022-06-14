import BaseInput, { InputTypes } from "./baseInput";

export class SearchInputProps {
    id: string
    name: string
    placeholder?: string
    className?: string
}

export default function SearchInput({ id, name, placeholder = 'Buscar...', className }: SearchInputProps) {
    return (
        <BaseInput id={id} name={name} placeholder={placeholder} type={InputTypes.search} className={className} />
    )
}