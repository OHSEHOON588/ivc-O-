"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

interface AlumniCard {
  id: number
  name: string
  imageUrl: string
  link: string
}

export default function AlumniVenturesPage() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Alumni Ventures 데이터 - 이미지와 링크를 포함
  // 사용자가 나중에 이미지와 링크를 추가할 예정
  const alumniCards: AlumniCard[] = [
    {
      id: 1,
      name: "비트컴퓨터",
      imageUrl: "/images/alumni-ventures/1.png",
      link: "https://www.bit.kr/"
    },
    {
      id: 2,
      name: "와이즈플래닛컴퍼니",
      imageUrl: "/images/alumni-ventures/2.png",
      link: "https://wplanet.co.kr/"
    },
    {
      id: 3,
      name: "퓨처 디자이너",
      imageUrl: "/images/alumni-ventures/3.png",
      link: "https://futuredesigners.kr/"
    },
    {
      id: 4,
      name: "애즈위메이크",
      imageUrl: "/images/alumni-ventures/4.png",
      link: "https://www.aswemake.com/"
    },
    {
      id: 5,
      name: "프라우드넷",
      imageUrl: "/images/alumni-ventures/5.png",
      link: "https://proudnet.com/"
    },
    {
      id: 6,
      name: "오렌지랩",
      imageUrl: "/images/alumni-ventures/6.png",
      link: "https://www.orangelab.co.kr/"
    },
    {
      id: 7,
      name: "아템포",
      imageUrl: "/images/alumni-ventures/7.png",
      link: "https://en.atempo.kr/"
    },
    {
      id: 8,
      name: "수퍼트리",
      imageUrl: "/images/alumni-ventures/8.png",
      link: "https://supertree.co/"
    },
    {
      id: 9,
      name: "라이프스퀘어",
      imageUrl: "/images/alumni-ventures/9.png",
      link: "https://lifesquare.kr/"
    },
    {
      id: 10,
      name: "러닝라이프",
      imageUrl: "/images/alumni-ventures/10.png",
      link: "https://rife.kr/"
    },
    {
      id: 11,
      name: "정리중독",
      imageUrl: "/images/alumni-ventures/11.png",
      link: "https://smartstore.naver.com/thinkhaus/for-you?cp=1"
    },
    {
      id: 12,
      name: "토타로",
      imageUrl: "/images/alumni-ventures/12.png",
      link: "https://www.totaro.co.kr/"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img src="/images/ivc-logo.svg" alt="IVC Logo" className="h-8 md:h-10 w-auto" />
              </button>
            </div>

            {/* Desktop Navigation Menu - 중앙 정렬 */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5 flex items-center gap-[3px]"
                  >
                    ABOUT US
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/about')}
                  >
                    INTRODUCTION
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/about/leadership')}
                  >
                    LEADERSHIP TEAM
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5 flex items-center gap-[3px]"
                  >
                    RECRUITING
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/recruiting/application-process')}
                  >
                    APPLICATION PROCESS & TIMELINE
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => router.push('/recruiting/qa')}
                  >
                    Q&A
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
                onClick={() => router.push("/alumni-ventures")}
              >
                ALUMNI VENTURES
              </Button>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
                onClick={() => router.push("/media")}
              >
                MEDIA
              </Button>
              <Button
                variant="ghost"
                className="text-xs lg:text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-transparent transition-all duration-300 px-[9px] py-1.5"
                onClick={() => router.push("/contact")}
              >
                CONTACT
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-white/10 py-4">
              <div className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/about')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  INTRODUCTION
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/about/leadership')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  LEADERSHIP TEAM
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/recruiting/application-process')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  APPLICATION PROCESS & TIMELINE
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/recruiting/qa')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Q&A
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/alumni-ventures')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  ALUMNI VENTURES
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/media')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  MEDIA
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                  onClick={() => {
                    router.push('/contact')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  CONTACT
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-32">
        <section className="py-8 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
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
                      loading="lazy"
                      quality={70}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      onError={(e) => {
                        // 이미지 로드 실패 시 플레이스홀더 표시
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
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
