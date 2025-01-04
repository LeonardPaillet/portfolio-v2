/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com", // Domaine des images Notion
        port: "",
        pathname: "**", // Autoriser toutes les sous-routes
      },
    ],
  },
};

export default nextConfig;
