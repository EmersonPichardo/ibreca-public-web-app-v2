export class ServiceCardProps {
    day: string
    title: string
    hour: string
}

export default function ServiceCard({ day, title, hour }: ServiceCardProps) {
    return (
        <div className='flex items-center w-full bg-white rounded drop-shadow-md gap-4 p-4 ring-1 ring-gray-200'>
            <p className='text-xl md:text-2xl bg-red-800 rounded drop-shadow-md flex items-center justify-center h-24 md:h-28 aspect-square text-white font-medium'>{day}</p>

            <div className='flex flex-col justify-center items-center text-center w-full gap-4'>
                <p className='font-medium text-2xl md:text-5xl drop-shadow-sm'>{title}</p>
                <div className='h-2 w-16 border-b-4 border-black drop-shadow-sm'></div>
                <p className='text-sm md:text-xl drop-shadow-sm'>{hour}</p>
            </div>
        </div>
    )
}