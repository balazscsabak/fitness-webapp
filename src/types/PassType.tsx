export default interface PassType {
	id: number;
	title: string;
	description?: string;
	duration: number;
	points: number;
	price: number;
	type: string;
	discount?: string;
}
