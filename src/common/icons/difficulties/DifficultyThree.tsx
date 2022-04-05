import React from 'react';
import DiffOneImg from '../../../../public/images/difficulties/nehezseg-1.svg';

type PropTypes = {
	fillColor: string;
};

const DifficultyThree = ({ fillColor }: PropTypes) => {
	return (
		<div>
			<svg
				className="w-full"
				version="1.1"
				x="0px"
				y="0px"
				height=""
				viewBox="0 0 335.6 335.6"
				fill={fillColor}
			>
				<path
					d="M167.8,335.6C75.3,335.6,0,260.3,0,167.8S75.3,0,167.8,0s167.8,75.3,167.8,167.8S260.3,335.6,167.8,335.6z M167.8,17
	C84.7,17,17,84.6,17,167.8s67.6,150.8,150.8,150.8S318.6,251,318.6,167.8S250.9,17,167.8,17z"
				/>
				<path
					d="M126.5,256.7h-24.4c-4.8,0-8.6-3.9-8.6-8.6V87.5c0-4.8,3.9-8.6,8.6-8.6h24.4c4.8,0,8.6,3.9,8.6,8.6V248
	C135.1,252.8,131.3,256.7,126.5,256.7z"
				/>
				<path
					d="M180,256.7h-24.4c-4.8,0-8.6-3.9-8.6-8.6V87.5c0-4.8,3.9-8.6,8.6-8.6H180c4.8,0,8.6,3.9,8.6,8.6V248
	C188.6,252.8,184.8,256.7,180,256.7z"
				/>
				<path
					d="M233.5,256.7h-24.4c-4.8,0-8.6-3.9-8.6-8.6V87.5c0-4.8,3.9-8.6,8.6-8.6h24.4c4.8,0,8.6,3.9,8.6,8.6V248
	C242.1,252.8,238.3,256.7,233.5,256.7z"
				/>
			</svg>
		</div>
	);
};

export default DifficultyThree;
