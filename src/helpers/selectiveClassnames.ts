export default function selectiveClassnames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
}
