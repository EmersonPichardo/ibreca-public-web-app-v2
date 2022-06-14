import { Transition } from "@headlessui/react";
import { CalendarIcon, ChevronDoubleDownIcon, SpeakerphoneIcon } from "@heroicons/react/solid";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./layout/footer";
import Navbar from "../components/navbar";
import { navbarLinks } from "./layout/layout.config";
import AnnouncementService from "../services/announcementService"
import BlogService from "../services/blogService"
import ServiceCard from "../components/serviceCard";
import Carousel from "../components/carousel";
import RecentEntries from "../components/recentEntries";
import ButtonLarge from "../components/buttonLarge";
import DefaultImage from '../images/Bible_stand_up_read.jpg';

export default function Home(): JSX.Element {
    const [isScrollDownTextVisible, setScrollDownTextVisibility] = useState<boolean>(false);
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [recentBlogEntries, setRecentBlogEntries] = useState<any[]>([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setScrollDownTextVisibility(!isScrollDownTextVisible);
        }, 3000);

        return () => clearInterval(intervalId)
    }, [isScrollDownTextVisible]);

    useEffect(() => {
        getData();
        scrollTo(0, 0);
        document.title = 'ibreca.org';
    }, [])

    const getData = useCallback(async () => {
        const responses = await Promise.all([AnnouncementService.GetAll(), BlogService.GetRecents()]);

        if (responses[0].isOk) setAnnouncements(responses[0].data);
        if (responses[1].isOk) setRecentBlogEntries(responses[1].data);
    }, []);

    return (
        <>
            <div className='h-screen min-h-[500px] w-screen overflow-hidden'>
                <Navbar links={navbarLinks} />

                <div className={`bg-[url("${DefaultImage}")] bg-cover bg-center h-screen w-screen fixed top-0 -z-10`}>
                    <div className='h-full w-full bg-black opacity-60'></div>
                </div>

                <div className='backdrop-blur-md h-screen w-screen fixed -z-10'></div>

                <div className='flex flex-col justify-evenly text-white text-center h-full'>
                    <div className='flex flex-col items-center gap-2 md:gap-4 p-4'>
                        <img src='/src/images/Logo sin letas - sin fondo.png' className='drop-shadow-md h-20 md:h-28' />
                        <p className='drop-shadow-md text-xl md:text-3xl lg:text-5xl'>IBRECA</p>
                        <p className='font-medium drop-shadow-md text-3xl md:text-5xl lg:text-6xl xl:text-7xl'>Iglesia Bautista Redención en la Caleta</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-6'>
                        <div>
                            <Link to='/blog'>
                                <ButtonLarge text='Visita nuestras prédicas' icon={SpeakerphoneIcon} />
                            </Link>
                        </div>

                        <div className='h-full'>
                            <a href='#servicios'>
                                <ButtonLarge text='Conoce nuestro calendario' icon={CalendarIcon} />
                            </a>
                        </div>
                    </div>

                    <div className='relative h-48'>
                        <Transition
                            as={Fragment}
                            show={isScrollDownTextVisible}
                            enter='transition ease-out duration-1000'
                            enterFrom='opacity-0 -translate-y-4'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-1000'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-4'
                        >
                            <div>
                                <p>Ver más</p>
                                <ChevronDoubleDownIcon className='m-auto h-5 w-5' />
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>

            <section className={announcements.length ? '' : 'hidden'}>
                <Carousel name='carousel' data={announcements} />
            </section>

            <section id='servicios' className='bg-[url("/src/images/bg-blur-abstract.jpg")] bg-cover bg-center p-2 md:pb-4 pt-8 md:pt-16'>
                <div className='flex flex-col gap-2 md:gap-8 max-w-[1000px] mx-auto mb-16'>
                    <ServiceCard day='Martes' title='Oración y discipulado' hour='7:00 PM - 8:00 PM' />
                    <ServiceCard day='Jueves' title='Estudio bíblico' hour='7:00 PM - 8:30 PM' />
                    <ServiceCard day='Domingo' title='Escuela dominical' hour='10:00 AM - 11:00 AM' />
                    <ServiceCard day='Domingo' title='Culto de adoración*' hour='11:00 AM - 12:00 AM' />

                    <p className='text-sm md:text-base text-gray-700 italic'>*Primer domingo de cada mes el culto de adoración empieza a las 6:30 PM</p>
                </div>

                <div className={recentBlogEntries.length ? '' : 'hidden'}>
                    <RecentEntries data={recentBlogEntries} />
                </div>
            </section>

            <div className='-mt-16'>
                <Footer />
            </div>
        </>
    )
}