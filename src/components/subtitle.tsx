export class SubtitleProps {
    text: string
    color?: string
}

export default function Subtitle({ text, color }: SubtitleProps) {
    return (
        <h2 className={`font-medium text-2xl md:text-4xl mb-2 md:mb-4 ${color ? `text-${color}` : ''}`}>{text}</h2>
    )
}