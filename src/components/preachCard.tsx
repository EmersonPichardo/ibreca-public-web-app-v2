import ParseDate from "../helpers/DateParser"

export class PreachCardProps {
    entry: PreachEntry
}

export class PreachEntry {
    id: number
    title: string
    coverUrl: string
    publicationDate: string
}

export default function PreachCard({ entry }: PreachCardProps) {
    return (
        <a href={`/predicas/${entry.id}`} className='block rounded-lg overflow-hidden drop-shadow-md ring-1 ring-gray-200 ease-out duration-300 md:hover:scale-105 md:hover:drop-shadow-2xl'>
            <img className='object-cover object-center min-h-48 max-h-56 md:max-h-80 w-full' title={entry.title} src={entry.coverUrl} alt={entry.title} />

            <div className='bg-white text-black p-6'>
                <p className='text-sm'>
                    {
                        ParseDate(entry.publicationDate)
                    }
                </p>

                <p className='text-2xl font-medium my-4'>{entry.title}</p>
            </div>
        </a >
    )
}