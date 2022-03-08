import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import NormalDarkButton from '../../common/elements/buttons/NormalDarkButton';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { ResType, PassTypes } from '../../types';
import { chunk } from 'lodash';
import testPassTyesData from '../../static/testPassTypesData.json';

type PropTypes = {
	passTypes: PassTypes[];
};

const Prices = ({ passTypes }: PropTypes) => {
	const _passTypes = chunk(testPassTyesData, testPassTyesData.length / 2);
	console.log(_passTypes);

	return (
		<div className="Prices page">
			<div className="container pb-10">
				<div className="bg-white rounded-3xl px-10 pb-6 pt-10 drop-shadow-md mb-10">
					<h1 className="h1-shadow h1-shadow--purple mb-6">
						Csoportos bérletek
					</h1>

					<p className="mb-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
						nulla ad facere autem voluptatem ullam. Aperiam molestias possimus
						odit nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						A, fuga.
					</p>

					<div className="divide-y divide-site-6">
						{_passTypes[0].map((pass) => (
							<div className="price-row py-6" key={pass.id}>
								<div className="title">{pass.title}</div>
								<div className="desc">Nem hosszabítható</div>
								<div className="price">
									<NormalDarkButton
										text={(pass.price as unknown as string) + ' Ft'}
										isLink={false}
										customClasses="flex items-center justify-center ml-auto"
										appendBefore={<FaShoppingCart className="mr-4 text-lg" />}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-white rounded-3xl px-10 pb-6 pt-10 drop-shadow-md mb-10">
					<h1 className="h1-shadow h1-shadow--purple mb-6">Fitness Bérletek</h1>
					<p className="mb-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
						nulla ad facere autem voluptatem ullam. Aperiam molestias possimus
						odit nobis.
					</p>
					<div className="divide-y divide-site-6">
						{_passTypes[1].map((pass) => (
							<div className="price-row py-6" key={pass.id}>
								<div className="title">{pass.title}</div>
								<div className="desc">Nem hosszabítható</div>
								<div className="price">
									<NormalDarkButton
										text={(pass.price as unknown as string) + ' Ft'}
										isLink={false}
										customClasses="flex items-center justify-center ml-auto"
										appendBefore={<FaShoppingCart className="mr-4 text-lg" />}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="leading-8 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
					nemo ab? Quia, odio. Nemo, cum architecto consectetur optio id tenetur
					amet ducimus dicta veniam autem ullam qui nulla maxime, sequi
					molestiae, exercitationem cupiditate placeat non inventore
					consequuntur! Nesciunt alias iste tempora praesentium doloremque
					reiciendis dolor veniam quo blanditiis ipsum qui iusto asperiores
					placeat fugiat sunt rerum doloribus accusantium cumque ex non natus, a
					possimus? Repellat cumque voluptas iste, quia tempora dicta
					exercitationem pariatur deleniti blanditiis quidem beatae eum
					perferendis necessitatibus at dolor nihil nesciunt commodi facere
					itaque fugiat accusantium, incidunt ipsam corrupti illum? Ullam
					voluptates laboriosam, eos nisi corporis nihil quos in illum ratione,
					perspiciatis ea deserunt natus ipsum? Quam placeat atque porro quod
					nobis beatae non magnam accusantium maiores labore debitis aut, iste
					consequuntur nostrum, odio, blanditiis voluptatum deleniti provident
					in natus quis nemo. Libero est adipisci repudiandae itaque dolorum ab
					recusandae quas sunt hic! Sunt adipisci pariatur atque, nemo
					repellendus vel provident ipsa, quia ea neque non suscipit eveniet
					consequuntur sed necessitatibus quaerat, facere labore perferendis
					veniam fugiat nam! Quod dolor inventore veritatis, rem nam beatae
					atque, commodi illo obcaecati tenetur error pariatur mollitia ratione
					itaque provident! Ipsum quaerat dignissimos sit repellat iure dicta,
					in libero aut?
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const {
			data: {
				data: { pass_types },
			},
		} = await axios.get<ResType<PassTypes[]>>(
			`${process.env.NEXT_PUBLIC_API_ROUTE}/fitness/pass_types`
		);

		return {
			props: {
				passTypes: pass_types || [],
			},
		};
	} catch (error) {
		return {
			props: {
				passTypes: [],
			},
		};
	}
};

export default Prices;