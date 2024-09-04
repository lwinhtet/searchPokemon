/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.pokemondb.net'], // Add your image domains here
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemon',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
