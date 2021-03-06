import React from 'react';

type PropTypes = {
	customClasses: string;
	fillColor: string;
};

const CardioHeartIcon = ({ customClasses, fillColor }: PropTypes) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			className={customClasses}
			fill={fillColor}
		>
			<g>
				<g>
					<path d="M25.8,3.5c-3.07-1.6-6.6-.84-9.8,2.07C12.8,2.66,9.27,1.9,6.2,3.5c-3.77,2-5.92,7-5,11.78,2.06,10.6,14,14.8,14.46,15a1,1,0,0,0,.65,0c.51-.17,12.4-4.37,14.46-15C31.71,10.54,29.56,5.47,25.8,3.5ZM7.13,5.28a5.12,5.12,0,0,1,2.39-.6c1.87,0,3.85,1,5.76,3a1,1,0,0,0,1.44,0C19.48,4.82,22.38,4,24.87,5.28c3,1.55,4.7,5.78,4,9.63l0,.09H22a1,1,0,0,0-.8.4L19,18.33,13.8,11.4a1,1,0,0,0-1.6,0L9.5,15H3.2l0-.09C2.43,11.05,4.16,6.83,7.13,5.28Zm8.87,23C14.29,27.58,6.4,24.11,3.78,17H10a1,1,0,0,0,.8-.4L13,13.67l5.2,6.93a1,1,0,0,0,1.6,0L22.5,17h5.72C25.6,24.11,17.71,27.58,16,28.25Z" />
				</g>
			</g>
		</svg>
	);
};

export default CardioHeartIcon;
