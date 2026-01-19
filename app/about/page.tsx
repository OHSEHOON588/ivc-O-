"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AboutPage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSe1eTaWQaWvbBSqIqmrAzpAxGccGhlYLE1pQqBnrmkIEkbYpA/viewform?usp=dialog"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10" role="navigation" aria-label="Main navigation">
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
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
            <div className="hidden md:flex items-center gap-[18px] lg:gap-6 flex-1 justify-center">
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
                  className="w-36 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer text-xs text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5"
                    onClick={() => {
                      const element = document.getElementById('about')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
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
                  className="w-[168px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
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

          {/* Mobile Navigation Menu - 계층 구조로 항상 펼쳐진 상태 */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-white/10 py-2">
              <div className="flex flex-col gap-0">
                {/* ABOUT US 섹션 - 하위 메뉴 항상 펼쳐진 상태 */}
                <div className="flex flex-col">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT US
                  </Button>
                  {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                  <div className="pl-8 mb-2 space-y-1">
                    <button
                      onClick={() => {
                        const element = document.getElementById('about')
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      INTRODUCTION
                    </button>
                    <button
                      onClick={() => {
                        router.push('/about/leadership')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      LEADERSHIP TEAM
                    </button>
                  </div>
                </div>

                {/* RECRUITING 섹션 */}
                <div className="flex flex-col border-t border-gray-200 dark:border-white/10 mt-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    RECRUITING
                  </Button>
                  {/* 하위 메뉴 - 항상 표시, 들여쓰기, 글머리 기호 */}
                  <div className="pl-8 mb-2 space-y-1">
                    <button
                      onClick={() => {
                        router.push('/recruiting/application-process')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      APPLICATION PROCESS & TIMELINE
                    </button>
                    <button
                      onClick={() => {
                        router.push('/recruiting/qa')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full flex items-center justify-start text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-2 px-4 min-h-[44px] rounded-md transition-colors"
                    >
                      <span className="mr-2 text-gray-400 dark:text-white/40">•</span>
                      Q&A
                    </button>
                  </div>
                </div>

                {/* 기타 메뉴 */}
                <div className="flex flex-col border-t border-gray-200 dark:border-white/10 mt-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => {
                      router.push('/alumni-ventures')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    ALUMNI VENTURES
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => {
                      router.push('/media')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    MEDIA
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base font-medium text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5 py-3 px-4 min-h-[48px]"
                    onClick={() => {
                      router.push('/contact')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    CONTACT
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

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

                {/* Text Content - 모바일에서 자연스럽게 흐르는 텍스트 */}
                <div className="w-full text-base sm:text-base md:text-[15px] lg:text-[18px] text-gray-700 dark:text-white/80 leading-[1.8] sm:leading-relaxed md:leading-relaxed break-words">
                  <p className="mb-4 md:mb-[13.5px]">
                    인하벤처클럽(IVC, Inha Venture Club)은 1997년, 대한민국 1세대 벤처기업 비트컴퓨터 창업자 조현정 회장에 의해 설립된 인하대학교 최초의 창업 동아리입니다.
                  </p>
                  <p className="mb-4 md:mb-[13.5px]">
                    IVC는 단순한 창업 동아리를 넘어, 인하대학교 창업지원단에 소속된 직할 조직으로서 운영되고 있으며 현재는 인하대학교 내 최대 규모의 창업 커뮤니티로 자리매김하고 있습니다.
                  </p>
                  <p className="mb-4 md:mb-[13.5px]">
                    설립 이후 IVC는 아이디어 단계에 머무르지 않고, 문제 정의–해결–실행까지 이어지는 실전 중심의 창업 활동을 지향해 왔습니다. 이를 위해 정기 세미나, 프로젝트 기반 활동, 기업 연계 프로그램, 선·후배 간 네트워킹을 통해 실제 창업 경험과 역량을 축적할 수 있는 환경을 만들어가고 있습니다.
                  </p>
                  <p>
                    IVC는 &apos;학생 창업가가 성장할 수 있는 가장 현실적인 커뮤니티&apos;를 목표로, 앞으로도 인하대학교 창업 생태계의 중심에서 도전과 실행을 이어가는 창업 인재들을 연결하고 지원해 나가고자 합니다.
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
                  src="/images/alumni-sales-2024.png"
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