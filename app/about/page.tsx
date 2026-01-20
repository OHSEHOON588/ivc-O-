"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-24">
        {/* About Us Section with Introduction */}
        <section id="about" className="py-4 md:py-24 relative" aria-labelledby="about-heading">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-4 md:mb-[60px] text-center">
              <h2
                id="about-heading"
                className="text-xl sm:text-2xl md:text-[45px] lg:text-[54px] font-bold mb-2 md:mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  INTRODUCTION
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-4 md:mb-12" />
            </div>

            {/* Introduction */}
            <div className="mb-4 md:mb-[60px]">
              
              <div className="relative flex flex-col md:block">
                {/* Floating Image - Background Style (Desktop only) */}
                <div 
                  className="hidden lg:block float-right ml-6 mb-3 relative z-0 w-[300px] h-[300px]"
                  style={{ 
                    shapeOutside: 'circle(50% at 50% 50%)',
                    shapeMargin: '0.75rem'
                  }}
                >
                  <Image
                    src="/images/traditional-logo-black.svg"
                    alt="IVC Traditional Logo"
                    width={600}
                    height={605}
                    sizes="(max-width: 1024px) 200px, 600px"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden mb-3 flex justify-center">
                  <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]">
                    <Image
                      src="/images/traditional-logo-black.svg"
                      alt="IVC Traditional Logo"
                      width={600}
                      height={605}
                      sizes="(max-width: 640px) 120px, 150px"
                      className="w-full h-full object-contain opacity-80"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content - 모바일에서 자연스럽게 흐르는 텍스트, PC에서는 원래 개행 유지 */}
                <div className="w-full text-base sm:text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-white/80 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words">
                  <p className="mb-4 md:mb-[13.5px]">
                    인하벤처클럽(IVC, Inha Venture Club)은<br className="hidden sm:inline" />
                    1997년, 대한민국 1세대 벤처기업 비트컴퓨터 창업자 조현정 회장에 의해 설립된<br className="hidden sm:inline" />
                    인하대학교 최초의 창업 동아리입니다.
                  </p>
                  <p className="mb-4 md:mb-[13.5px]">
                    IVC는 단순한 창업 동아리를 넘어,<br className="hidden sm:inline" />
                    인하대학교 창업지원단에 소속된 직할 조직으로서 운영되고 있으며<br className="hidden sm:inline" />
                    현재는 인하대학교 내 최대 규모의 창업 커뮤니티로 자리매김하고 있습니다.
                  </p>
                  <p className="mb-4 md:mb-[13.5px]">
                    설립 이후 IVC는 아이디어 단계에 머무르지 않고,<br className="hidden sm:inline" />
                    문제 정의–해결–실행까지 이어지는 실전 중심의 창업 활동을 지향해 왔습니다.<br className="hidden sm:inline" />
                    이를 위해 정기 세미나, 프로젝트 기반 활동, 기업 연계 프로그램,<br className="hidden sm:inline" />
                    선·후배 간 네트워킹을 통해 실제 창업 경험과 역량을 축적할 수 있는 환경을 만들어가고 있습니다.
                  </p>
                  <p>
                    IVC는 &apos;학생 창업가가 성장할 수 있는 가장 현실적인 커뮤니티&apos;를 목표로,<br className="hidden sm:inline" />
                    앞으로도 인하대학교 창업 생태계의 중심에서<br className="hidden sm:inline" />
                    도전과 실행을 이어가는 창업 인재들을 연결하고 지원해 나가고자 합니다.
                  </p>
                </div>
                
                {/* Clear float */}
                <div className="clear-both"></div>
              </div>
            </div>

            {/* Alumni Company Sales Image */}
            <div className="mt-4 md:mt-[60px]">
              <div className="w-full max-w-screen-xl mx-auto">
                <Image
                  src="/images/alumni-sales-2024.jpg"
                  alt="2024 Alumni 기업 매출 - 총 163,364,225,842 원"
                  width={900}
                  height={506}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 67.5vw, 900px"
                  className="w-full h-auto object-contain rounded-lg mx-auto"
                  loading="lazy"
                  quality={70}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}