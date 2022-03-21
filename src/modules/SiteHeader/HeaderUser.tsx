import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/solid';
import LoginSection from '../../common/site/LoginSection';
import { useSession } from 'next-auth/react';
import { useUser } from '../../hooks';
import UserImage from '../../../public/images/woman.jpg';
import { Menu, Transition } from '@headlessui/react';
import { IoTriangle } from 'react-icons/io5';
import Link from 'next/link';

const HeaderUser = (): JSX.Element => {
	const [showLogin, setShowLogin] = useState(false);
	const { status } = useSession();
	const { doSignOut, user } = useUser();

	const toggleLogin = () => {
		if (status === 'loading') return;

		if (status === 'unauthenticated') {
			setShowLogin(true);
		}
	};

	const doLogout = async () => {
		const attempt = await doSignOut();
	};

	return (
		<>
			{status === 'authenticated' ? (
				<div className="nav-user__image">
					<Menu as="div" className="relative">
						<Menu.Button as="div">
							<img src={UserImage.src} className=" bg-glow-purple" />
							<div className="text-site-4 uppercase text-sm mt-2 cursor-pointer absolute top-full left-1/2 -translate-x-1/2">
								{user?.first_name}
							</div>
						</Menu.Button>
						<Transition
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Menu.Items className="absolute top-full right-0 bg-white rounded-xl py-3 px-4 z-40 outline-0">
								<div
									className="absolute"
									style={{ bottom: 'calc(100% - 3px)', right: 28 }}
								>
									<IoTriangle fill="white" className=" text-xl" />
								</div>
								<Menu.Item>
									<Link href="/profile">
										<a
											className={`block text-left text-site-4 hover:text-site-9`}
										>
											Profilom
										</a>
									</Link>
								</Menu.Item>
								<Menu.Item>
									<span
										onClick={doLogout}
										className={`block text-left pointer cursor-pointer text-site-4 hover:text-site-9`}
									>
										Kijelentkezés
									</span>
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			) : (
				<div
					onClick={toggleLogin}
					className="h-16 w-16 bg-gray-200 border border-site-2 rounded-full cursor-pointer bg-glow-purple relative"
				>
					{/* asdasd */}
					<UserIcon className="p-4 text-site-4" />
					<div className="text-site-4 uppercase text-sm mt-2 cursor-pointer -tracking-tight absolute top-full left-1/2 -translate-x-1/2">
						Bejelentkezés
					</div>
				</div>
			)}
			<LoginSection
				showLogin={showLogin}
				hideLogin={() => setShowLogin(false)}
			/>
		</>
	);
};

export default HeaderUser;
