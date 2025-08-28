export interface Review {
	rating?: number;
	comment?: string;
	date?: string;
	reviewerName?: string;
	reviewerEmail?: string;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
	description?: string;
	category?: string;
	discountPercentage?: number;
	rating?: number;
	stock?: number;
	tags?: string[];
	brand?: string;
	sku?: string;
	weight?: number;
	dimensions?: {
		width?: number;
		height?: number;
		depth?: number;
	};
	warrantyInformation?: string;
	shippingInformation?: string;
	availabilityStatus?: string;
	reviews?: Review[];
	returnPolicy?: string;
	minimumOrderQuantity?: number;
	meta?: {
		createdAt?: string;
		updatedAt?: string;
		barcode?: string;
		qrCode?: string;
	};
	images?: string[];
}
