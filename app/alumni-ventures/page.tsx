"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"

interface AlumniCard {
  id: number
  name: string
  imageUrl: string
  link: string
}

export default function AlumniVenturesPage() {
  // Alumni Ventures 데이터 - 이미지와 링크를 포함
  // 사용자가 나중에 이미지와 링크를 추가할 예정
  const alumniCards: AlumniCard[] = [
    { id: 1, name: "비트컴퓨터", imageUrl: "/images/alumni-ventures/1.jpg", link: "https://www.bit.kr/" },
    { id: 2, name: "와이즈플래닛컴퍼니", imageUrl: "/images/alumni-ventures/2.jpg", link: "https://wplanet.co.kr/" },
    { id: 3, name: "퓨처 디자이너", imageUrl: "/images/alumni-ventures/3.jpg", link: "https://futuredesigners.kr/" },
    { id: 4, name: "애즈위메이크", imageUrl: "/images/alumni-ventures/4.jpg", link: "https://www.aswemake.com/" },
    { id: 5, name: "프라우드넷", imageUrl: "/images/alumni-ventures/5.jpg", link: "https://proudnet.com/" },
    { id: 6, name: "오렌지랩", imageUrl: "/images/alumni-ventures/6.jpg", link: "https://www.orangelab.co.kr/" },
    { id: 7, name: "아템포", imageUrl: "/images/alumni-ventures/7.jpg", link: "https://en.atempo.kr/" },
    { id: 8, name: "수퍼트리", imageUrl: "/images/alumni-ventures/8.jpg", link: "https://supertree.co/" },
    { id: 9, name: "라이프스퀘어", imageUrl: "/images/alumni-ventures/9.jpg", link: "https://lifesquare.kr/" },
    { id: 10, name: "러닝라이프", imageUrl: "/images/alumni-ventures/10.jpg", link: "https://rife.kr/" },
    { id: 11, name: "정리중독", imageUrl: "/images/alumni-ventures/11.jpg", link: "https://smartstore.naver.com/thinkhaus/for-you?cp=1" },
    { id: 12, name: "토타로", imageUrl: "/images/alumni-ventures/12.jpg", link: "https://www.totaro.co.kr/" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      <Navigation />

      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        <section className="py-8 md:py-16 lg:py-20">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Title */}
            <div className="mb-8 md:mb-20 text-center">
              <h1 className="text-3xl md:text-[45px] lg:text-[54px] font-bold mb-4 md:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] bg-clip-text text-transparent">
                  ALUMNI VENTURES
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-black via-[#dc143c] to-[#dc143c] dark:from-black dark:via-[#dc143c] dark:to-[#dc143c] mx-auto mb-8 md:mb-12" />
            </div>

            {/* Alumni Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
              {alumniCards.map((card) => (
                <a
                  key={card.id}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/10 relative"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      priority
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                              <span class="text-gray-400 dark:text-gray-600 text-sm">이미지 준비 중</span>
                            </div>
                          `
                        }
                      }}
                    />
                    {/* Hover Overlay with Company Name */}
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm md:text-xl font-semibold text-center px-4">
                        {card.name}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

