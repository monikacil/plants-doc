import withPWA from 'next-pwa';

const config = {
    reactStrictMode: true,
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
};
const nextConfig = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
})(
    config
);
export default nextConfig;
