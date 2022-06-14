import BaseInput, { InputTypes } from "./baseInput";

export class DateInputProps {
    id: string
    name: string
    placeholder?: string
    className?: string
}

export default function DateInput({ id, name, placeholder = 'Fecha', className }: DateInputProps) {
    return (
        <BaseInput id={id} name={name} type={InputTypes.date} placeholder={placeholder} className={className} />
    )
}