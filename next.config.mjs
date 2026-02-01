/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Vercel에서 자동 이미지 최적화 활성화
    formats: ['image/avif', 'image/webp'],
    // 모바일 우선으로 크기 최적화
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 캐시 시간 증가로 재요청 감소
    minimumCacheTTL: 31536000, // 1년
    // 이미지 최적화 품질 설정
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 빌드 성능 최적화
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dropdown-menu'],
  },
  // React 19 호환성
  reactStrictMode: true,
}

export default nextConfig
