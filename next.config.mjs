/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //  unoptimized: true, // ← Add this lin
    domains: [
      "www.axiapr.com",
      "thumbs.dreamstime.com",
      "thumbs.dreamstime.com",
      "resonance-next-app.vercel.app",
      "3.imimg.com",
      "greenwoodhigh.edu.in",
      "encrypted-tbn0.gstatic.com",
      "res.cloudinary.com",
      "images.pexels.com",
      "winshine.in",
      "videos.pexels.com",
      "img.freepik.com",
    ], // Add the domain from which you're loading images
  },
  // output: "export",
};

export default nextConfig;
