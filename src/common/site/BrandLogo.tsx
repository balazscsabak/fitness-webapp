import React from 'react';
import SiteLogo from '../../../public/images/logo.svg';

type PropTypes = {
	fillColor: string;
};

const BrandLogo = ({ fillColor }: PropTypes) => {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			x="0px"
			y="0px"
			viewBox="0 0 807.9 118.3"
			// style="enable-background:new 0 0 807.9 118.3;"
			// xml:space="preserve"
			fill={fillColor}
		>
			<g>
				<polygon points="422.9,101.1 446.8,101.1 461.5,17.3 437.6,17.3 	" />
				<polygon points="522.1,17.3 467.2,17.3 463.4,39.3 479,39.3 468.2,101.1 492.1,101.1 502.9,39.3 518.2,39.3 	" />
				<polygon
					points="575.3,17.3 568.3,56.7 552.3,17.3 527.8,17.3 512.9,101.1 536.7,101.1 544.2,58.6 561.5,101.1 584.5,101.1 
		599.2,17.3 	"
				/>
				<polygon
					points="644.7,70.4 648.6,48.4 623.4,48.4 625,39.2 650.1,39.2 654,17.3 604.9,17.3 590.2,101.1 639.3,101.1 643.1,79.3 
		617.9,79.3 619.4,70.4 	"
				/>
				<path
					d="M692.1,50.1c-7.7-3.3-12.7-5.2-12.2-8.7c0.6-3.3,3.1-4.8,7-4.8c5.3,0,9.4,3.7,11.4,7.7l19.9-13.8
		c-5-6.8-15.3-14.6-29.7-14.6c-16.8,0-29.5,8.3-32.1,23.3c-3,17,7.8,22.9,17.8,27.3c6.9,3,13,4.5,12.3,8.7c-0.5,2.9-2.9,4.9-7.2,4.9
		c-4.9,0-9.6-2.9-12.5-9.5l-20.9,14.3c5.9,9.8,15.6,17.3,32.1,17.3c18.9,0,30.1-11.6,32.4-24.4C713.3,60.2,702.1,54.6,692.1,50.1z"
				/>
				<path
					d="M754.1,15.9c-16.8,0-29.5,8.3-32.1,23.3c-3,17,7.8,22.9,17.8,27.3c6.9,3,13,4.5,12.3,8.7c-0.5,2.9-2.9,4.9-7.2,4.9
		c-4.9,0-9.6-2.9-12.5-9.5l-21,14.4c5.9,9.8,15.6,17.3,32.1,17.3c18.9,0,30.1-11.6,32.4-24.4c3.1-17.7-8.1-23.3-18.1-27.8
		c-7.7-3.3-12.7-5.2-12.2-8.7c0.6-3.3,3.1-4.8,7-4.8c5.3,0,9.4,3.7,11.4,7.7l19.9-13.8C778.7,23.7,768.5,15.9,754.1,15.9z"
				/>
				<polygon points="278.6,70 289.5,70 287.4,52.6 	" />
				<path
					d="M799.3,0H358.6H32.5h-6.6c-4.1,0-7.7,3-8.4,7.1L0.1,108.4c-0.9,5.2,3.1,9.9,8.4,9.9h3.6h386.8h383c4.1,0,7.7-3,8.4-7.1
		L807.7,9.9C808.6,4.7,804.6,0,799.3,0z M332.8,17.3L312,37.6l-2.9-20.3H332.8z M88.6,77.9c-2.3,12.9-13.4,24.4-32.4,24.4
		c-16.5,0-26.3-7.6-32.1-17.3L45,70.7c2.9,6.7,7.6,9.5,12.5,9.5c4.4,0,6.8-2.1,7.2-4.9c0.7-4.2-5.4-5.7-12.3-8.7
		c-10-4.4-20.8-10.3-17.8-27.3C37.2,24.3,50,16,66.7,16c14.5,0,24.7,7.8,29.7,14.6L76.5,44.4c-2-4-6.1-7.7-11.4-7.7
		c-3.9,0-6.4,1.5-7,4.8c-0.6,3.6,4.5,5.4,12.2,8.7C80.4,54.6,91.7,60.2,88.6,77.9z M122.3,102.2c-21.3,0-30.9-11-27.3-31l9.5-53.9
		h24.3l-10,54.3c-1,6.1,0.3,9.4,5.3,9.4c4.8,0,7.5-2.6,8.7-9.2l9.8-54.5h23.8l-9.6,54.5C153.2,92,143.5,102.2,122.3,102.2z
		 M204.2,102.2c-27.5,0-43.5-22-39.2-47c3.8-22.1,23.5-39,46.6-39c17.7,0,30.8,9.2,37.1,22.5l-23.4,10.6
		c-2.2-6.3-7.6-10.6-15.6-10.6c-11.2,0-19.3,8.1-21.2,18.6c-2.2,11.7,4.8,22.5,17.8,22.5c6.7,0,11.5-3,14.7-7.6h-20.2l3.9-22h46.5
		l-2.3,13.1C245,85.3,228.3,102.2,204.2,102.2z M293.3,101.1l-1.3-10h-24.3l-5,10h-24.9l44.1-83.8h23.8l11.7,83.8H293.3z M804.9,9.4
		l-17.4,101.3c-0.5,2.7-2.8,4.7-5.6,4.7h-384l-4.9-14.3l0,0l5.5-31.1h24l3.9-22h-24l1.5-8.6h24l3.9-22h-65.3
		c22.1,0,33.5,14.7,30.4,33.6c-1.3,8.3-6.2,15.6-14.1,20.4c-0.5,0.3-1.1,0.6-1.7,1c-0.6,0.3-1.2,0.6-1.8,0.9l9.6,27.9h-26.2
		l-6.3-23.8h-7.6l-4.1,23.8h-23.9l14.7-83.8h28.8l-4.9-14.5h439.7c1.7,0,3.3,0.7,4.3,2C804.7,6.1,805.2,7.8,804.9,9.4z"
				/>
				<path
					d="M361.3,38.5h-5.4l-3.2,17.9h7.5c3.7,0,6.5-0.7,8.5-2c0,0,0.1,0,0.1-0.1c0.2-0.1,0.4-0.3,0.6-0.4l0.1-0.1
		c0.2-0.1,0.3-0.3,0.5-0.4l0,0c0.5-0.5,0.9-1,1.2-1.5c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.1-0.2,0.2-0.4
		c0.1-0.1,0.1-0.2,0.2-0.4c0.1-0.1,0.1-0.3,0.2-0.4c0-0.1,0.1-0.2,0.1-0.4c0.1-0.2,0.1-0.4,0.2-0.5c0-0.1,0.1-0.2,0.1-0.3
		c0.1-0.3,0.1-0.6,0.2-0.9c0.8-5.2-1.5-9.4-10-9.4L361.3,38.5L361.3,38.5z"
				/>
			</g>
		</svg>
	);
	// return <img src={SiteLogo.src} />;
};

export default BrandLogo;
