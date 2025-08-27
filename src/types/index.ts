export interface User {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
	refreshToken: string;
}

export interface LoginCredentials {
	username: string;
	password: string;
}

export interface LoginResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
	refreshToken: string;
}

// Product types
export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	sku: string;
	weight: number;
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: Review[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: {
		createdAt: string;
		updatedAt: string;
		barcode: string;
		qrCode: string;
	};
	images: string[];
	thumbnail: string;
}

export interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}

export interface ProductsResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

// API Error types
export interface ApiError {
	message: string;
	status?: number;
}

// Auth Store types
export interface AuthState {
	user: User | null;
	isLoading: boolean;
	error: string | null;
	isAuthenticated: boolean;
	login: (credentials: LoginCredentials) => Promise<boolean>;
	logout: () => void;
	clearError: () => void;
	checkAuth: () => void;
}

// Products Store types
export interface ProductsState {
	products: Product[];
	isLoading: boolean;
	error: string | null;
	fetchProducts: () => Promise<void>;
	clearError: () => void;
}
