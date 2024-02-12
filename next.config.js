/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol:"https",
            hostname: 'i.pinimg.com',
          },
        ],
      }, 
    experimental:{
      serverActions:true,
    }
}

module.exports = nextConfig
