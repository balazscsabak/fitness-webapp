import React, { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { ResType, PassType, OrderType } from '../../types';
import Btn from '../../common/elements/buttons/Btn';
import PassPurchaseDialog from '../../modules/Actions/Pass/PassPurchaseDialog';
import { useSiteStates, useUser } from '../../hooks';
import { getHufFormat } from '../../utils';
import PassPurchaseResponse from '../../modules/Actions/Pass/PassPurchaseResponse';

type PropTypes = {
	passTypes: PassType[];
	inPurchase: OrderType | false;
};

const Prices = ({ passTypes, inPurchase }: PropTypes) => {
	const { status } = useUser();
	const { doShowLogin } = useSiteStates();
	const { selectedPass, doSetSelectedPass, doShowPassPurchaseResponse } =
		useSiteStates();
	const groupType: PassType[] = [];
	const fitnessType: PassType[] = [];

	passTypes.forEach((passType) => {
		if (passType.type === 'fitness') fitnessType.push(passType);
		if (passType.type === 'group') groupType.push(passType);
	});

	const passPurchaseClick = (passType: PassType) => {
		if (status === 'loading') return;

		if (status === 'unauthenticated') {
			doShowLogin();
			return;
		}

		doSetSelectedPass(passType);
	};

	useEffect(() => {
		if (inPurchase) {
			doShowPassPurchaseResponse(inPurchase);
		}
	}, []);

	return (
		<div className="Prices page">
			<div className="container pb-10">
				<div className="bg-white rounded-3xl px-10 pb-6 pt-10 drop-shadow-md mb-10">
					<h1 className="h1-shadow h1-shadow--purple mb-6">
						Csoportos bérletek
					</h1>

					<p className="mb-2">
						Az ár az órákon túl alkalmanként 30 perc kardió és erősítő rész
						használatot is magában foglal. A délelőtt bérlet kizárólag a
						15:00-ig elkezdődő órákon használható.
					</p>

					<div className="divide-y  divide-site-6">
						{groupType.map((pass) => (
							<div className="price-row py-6" key={pass.id}>
								<div className="title">{pass.title}</div>
								<div className="price">
									<Btn
										text={getHufFormat(pass.price)}
										appendBefore={<FaShoppingCart className="mr-4 text-lg" />}
										clickEvent={() => passPurchaseClick(pass)}
										customClasses="btn-dark flex ml-auto normal-case min-w-custom-1 justify-center items-center"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-white rounded-3xl px-10 pb-6 pt-10 drop-shadow-md mb-10">
					<h1 className="h1-shadow h1-shadow--purple mb-6">Fitness Bérletek</h1>
					<p className="mb-2">
						Egy belépéssel 2 óra edzésidő áll rendelkezésre, ennek túllépése
						esetén még egy alkalom levonódik a bérletről. A délelőtti bérlettel
						maximum 14:00-ig lehet a kardió és erősítő részleg területére
						belépni, és azt legkésőbb 16:00-ig el kell hagyni.
					</p>
					<div className="divide-y divide-site-6">
						{fitnessType.map((pass) => (
							<div className="price-row py-6" key={pass.id}>
								<div className="title">{pass.title}</div>
								<div className="desc">Nem hosszabítható</div>
								<div className="price">
									<Btn
										text={getHufFormat(pass.price)}
										appendBefore={<FaShoppingCart className="mr-4 text-lg" />}
										clickEvent={() => passPurchaseClick(pass)}
										customClasses="btn-dark flex ml-auto normal-case min-w-custom-1 justify-center items-center"
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="leading-8 text-justify">
					Az 5 alkalmas bérletek 30 napig, a 10, illetve 14 alkalmas bérletek 45
					napig érvényesek. A bérletek meghosszabbítására kiegészítő díj (2 990
					Ft) megfizetése ellenében van lehetőség, amely 2 hét meghosszabbítást
					jelent az aktuális bérleten. Az aktuális bérlet meghosszabbítására egy
					alkalommal van lehetőség! A cardio és erősítő részleg használatakor
					&quot;1 alkalom&quot; maximum 120 perc ott tartózkodásra jogosít. A
					csoportos órákra váltott jegyekkel, illetve a csoportos bérletekből
					felhasznált alkalmakkal az órákon felül vendégeink még 30 percig
					használhatják fitnessünk cardio és erősítő részlegét. Délelőtti
					csoportos bérlettel a legkésőbb 15:00-kor kezdődő órákon lehet részt
					venni, a délelőtti cardio- és erősítő bérlettel maximum 14:00-ig lehet
					a Fitness területére belépni, és legkésőbb 16:00-ig el kell hagyni
					azt. Délelőtti bérlettel rendelkezők 1 290 Ft kiegészítő díj ellenében
					részt vehetnek délutáni órákon is. A nyugdíjas- és diákbérleteinket a
					lenti jegy- és bérletárakhoz képest 15%-kal olcsóbban válthatják meg
					az arra jogosult látogatóink. Pénztárainknál az alábbi kártyákat
					fogadjuk el: All You Can Move kártya, SZÉP Kártya (OTP, K&H, MKB).
					Zugló kártyával 30% kedvezménnyel lehet megváltani cardio- és erősítő
					jegyeinket és bérleteinket. A kártya által biztosított 30%-os
					kedvezmény más kedvezményekkel nem vonható össze! ISIC (International
					Student Identity Card) és ITIC (International Teacher Identity Card)
					nemzetközi igazolvánnyal rendelkező vendégeink saját maguk számára
					mindenkori árainkhoz képest 15% kedvezménnyel válthatják meg jegyüket,
					illetve bérletüket a Sugár Fitnessbe, a kedvezményre jogosító okirat
					bemutatásával.
				</div>
			</div>

			<PassPurchaseDialog />
			<PassPurchaseResponse />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let inPurchase: OrderType | false = false;
	const { hash } = context.query;

	if (hash && hash !== '') {
		try {
			const { data } = await axios.get<ResType<OrderType>>(
				`${process.env.NEXT_PUBLIC_ORDER_SERVICE_ROUTE}/orders/by_hash/${hash}`
			);

			if (data.status) {
				inPurchase = data.data.order || false;
			} else {
				return {
					redirect: {
						permanent: false,
						destination: '/404',
					},
				};
			}
		} catch (error) {
			return {
				redirect: {
					permanent: false,
					destination: '/404',
				},
			};
		}
	}

	try {
		const {
			data: {
				data: { pass_types },
			},
		} = await axios.get<ResType<PassType[]>>(
			`${process.env.NEXT_PUBLIC_API_ROUTE}/fitness/pass_types/tradeables`
		);

		console.log(pass_types);

		return {
			props: {
				passTypes: pass_types || [],
				inPurchase,
			},
		};
	} catch (error) {
		console.log(error);

		return {
			props: {
				passTypes: [],
				inPurchase,
			},
		};
	}
};

export default Prices;
