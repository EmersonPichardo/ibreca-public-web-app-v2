import { InformationCircleIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";

import InstagramSVG from '../../components/icons/instagram.svg';
import YoutubeSVG from '../../components/icons/youtube.svg';
import FacebookSVG from '../../components/icons/facebook.svg';

export default function Footer() {
	return (
		<footer className='absolute -z-10 bg-gray-200 w-screen pt-16 drop-shadow-md'>
			<div className='container mx-auto grid md:grid-cols-2 gap-20 md:gap-8 p-16'>
				<div className='self-center'>
					<div className='flex items-center gap-2 mb-10 text-lg font-medium'>
						<InformationCircleIcon className='h-6 w-6' />
						<p>Información adicional</p>
					</div>

					<ul className='space-y-4'>
						<li className='underline'>
							<a href='tel:+1-829-466-3133' className='flex items-baseline gap-2 ease-out duration-300 hover:text-indigo-600 focus:text-indigo-600'>
								<PhoneIcon className='flex-none h4 w-4' />
								<span>+1 (829) 466-3133</span>
							</a>
						</li>
						<li className='underline'>
							<a href='mailto:ibrca01@gmail.com' className='flex items-baseline gap-2 ease-out duration-300 hover:text-indigo-600 focus:text-indigo-600'>
								<MailIcon className='flex-none h-4 w-4' />
								<span>ibrca01@gmail.com</span>
							</a>
						</li>
						<li className='underline'>
							<a className='flex items-baseline gap-2 ease-out duration-300 hover:text-indigo-600 focus:text-indigo-600' href='https://www.google.com/maps/place/Iglesia+Bautista+Redenci%C3%B3n+en+La+Caleta,+IBRECA/@18.4545698,-69.6888724,21z/data=!4m6!3m5!1s0x8eaf80114ed1a8dd:0x6b36f30b08366aa0!8m2!3d18.4545818!4d-69.688693!16s%2Fg%2F11g6j7vcyh?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
								<LocationMarkerIcon className='flex-none h-4 w-4' />
								<span className='text-justify'>C/ Trinitaria # 7 vista alegre la caleta, La  Caleta, Santo Domingo este, República Dominicana</span>
							</a>
						</li>
					</ul>
				</div>

				<div className='italic text-gray-600 self-center'>
					<p className='mb-2 text-justify'>"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna"</p>
					<p className='text-right'>Juan 3:16 - RV60</p>
				</div>
			</div>

			<div className='container mx-auto flex justify-center items-center gap-12 border-t border-gray-300 p-4 md:p-16 md:pt-8'>
				<p className='ease-out duration-300 h-10 hover:scale-110'>
					<a href='https://www.instagram.com/ibreca_org/?igshid=rxf5cyouykc4' target='_blank'>
						<img src={InstagramSVG} className='h-full' alt='Instagram' />
					</a>
				</p>
				<p className='ease-out duration-300 h-10 hover:scale-110'>
					<a href='https://www.youtube.com/channel/UCVn4FKJsuPIvCGGt-dF38EA/featured' target='_blank'>
						<img src={YoutubeSVG} className='h-full' alt='Youtube' />
					</a>
				</p>
				<p className='ease-out duration-300 h-10 hover:scale-110'>
					<a href='https://www.facebook.com/iebflacaleta/' target='_blank'>
						<img src={FacebookSVG} className='h-full' alt='Facebook' />
					</a>
				</p>
			</div>
		</footer>
	)
}