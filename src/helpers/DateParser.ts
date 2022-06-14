export default function ParseDate(stringDate: string) {
    return new Date(stringDate).toLocaleDateString(
        'es-es',
        {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }
    )
}