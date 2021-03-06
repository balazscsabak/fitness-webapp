import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MapBg from '../../../public/images/map-bg.png';
import Btn from '../../common/elements/buttons/Btn';
import LinkBtn from '../../common/elements/buttons/LinkBtn';
import ContentLoader from '../../common/elements/ContentLoader';
import { useActions, useToasts } from '../../hooks';
import { validateEmail } from '../../utils';

type FormValues = {
	email: string;
	name: string;
	message: string;
};

const FormWithMap = () => {
	const { notify } = useToasts();
	const { doSendContactMessage } = useActions();
	const [onAttempt, setOnAttempt] = useState(false);
	const {
		register,
		handleSubmit,
		getValues,
		setError,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = async () => {
		const email = getValues('email');
		const message = getValues('message');
		const name = getValues('name');

		if (!validateEmail(email)) {
			notify('ERROR', 'Hibás e-mail cím formátum');
			return false;
		}

		setOnAttempt(true);

		const res = await doSendContactMessage(name, email, message);

		setOnAttempt(false);

		if (res.status) {
			notify('SUCCESS', res.message);
		} else {
			notify('ERROR', res.message);
		}
	};

	return (
		<div className="bg-site-14 FormWithMap px-4">
			<div className="container w-full flex flex-col-reverse md:flex-row gap-10 md:gap-28 items-center">
				<div className="basis-full">
					<img src={MapBg.src} className="FormWithMap__map-img " />
				</div>
				<div className="w-full md:basis-full py-6 md:py-14">
					<form onSubmit={handleSubmit(onSubmit)} className="relative">
						<h1 className=" h1-shadow h1-shadow--white-2 mb-5 text-center md:text-left pt-6 md:pt-0">
							Kapcsolat
						</h1>
						<div className="mb-5">
							<label htmlFor="name" className="text-white mb-1 block">
								Név
							</label>
							<input
								type="text"
								id="name"
								className={`white-input ${
									errors.name ? 'border-2 border-rose-500' : ''
								}`}
								{...register('name', {
									required: 'Mező megadása kötelező',
								})}
							/>
						</div>
						<div className="mb-5">
							<label htmlFor="email" className="text-white mb-1 block">
								E-mail cím
							</label>
							<input
								type="email"
								id="email"
								className={`white-input ${
									errors.email ? 'border-2 border-rose-500' : ''
								}`}
								{...register('email', {
									required: 'Mező megadása kötelező',
								})}
							/>
						</div>
						<div className="mb-8 md:mb-6">
							<label htmlFor="message" className="text-white mb-1 block">
								Üzenet szövege
							</label>
							<textarea
								id="message"
								className={`white-textarea ${
									errors.message ? 'border-2 border-rose-500' : ''
								}`}
								style={{ minHeight: 170 }}
								{...register('message', {
									required: 'Mező megadása kötelező',
								})}
							/>
						</div>
						<div className="text-center md:text-right">
							<Btn
								text="Küldés"
								customClasses="btn-gray w-full md:w-auto"
								clickEvent={() => true}
							/>
						</div>

						{onAttempt && (
							<div className="absolute inset-0 flex justify-center items-center bg-site-14 rounded-xl bg-opacity-70">
								<ContentLoader spinnerColor="white" />
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormWithMap;
