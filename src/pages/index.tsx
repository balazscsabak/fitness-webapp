import axios from 'axios';
import { useAnimation } from 'framer-motion';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LinkBtn from '../common/elements/buttons/LinkBtn';
import ParallaxBannerImage from '../common/elements/ParallaxBannerImage';
import TriangleDivider from '../common/elements/TriangleDivider';
import TriangleDividerNextItem from '../common/elements/TriangleDividerNextItem';
import CardioSection from '../modules/FitnessFeatures/CardioSection';
import CareerSection from '../modules/FitnessFeatures/CareerSection';
import TwoColClassSection from '../modules/FitnessFeatures/TwoColClassSection';
import HeroSection from '../modules/HeroSection/HeroSection';
import FormWithMap from '../modules/SiteFooter/FormWithMap';
import { ClassType, FrontPageResponseType, ResType } from '../types';
import { CategoryTypes } from '../types/ClassFilterTypes';

type PropTypes = {
	events: {
		id: number;
		title: string;
		description: string;
		sort: number;
		preview_url: string;
	}[];
	classTypes: {
		cardio: ClassType[];
		mobility: ClassType[];
		amplifier: ClassType[];
	};
};

const Home: NextPage<PropTypes> = ({ events, classTypes }: PropTypes) => {
	const firstHeadingControl = useAnimation();
	const secondHeadingControl = useAnimation();
	const [fhRef, fhInView] = useInView({
		threshold: 1,
		rootMargin: '0px 0px -100px 0px',
	});
	const [shRef, shInView] = useInView({
		threshold: 1,
		rootMargin: '0px 0px -100px 0px',
	});

	useEffect(() => {
		if (fhInView) {
			firstHeadingControl.start('visible');
		}
		if (!fhInView) {
			firstHeadingControl.start('hidden');
		}
	}, [firstHeadingControl, fhInView]);

	useEffect(() => {
		if (shInView) {
			secondHeadingControl.start('visible');
		}
		if (!shInView) {
			secondHeadingControl.start('hidden');
		}
	}, [secondHeadingControl, shInView]);

	return (
		<div>
			<div className="w-full pt-0 md:pt-6 pb-10">
				<Link href="/sales-events">
					<div className="container ">
						<HeroSection events={events} />
					</div>
				</Link>
			</div>
			<TriangleDivider bgClass="bg-site-3" mTop={-40} />
			<TriangleDividerNextItem bgClass="bg-purple-linear">
				<div className="mt-10 hidden md:block ">
					<h1 className="h1-shadow h1-shadow--white">Csoportos ??r??k</h1>
				</div>
			</TriangleDividerNextItem>
			<div className="bg-site-2 md:hidden pb-3" style={{ marginBottom: -2 }}>
				<h1 className="h1-shadow text-center h1-shadow--white">
					Csoportos ??r??k
				</h1>
			</div>
			<div className="text-center bg-site-2 px-4 md:px-0">
				<LinkBtn
					text="??sszes ??rat??pus"
					customClasses="btn-dark mx-auto mt-3 w-full md:w-auto"
					href="/timetable"
				/>
			</div>
			<div className="w-full" style={{ marginBottom: -2 }}>
				<div className="bg-site-2 pt-14 pb-14 md:pt-16 md:pb-12">
					<div className="container">
						<TwoColClassSection
							delay={4000}
							direction="text-img"
							classTitle={'Cardio'}
							classDescription={
								'A cardio edz??s l??nyege, hogy felp??rgeti a pulzust, ??gy a szervezet t??bb zs??rt ??get el. Egy komplex zs??r??get?? edz??s nem csak ugr??l??sb??l ??ll, hiszen az anyagcsere fokoz??s??hoz az izomfejleszt??s ??pp??gy fontos. Az a legjobb, ha pulzusn??vel?? ??s er??s??t?? gyakorlatok v??ltj??k egym??st.'
							}
							imgSrcs={classTypes.cardio.map((_class) => _class.preview_url)}
							buttonInfo={{
								isLink: true,
								linkHref: '/',
								text: 'Cardi?? ??r??k',
							}}
							linkHref={`/timetable?s=category&v=${CategoryTypes.CARDIO}`}
						/>
					</div>
				</div>
				<div className="pt-14 pb-14 md:pt-12 md:pb-12 bg-site-9">
					<div className="container">
						<TwoColClassSection
							delay={5000}
							classTitle={'Er??s??t??'}
							direction="img-text"
							classDescription={
								'Az er??s??t?? edz??s l??nyege, hogy megn??veli az izomt??meget, ez??ltal ??talakul a test fel??p??t??se ??s a szervezet anyagcser??je. Ezekkel az edz??sform??kkal javul a kond??ci??nk, alkalmas lehet t??megn??vel??sre, alakform??l??sra is.'
							}
							imgSrcs={classTypes.amplifier.map((_class) => _class.preview_url)}
							buttonInfo={{
								isLink: true,
								linkHref: '/',
								text: 'Er??s??t?? ??r??k',
							}}
							linkHref={`/timetable?s=category&v=${CategoryTypes.AMPLIFIER}`}
						/>
					</div>
				</div>

				<div className="bg-site-2 pt-12 pb-12">
					<div className="container">
						<TwoColClassSection
							delay={4500}
							direction="text-img"
							classTitle={'Mobilit??s'}
							classDescription={
								'Ezeken az ??r??kon kifejezetten a k??l??nb??z?? izomcsoportokra f??kusz??lunk ??s n??velj??k test??nk rugalmass??g??t is. Er??s??t?? ??s ny??jt?? gyakorlatok is megtal??lhat??k benn??k ??s kifejezetten a gerinc eg??szs??g??re is nagy hangs??lyt fektet??nk. Kezd??k ??s id??sebbek is b??tran elkezdhetik vele a mozg??st.'
							}
							imgSrcs={classTypes.mobility.map((_class) => _class.preview_url)}
							buttonInfo={{
								isLink: true,
								linkHref: '/',
								text: 'Mobilit??s ??r??k',
							}}
							linkHref={`/timetable?s=category&v=${CategoryTypes.MOBILITY}`}
						/>
					</div>
				</div>
			</div>
			<div className="bg-site-2 w-full">
				<ParallaxBannerImage
					height="600px"
					customClasses="parallax-banner-homepage"
					src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
			</div>
			<TriangleDivider
				mTop={-155}
				bgClass="bg-site-11"
				customClasses="TriangleDivider--parallax"
			/>
			<TriangleDividerNextItem bgClass="bg-cian-linear" borderColor="#d3e6ea">
				<div className="mt-10 hidden md:block">
					<h1 className="h1-shadow h1-shadow--cian">Cardio r??szleg</h1>
				</div>
			</TriangleDividerNextItem>
			<div className="bg-site-10 md:hidden pb-3">
				<h1 className="h1-shadow text-center h1-shadow--cian">
					Cardio r??szleg
				</h1>
			</div>
			<CardioSection />
			<CareerSection />
			<FormWithMap />
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const {
			data: {
				data: { frontpage },
			},
		} = await axios.get<ResType<FrontPageResponseType>>(
			`${process.env.NEXT_PUBLIC_API_ROUTE}/fitness/page_data/frontpage`
		);

		return {
			props: {
				events: frontpage?.events || [],
				classTypes: frontpage?.class_types || [],
			},
		};
	} catch (error) {
		console.log(error);

		return {
			props: {
				events: [],
				classTypes: [],
			},
		};
	}
};

export default Home;
