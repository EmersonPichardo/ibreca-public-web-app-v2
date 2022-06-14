export class QuoteProps {
    text?: string
    source: string
}

export default function Quote({ text, source }: QuoteProps) {
    return (
        <span className='underline decoration-2 decoration-sky-500 underline-offset-4'>
            {text ? `“${text}”` : ''}
            <span className='font-medium'> {source}</span>
        </span>
    )
}