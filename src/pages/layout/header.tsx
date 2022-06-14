export default function Header({ title, url }: any) {
    return (
        <header className='h-[275px] md:h-[40vh] min-h-[275px] drop-shadow-lg overflow-hidden'>
            <img className='fixed object-cover object-center h-full w-screen -z-20' src={url} />

            <div className='flex justify-center items-center h-full w-full bg-black/75 backdrop-blur-sm backdrop-sepia p-4'>
                <h1 className='text-white font-medium text-4xl md:text-6xl lg-text-7xl drop-shadow-lg mb-16'>{title}</h1>
            </div>
        </header>
    )
}