import { useEffect, useState } from "react";

export class CarouselProps {
    name: string
    data: CarouselData[]
}

export class CarouselData {
    title: string
    url: string
}

export default function Carousel({ name, data }: CarouselProps) {

    const [carouselItem, setCarouselItem] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const element = document.getElementById(name)!;

            if (element.matches(':hover') || screen.width <= 768) return;

            element.scroll({ left: carouselItem * screen.height / 2, behavior: 'smooth' });
            setCarouselItem(carouselItem < data.length ? carouselItem + 1 : 0);
        }, 3000);

        return () => clearInterval(intervalId)
    }, [carouselItem])

    return (
        <ul id={name} className='bg-black/50 flex items-stretch snap-x snap-mandatory space-x-2 py-4 overflow-x-auto scrollbar-hidden'>
            <li className='w-[40vw] shrink-0'></li>
            {
                data.map((element, index) => (
                    <li key={index.toString()} className='snap-center shrink-0 rounded-xl drop-shadow-md overflow-hidden'>
                        <img className='object-cover h-full max-h-[25vh] min-h-[200px] md:max-h-[40vh]' title={element.title} src={element.url} alt={element.title} />
                    </li>
                ))
            }
            <li className='w-[40vw] shrink-0'></li>
        </ul>
    )
}