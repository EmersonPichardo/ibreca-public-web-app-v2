import { CalendarIcon, CheckCircleIcon, LocationMarkerIcon, MailIcon, PaperAirplaneIcon, PhoneIcon, XCircleIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import Paragraph from "../components/paragraph";
import TitleContext from "../contexts/pageContext";
import selectiveClassnames from "../helpers/selectiveClassnames";
import EmailService from "../services/emailService";
import BlankPageContainer from "./layout/blankPageContainer";
import DefaultImage from '../images/Bible_stand_up_read.jpg';

export default function VisitUs(): JSX.Element {
	const { setTitle, setUrl } = useContext(TitleContext);

	const [isSending, setIsSending] = useState<boolean>(false);
	const [emailResponse, setEmailResponse] = useState<any>({ message: '' });

	useEffect(() => {
		setTitle('Visítanos');
		setUrl(DefaultImage);
	}, [])

	const sendEmail = async (event: any) => {
		event.preventDefault();

		setIsSending(true);

		const name = event.target['name'].value;
		const contact = event.target['phone'].value;
		const email = event.target['email'].value;
		const message = event.target['message'].value;

		const response = await EmailService.Send(message, name, contact, email);
		if (response.isOk && response.data) {
			event.target.reset();
			return setEmailResponse({ message: 'Hemos recibido su mensaje. Dios le bendiga.', type: 1 })
		}

		event.target.reset();
		setEmailResponse({ message: 'Ha ocurrido un error enviando el mensaje, por favor intente de nuevo más tarde', type: 0 })
	}

	return (
		<BlankPageContainer>
			<div className='grid md:grid-cols-3 gap-8'>
				<Paragraph title='Servicios' titleColor='indigo-800'>
					<ul className='space-y-2 pl-4 md:pl-0'>
						<li>
							<p className='flex items-baseline gap-2 ease-out duration-300'>
								<CalendarIcon className='flex-none h4 w-4' />
								<span className='font-medium'>Escuela dominical</span>
							</p>
							<p className='text-sm'>10:00 AM - 11:00 AM</p>
						</li>
						<li>
							<p className='flex items-baseline gap-2 ease-out duration-300'>
								<CalendarIcon className='flex-none h4 w-4' />
								<span className='font-medium'>Culto de adoración</span>
							</p>
							<p className='text-sm'>11:00 AM - 12:00 AM</p>
						</li>
					</ul>
				</Paragraph>

				<Paragraph title='Contactos' titleColor='indigo-800'>
					<ul className='space-y-2 pl-4 md:pl-0'>
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
					</ul>
				</Paragraph>

				<Paragraph title='Dirección' titleColor='indigo-800'>
					<ul className='space-y-2 pl-4 md:pl-0'>
						<li className='underline'>
							<a className='flex items-baseline gap-2 ease-out duration-300 hover:text-indigo-600 focus:text-indigo-600' href='https://www.google.com/maps/place/Iglesia+Bautista+Redenci%C3%B3n+en+La+Caleta,+IBRECA/@18.4545698,-69.6888724,21z/data=!4m6!3m5!1s0x8eaf80114ed1a8dd:0x6b36f30b08366aa0!8m2!3d18.4545818!4d-69.688693!16s%2Fg%2F11g6j7vcyh?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D' target='_blank'>
								<LocationMarkerIcon className='flex-none h-4 w-4' />
								<span className='text-justify'>C/ Trinitaria # 7 vista alegre la caleta, La  Caleta, Santo Domingo este, República Dominicana</span>
							</a>
						</li>
					</ul>
				</Paragraph>
			</div>

			<div className='bg-indigo-800 drop-shadow-md rounded -mx-2 mt-16 md:m-16'>
				<span className='bg-white text-indigo-800 text-2xl font-medium p-6 rounded drop-shadow-sm ring-1 relative -left-4 md:-left-8'>Envianos un mensaje</span>

				<form id='contactForm' className='p-8 mt-4' onSubmit={sendEmail}>
					<div className={emailResponse.message ? '' : 'hidden'}>
						<p className={selectiveClassnames(emailResponse.type == 1 ? 'text-green-700' : 'text-red-700', 'flex items-center gap-4 bg-white font-medium p-4 mb-4 rounded')}>
							<XCircleIcon className={selectiveClassnames(emailResponse.type == 1 ? 'hidden' : '', 'w-6 h-6')} />
							<CheckCircleIcon className={selectiveClassnames(emailResponse.type == 1 ? '' : 'hidden', 'w-6 h-6')} />
							{emailResponse.message}
						</p>
					</div>

					<div className='lg:flex lg:space-x-8'>
						<label htmlFor='name' className='block w-full'>
							<p className='text-white'>Nombre</p>
							<input disabled={isSending} id='name' name='name' type='text' placeholder='Nombre (opcional)' className='ring-2 rounded px-2 w-full' />
						</label>

						<label htmlFor='phone' className='block mt-4 md:mt-0 w-full'>
							<p className='text-white'>Contacto</p>
							<input disabled={isSending} id='phone' name='phone' type='tel' placeholder='Número de contacto (opcional)' className='ring-2 rounded px-2 w-full' />
						</label>

						<label htmlFor='email' className='block mt-4 md:mt-0 w-full'>
							<p className='text-white'>Correo</p>
							<input disabled={isSending} id='email' name='email' type='email' placeholder='Correo electrónico (opcional)' className='ring-2 rounded px-2 w-full' />
						</label>
					</div>

					<label htmlFor='message' className='block mt-4 w-full'>
						<p className='text-white'>Mensaje<span className='text-rose-500 ml-1'>*</span></p>
						<textarea disabled={isSending} required id='message' name='message' rows={8} placeholder='Escriba su mensaje aquí...' className='w-full rounded px-2'></textarea>
					</label>

					<div className='w-full text-right mt-4'>
						<button disabled={isSending} type='submit' className='px-4 py-2 bg-white rounded drop-shadow-sm ease-out duration-300 hover:drop-shadow-lg hover:scale-105 focus:drop-shadow-lg focus:scale-105 disabled:bg-white/40 disabled:scale-100 disabled:drop-shadow-sm'>
							<span className='flex items-baseline gap-2 text-indigo-800 font-medium'>
								<span>{(!emailResponse.message && isSending) ? 'Enviando...' : 'Enviar'}</span>
								<PaperAirplaneIcon className={selectiveClassnames((!emailResponse.message && isSending) ? 'hidden' : '', 'flex-none rotate-45 w-4 h-4')} />
							</span>
						</button>
					</div>
				</form>
			</div>
		</BlankPageContainer>
	)
}