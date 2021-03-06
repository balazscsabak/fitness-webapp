import { BsViewList } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import { HiMap } from 'react-icons/hi';
import ClassFilter from '../../modules/ClassFilter/ClassFilter';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { addDays, format } from 'date-fns';
import { ResType, SessionType, OrderType } from '../../types';
import type { NextPage } from 'next';
import { ViewList } from '../../types/ClassFilterTypes';
import { useClassFilter, useSiteStates } from '../../hooks';
import { useEffect } from 'react';
import ReservationDialog from '../../modules/Actions/Reservation/ReservationDialog';
import ReservationResponse from '../../modules/Actions/Reservation/ReservationResponse';

type PropTypes = {
	sessions: SessionType[];
	inPurchase: OrderType | false;
};

const Timetable: NextPage<PropTypes> = ({
	sessions,
	inPurchase,
}: PropTypes) => {
	const {
		classFilterState: { view, startDate },
		classFilterDispatch,
	} = useClassFilter();

	const filterClick = (type: ViewList): void => {
		classFilterDispatch({ type: 'SET_VIEW', payload: type });
	};
	const { doShowReservationPurchaseResponse } = useSiteStates();

	useEffect(() => {
		if (inPurchase) {
			doShowReservationPurchaseResponse(inPurchase);
		}
	}, []);

	return (
		<div className="Timetable_page page ">
			<div className="relative container">
				<h1 className="px-4 h1-shadow h1-shadow--purple text-center">
					Csoportos órakereső
				</h1>
				<div className="flex mt-4 md:mt-0 justify-center text-xl text-site-1 md:absolute md:right-5 md:top-1/2 md:-translate-y-1/2">
					<div
						className={`pl-3 pr-2 py-2 rounded-tl-2xl rounded-bl-2xl cursor-pointer ${
							view === ViewList.SWIPER ? 'bg-site-4' : 'bg-site-6'
						} `}
						onClick={() => filterClick(ViewList.SWIPER)}
					>
						<HiMap />
					</div>
					<div
						className={`px-3 py-2 border-l-site-1 border-l border-r border-r-site-1 cursor-pointer ${
							view === ViewList.CALENDAR ? 'bg-site-4' : 'bg-site-6'
						}`}
						onClick={() => filterClick(ViewList.CALENDAR)}
					>
						<GoCalendar />
					</div>
					<div
						className={`pl-2 pr-3 py-2 rounded-tr-2xl rounded-br-2xl cursor-pointer ${
							view === ViewList.LIST ? 'bg-site-4' : 'bg-site-6'
						}`}
						onClick={() => filterClick(ViewList.LIST)}
					>
						<BsViewList />
					</div>
				</div>
			</div>
			<ClassFilter sessions={sessions} />
			<ReservationDialog />
			<ReservationResponse />
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

	const fromDate = format(new Date(), 'yyyy-MM-dd');
	const toDate = format(addDays(new Date(), 6), 'yyyy-MM-dd');

	try {
		const {
			data: {
				data: { sessions },
			},
		} = await axios.post<ResType<SessionType[]>>(
			`${process.env.NEXT_PUBLIC_API_ROUTE}/fitness/sessions/filtered`,
			{
				by_date: {
					from: fromDate,
					to: toDate,
				},
			}
		);

		return {
			props: {
				sessions: sessions || [],
				inPurchase,
			},
		};
	} catch (error) {
		console.log(error);

		return {
			props: {
				sessions: [],
			},
		};
	}
};

export default Timetable;
