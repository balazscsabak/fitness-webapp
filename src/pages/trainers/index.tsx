import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ContentLoader from '../../common/elements/ContentLoader';
import TriangleDivider from '../../common/elements/TriangleDivider';
import TriangleDividerNextItem from '../../common/elements/TriangleDividerNextItem';
import FiveColSwiper from '../../common/swiper/FiveColSwiper';
import { useGetTrainers } from '../../queries';
import { TrainerType } from '../../types';
import { unescape } from 'lodash';
import LinkBtn from '../../common/elements/buttons/LinkBtn';
import DefaultEmployeeImg from '../../../public/images/defaults/default-employee.jpeg';
import { motion } from 'framer-motion';

type PropTypes = {
	trainers: TrainerType[];
};

const Trainers: NextPage<PropTypes> = () => {
	const { data, isLoading } = useGetTrainers();
	const [selectedTrainer, setSelectedTrainer] = useState<
		TrainerType | undefined
	>(undefined);
	const trainers = data?.data.trainers || [];

	useEffect(() => {
		if (!selectedTrainer && data?.data.trainers) {
			setSelectedTrainer(data?.data.trainers[2]);
		}
	}, [data]);

	return (
		<div className="Trainers_page page">
			<div className="container">
				<div>
					<h1 className="h1-shadow h1-shadow--purple text-center mb-8">
						Oktatók
					</h1>
				</div>
				{isLoading ? (
					<div className="flex items-center justify-center pt-20 pb-28">
						<ContentLoader />
					</div>
				) : (
					<FiveColSwiper
						initialSlide={2}
						onSlideChange={(swiper: any) => {
							if (trainers) {
								setSelectedTrainer(trainers[swiper.snapIndex]);
							}
						}}
						imgSrcs={trainers.map((trainer) =>
							trainer.preview_url
								? `${trainer.preview_url}`
								: DefaultEmployeeImg.src
						)}
					/>
				)}
			</div>

			<TriangleDivider bgClass="bg-site-3" mTop={-20} />

			<TriangleDividerNextItem>
				<div className="bg-site-2 mt-10">
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h1-shadow h1-shadow--white"
						key={selectedTrainer?.last_name || '' + selectedTrainer?.first_name}
					>
						{selectedTrainer?.last_name} {selectedTrainer?.first_name}
					</motion.h1>
				</div>
			</TriangleDividerNextItem>

			{selectedTrainer && (
				<div className="bg-site-2 pb-16">
					<motion.div
						animate={{ opacity: 1, scale: 1 }}
						initial={{ opacity: 0.3, scale: 0.95 }}
						className="container"
						key={selectedTrainer.first_name + selectedTrainer.last_name}
					>
						<div className="text-center p-quote p-quote--white">
							{unescape(selectedTrainer.motto)}
						</div>
						<div className="text-center font-montserrat italic text-white py-10">
							{selectedTrainer.position}
						</div>
						<div className="flex gap-6 justify-center mb-14 flex-wrap">
							<LinkBtn
								text="Összes óratípus"
								href={`/timetable?s=trainer&v=${selectedTrainer.last_name} ${selectedTrainer.first_name}`}
								customClasses="btn-dark"
							/>
							{Object.keys(selectedTrainer.related_class_types).map((key) => (
								<LinkBtn
									// @ts-ignore
									key={selectedTrainer.related_class_types[key].title}
									// @ts-ignore
									text={selectedTrainer.related_class_types[key].title}
									// @ts-ignore
									href={`/timetable?s=type&v=${selectedTrainer.related_class_types[key].title}&v=${selectedTrainer.last_name} ${selectedTrainer.first_name}`}
									customClasses="btn-dark"
								/>
							))}
						</div>

						<div className="text-white mb-10">
							<div
								dangerouslySetInnerHTML={{
									__html: unescape(selectedTrainer.description),
								}}
							></div>
						</div>

						<div className="grid grid-cols-2 gap-10 flex-wrap">
							{selectedTrainer?.others?.videos?.map((video) => (
								// @ts-ignore
								<div key={video.link}>
									<iframe
										style={{ borderRadius: '14px' }}
										width="100%"
										height="350px"
										// @ts-ignore
										src={video.link}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="Embedded youtube"
									/>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Trainers;
