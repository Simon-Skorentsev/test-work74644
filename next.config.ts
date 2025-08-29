import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	typedRoutes: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.dummyjson.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.dummyjson.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	sassOptions: {
		prependData: `@use '@/config/vars' as *;@use '@/config/mixins' as *;`,
	},
};

export default nextConfig;
