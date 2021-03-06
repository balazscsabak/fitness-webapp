import React from 'react';

type PropTypes = {
	customClasses: string;
	fillColor: string;
};

const CardioWatchIcon = ({ customClasses, fillColor }: PropTypes) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			className={customClasses}
			fill={fillColor}
		>
			<g>
				<g>
					<path d="M27,12h0V10a5,5,0,0,0-4-4.9V4a3,3,0,0,0-3-3H12A3,3,0,0,0,9,4V5.1A5,5,0,0,0,5,10V22a5,5,0,0,0,4,4.9V28a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V26.9A5,5,0,0,0,27,22V20h0a2,2,0,0,0,2-2V14A2,2,0,0,0,27,12Zm-6.53-1.58a4,4,0,0,0-4.47.64,4,4,0,0,0-4.47-.64A5.35,5.35,0,0,0,9.1,16.09c.94,4.87,6.35,6.78,6.58,6.86a1,1,0,0,0,.65,0c.23-.08,5.63-2,6.58-6.86A5.35,5.35,0,0,0,20.47,10.42Zm.47,5.29h0c-.61,3.13-3.89,4.77-4.94,5.22-1.05-.45-4.33-2.08-4.94-5.22a3.39,3.39,0,0,1,1.4-3.52,1.64,1.64,0,0,1,.77-.19,3.13,3.13,0,0,1,2.06,1.11,1,1,0,0,0,1.43,0c.7-.72,1.76-1.47,2.82-.92A3.39,3.39,0,0,1,20.94,15.71ZM12,3h8a1,1,0,0,1,1,1V5H11V4A1,1,0,0,1,12,3Zm8,26H12a1,1,0,0,1-1-1V27H21v1A1,1,0,0,1,20,29Zm5-7a3,3,0,0,1-3,3H10a3,3,0,0,1-3-3V10a3,3,0,0,1,3-3H22a3,3,0,0,1,3,3Z" />
				</g>
			</g>
		</svg>
	);
};

export default CardioWatchIcon;
