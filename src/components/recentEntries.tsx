export class RecentEntriesProps {
    data: Entry[]
}

export class Entry {
    id: number
    title: string
    coverUrl: string
}

export default function RecentEntries({ data }: RecentEntriesProps) {
    return (
        <>
            <div className='bg-white rounded drop-shadow max-w-[1200px] mx-auto mt-8 md:mt-24 px-2 md:px-8 py-8 md:py-4'>
                <h3 className='text-indigo-800 font-medium drop-shadow-md text-2xl md:text-4xl text-center leading-[1px] shrink-0'>Últimas prédicas</h3>
            </div>
            <ul className='flex md:justify-center items-stretch snap-x snap-mandatory gap-3 pt-4 md:pt-8 pb-4 md:pb-20 px-2 md:px-8 overflow-x-auto scrollbar-hidden'>
                {data.map((entry, index) => (
                    <li key={index.toString()} className='snap-center rounded-lg drop-shadow-md shrink-0 md:shrink overflow-hidden ease-out duration-300 z-10 md:hover:scale-110 md:hover:drop-shadow-2xl md:hover:z-20'>
                        <a href={`/predicas/${entry.id}`}>
                            <img className='object-cover object-center min-w-[300px] h-full max-h-[25vh] min-h-[200px] md:max-h-[40vh]' title={entry.title} src={entry.coverUrl} alt={entry.title} />
                            <div className='bg-black/90 text-white px-4 py-2'>
                                <span>{entry.title}</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}